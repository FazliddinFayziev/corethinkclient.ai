import React, { useState, useRef, useEffect } from 'react';
import TopNav from './TopNav';
import Settings from './Settings';
import InputArea from './InputArea';
import { p_styles } from './Styles';
import type { Message } from './type';
import ChatSection from './ChatSection';
import { Box, Modal } from '@mui/material';
import SettingsPanel from './SettingsPanel';
import { MODELS, SAFETY_MODELS } from './data';
import { useGlobalContext } from '../../context/context';

// Helper functions for consistent styling
const getMessageBorderColor = (mode: boolean): string => mode ? '#333' : '#e0e0e0';

const Playground: React.FC = () => {
    const { mode } = useGlobalContext();
    const [compareMode, setCompareMode] = useState(false);

    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [model, setModel] = useState(MODELS[0]);
    const [safety, setSafety] = useState(SAFETY_MODELS[0]);
    const [temperature, setTemperature] = useState(0.7);
    const [outputLength, setOutputLength] = useState(50);
    const [systemMessage, setSystemMessage] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [_editMessageId, setEditMessageId] = useState<string | null>(null);
    const messagesEndRef = useRef<any>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage: Message = {
            role: 'user',
            content: input,
            id: Date.now().toString()
        };
        setMessages([...messages, userMessage]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                role: 'assistant',
                content: generateAIResponse(),
                id: (Date.now() + 1).toString()
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);
    };

    const generateAIResponse = (): string => {
        return `Here's a response from ${model} with temperature ${temperature}:\n\n` +
            `Safety setting: ${safety}\n\n` +
            `Here's some example code:\n\n` +
            '```python\n' +
            'def calculate_fibonacci(n):\n' +
            '    if n <= 1:\n' +
            '        return n\n' +
            '    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)\n' +
            '```\n\n' +
            'And some formatted text:\n\n' +
            '*This is italic* and **this is bold**\n\n' +
            `Current output length: ${outputLength}`;
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditMessage = (id: string) => {
        setEditMessageId(id);
        const message = messages.find(m => m.id === id);
        if (message) {
            setInput(message.content);
        }
        setMessages(messages.filter(m => m.id !== id));
    };

    const toggleSettings = () => setSettingsOpen(!settingsOpen);
    const toggleCompare = () => setCompareMode(!compareMode);

    const renderRightPanel = () => (
        <Box sx={p_styles(mode).mainChatCon}>
            {/* Nav Area */}
            <TopNav
                mode={mode}
                anchorEl={anchorEl}
                compareMode={compareMode}
                toggleCompare={toggleCompare}
                handleMenuOpen={handleMenuOpen}
                handleMenuClose={handleMenuClose}
            />

            {/* Chat Area */}
            <ChatSection
                mode={mode}
                model={model}
                messages={messages}
                compare={compareMode}
                messagesEndRef={messagesEndRef}
                handleEditMessage={handleEditMessage}
            />

            {/* Input Area */}
            <InputArea
                mode={mode}
                input={input}
                onSend={handleSend}
                setInput={setInput}
                onKeyDown={handleKeyDown}
            />
        </Box>
    );


    const renderCompareStateReander = () => (
        <Box sx={p_styles(mode).mainChatCon}>
            {/* Nav Area */}
            <TopNav
                mode={mode}
                anchorEl={anchorEl}
                compareMode={compareMode}
                toggleCompare={toggleCompare}
                handleMenuOpen={handleMenuOpen}
                handleMenuClose={handleMenuClose}
            />

            <Box sx={{
                flex: 1,
                overflowY: 'auto',
                display: 'flex',
                gap: 1,
                px: 1,
                pb: 1,
            }}>
                <ChatSection
                    mode={mode}
                    model={model}
                    modelID='A'
                    messages={messages}
                    compare={compareMode}
                    messagesEndRef={messagesEndRef}
                    handleEditMessage={handleEditMessage}
                />

                <ChatSection
                    mode={mode}
                    model={model}
                    modelID='B'
                    messages={messages}
                    compare={compareMode}
                    messagesEndRef={messagesEndRef}
                    handleEditMessage={handleEditMessage}
                />
            </Box>

            {/* Input Area */}
            <InputArea
                mode={mode}
                input={input}
                onSend={handleSend}
                setInput={setInput}
                onKeyDown={handleKeyDown}
            />
        </Box>
    );



    const renderSettingsModal = () => (
        <Modal open={settingsOpen} onClose={toggleSettings} sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <Box sx={{
                backgroundColor: mode ? '#1e1e1e' : '#ffffff',
                border: `1px solid ${getMessageBorderColor(mode)}`,
                borderRadius: '8px',
                width: '400px',
                p: 3,
                outline: 'none'
            }}>
                <SettingsPanel
                    model={model}
                    safety={safety}
                    temperature={temperature}
                    outputLength={outputLength}
                    setModel={setModel}
                    setSafety={setSafety}
                    setTemperature={setTemperature}
                    setOutputLength={setOutputLength}
                    mode={mode}
                />
            </Box>
        </Modal>
    );

    return (
        <Box sx={p_styles(mode).mainPlaygroundCon}>
            {!compareMode && (
                <Settings
                    mode={mode}
                    model={model}
                    safety={safety}
                    temperature={temperature}
                    outputLength={outputLength}
                    systemMessage={systemMessage}
                    toggleSettings={toggleSettings}
                    setSystemMessage={setSystemMessage}
                />
            )}
            {compareMode ? renderCompareStateReander() : renderRightPanel()}
            {renderSettingsModal()}
        </Box>
    );
};

export default Playground;