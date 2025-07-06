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
            <TopNav {...{ mode, anchorEl, compareMode, toggleCompare, handleMenuClose, handleMenuOpen }} />
            <ChatSection {...{ mode, model, messages, compare: compareMode, messagesEndRef, handleEditMessage, toggleCompare }} />
            <InputArea {...{ mode, input, onSend: handleSend, setInput, onKeyDown: handleKeyDown }} />
        </Box>
    );


    const renderCompareStateReander = () => (
        <Box sx={p_styles(mode).mainChatCon}>
            <TopNav {...{ mode, anchorEl, compareMode, toggleCompare, handleMenuClose, handleMenuOpen }} />
            <Box sx={p_styles(mode).compareContainer}>
                <ChatSection {...{ mode, model, modelID: 'A', messages, compare: compareMode, messagesEndRef, handleEditMessage, toggleCompare }} />
                <ChatSection {...{ mode, model, modelID: 'B', messages, compare: compareMode, messagesEndRef, handleEditMessage, toggleCompare }} />
            </Box>
            <InputArea {...{ mode, input, onSend: handleSend, setInput, onKeyDown: handleKeyDown }} />
        </Box>
    );



    const renderSettingsModal = () => (
        <Modal open={settingsOpen} onClose={toggleSettings} sx={p_styles(mode).modelSetingsCon}>
            <Box sx={p_styles(mode).modelSettingsBox}>
                <SettingsPanel {...{ mode, model, safety, temperature, outputLength, setModel, setSafety, setTemperature, setOutputLength }} />
            </Box>
        </Modal>
    );

    return (
        <Box sx={p_styles(mode).mainPlaygroundCon}>
            {!compareMode && (
                <Settings {...{ mode, model, safety, temperature, outputLength, systemMessage, toggleSettings, setSystemMessage }} />
            )}
            {compareMode ? renderCompareStateReander() : renderRightPanel()}
            {renderSettingsModal()}
        </Box>
    );
};

export default Playground;