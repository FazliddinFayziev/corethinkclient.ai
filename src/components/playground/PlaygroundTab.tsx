import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatDisplay from './ChatDisplay';
import MessageInput from './MessageInput';
import { Box, Stack, useMediaQuery, useTheme } from '@mui/material';
import type { Message } from './type/type';
import SettingsPanel from './SettingsPanel';
import PlaygroundHeader from './PlaygroundHeader';
import SystemPromptInput from './SystemPromptInput';
import ApiViewModal from './ApiViewModal';
import SettingsModal from './SettingsModal';

const dummyReplies = [
  "Let me check that for you.",
  "Interesting question, let me think...",
  "Here's something you might find helpful.",
  "Thanks for your message! Here's my take.",
  "Sure! I can help you with that.",
];

const PlaygroundTab: React.FC = () => {
  const [message, setMessage] = useState('');
  const [safety, setSafety] = useState('None');
  const [expanded, setExpanded] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [temperature, setTemperature] = useState(0.7);
  const [outputLength, setOutputLength] = useState(50);
  const [systemPrompt, setSystemPrompt] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [respondLoading, setRespondLoading] = useState(false);
  const [model, setModel] = useState('deepseek-ai/DeepSeek-R1');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const toggleModal = () => setOpenModal(!openModal);
  const toggleSettings = () => setOpenSettings(!openSettings);
  const toggleExpand = () => setExpanded((prev) => !prev);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = { sender: 'user', message };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setMessage('');
    setRespondLoading(true);

    setTimeout(() => {
      const botReply: Message = {
        sender: 'bot',
        message: dummyReplies[Math.floor(Math.random() * dummyReplies.length)],
      };

      setMessages((prev) => [...prev, botReply]);
      setRespondLoading(false);
    }, 1500);

    console.log('--- Sending Message ---');
    console.log('System Prompt:', systemPrompt);
    console.log('Model:', model);
    console.log('Safety:', safety);
    console.log('Temperature:', temperature);
    console.log('Output Length:', outputLength);
    console.log('Messages:', updatedMessages);
  };

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
    >
      <PlaygroundHeader
        model={model}
        toggleModal={toggleModal}
        toggleSettings={toggleSettings}
      />

      <Box sx={{ py: 1 }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={3} width="100%">
          <Stack flex={1} spacing={2}>
            <SystemPromptInput
              expanded={expanded}
              toggleExpand={toggleExpand}
              systemPrompt={systemPrompt}
              setSystemPrompt={setSystemPrompt}
            />
            <ChatDisplay messages={messages} respondLoading={respondLoading} />
            <MessageInput message={message} setMessage={setMessage} onSend={handleSend} />
          </Stack>

          {/* Show settings panel only on larger screens */}
          {!isMobile && (
            <SettingsPanel
              model={model}
              safety={safety}
              setModel={setModel}
              setSafety={setSafety}
              temperature={temperature}
              outputLength={outputLength}
              setTemperature={setTemperature}
              setOutputLength={setOutputLength}
            />
          )}
        </Stack>
      </Box>

      <ApiViewModal openModal={openModal} setOpenModal={setOpenModal} />

      {/* Settings modal for mobile */}
      <SettingsModal
        open={openSettings}
        onClose={toggleSettings}
        settingsProps={{
          model,
          safety,
          setModel,
          setSafety,
          temperature,
          outputLength,
          setTemperature,
          setOutputLength
        }}
      />
    </Box>
  );
};

export default PlaygroundTab;