import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ChatDisplay from './ChatDisplay';
import MessageInput from './MessageInput';
// import SettingsModal from './SettingsModal';
// import SettingsPanel from './SettingsPanel';
import SystemPromptInput from './SystemPromptInput';
import type { Message, ModelConfig } from './type/type';
import { Box, Stack } from '@mui/material';

const dummyReplies = [
  "Let me check that for you.",
  "Interesting question, let me think...",
  "Here's something you might find helpful.",
  "Thanks for your message! Here's my take.",
  "Sure! I can help you with that.",
];

interface ModelResponse {
  localModel: Message[];
  foreignModel: Message[];
}

const CompareTab: React.FC = () => {
  const [message, setMessage] = useState('');
  const [systemPrompt, setSystemPrompt] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [_openSettings, _setOpenSettings] = useState(false);
  const [respondLoading, setRespondLoading] = useState({
    localModel: false,
    foreignModel: false
  });

  // Model configurations
  const [_localModel, _setLocalModel] = useState<ModelConfig>({
    name: 'Local Model',
    temperature: 0.7,
    outputLength: 50,
    safety: 'None'
  });

  const [_foreignModels, _setForeignModels] = useState<ModelConfig[]>([
    {
      name: 'GPT-4',
      temperature: 0.7,
      outputLength: 50,
      safety: 'Moderate'
    },
    {
      name: 'Claude-3',
      temperature: 0.8,
      outputLength: 60,
      safety: 'Strict'
    }
  ]);

  const [_selectedForeignModel, _setSelectedForeignModel] = useState(0);
  const [messages, setMessages] = useState<ModelResponse>({
    localModel: [],
    foreignModel: []
  });

//   const isMobile = useMediaQuery(theme.breakpoints.down('md'));

//   const toggleSettings = () => setOpenSettings(!openSettings);
  const toggleExpand = () => setExpanded((prev) => !prev);

  const getRandomReply = () => dummyReplies[Math.floor(Math.random() * dummyReplies.length)];

  const updateModelResponse = (modelType: keyof ModelResponse, newMessage: Message) => {
    setMessages(prev => ({
      ...prev,
      [modelType]: [...prev[modelType], newMessage]
    }));
  };

  const handleSendMessage = (modelType: keyof ModelResponse) => {
    if (!message.trim()) return;

    const userMessage: Message = { sender: 'user', message };
    updateModelResponse(modelType, userMessage);
    setMessage('');
    
    setRespondLoading(prev => ({ ...prev, [modelType]: true }));

    setTimeout(() => {
      const botReply: Message = { sender: 'bot', message: getRandomReply() };
      updateModelResponse(modelType, botReply);
      setRespondLoading(prev => ({ ...prev, [modelType]: false }));
    }, 1500);
  };

  const handleSend = () => {
    handleSendMessage('localModel');
    handleSendMessage('foreignModel');
  };

  const handleSendSuggestion = (suggestion: string) => {
    setMessage(suggestion);
    handleSend();
  };

  // const _currentForeignModel = foreignModels[selectedForeignModel];

  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.15, duration: 0.5 }}
      sx={{ height: '100%' }}
    >
      <Box sx={{ py: 1, height: '100%' }}>
        <Stack direction="column" spacing={3} height="100%">
          <SystemPromptInput
            expanded={expanded}
            toggleExpand={toggleExpand}
            systemPrompt={systemPrompt}
            setSystemPrompt={setSystemPrompt}
          />

          <Stack 
            direction={{ xs: 'column', md: 'row' }} 
            spacing={2} 
            flex={1}
            sx={{ minHeight: 0 }} // Important for proper scrolling
          >
            {/* Local Model Chat */}
            
                <ChatDisplay 
                  messages={messages.localModel} 
                  respondLoading={respondLoading.localModel} 
                //   modelType="local"
                />
              

            {/* Foreign Model Chat */}
            
                <ChatDisplay 
                  messages={messages.foreignModel} 
                  respondLoading={respondLoading.foreignModel} 
                //   modelType="foreign"
                />
              
          </Stack>

          {/* Shared Message Input */}
          <Box sx={{ mt: 'auto' }}>
            <MessageInput 
              message={message} 
              messages={[...messages.localModel, ...messages.foreignModel]}
              onSend={handleSend} 
              setMessage={setMessage} 
              onSendSuggestion={handleSendSuggestion}
            />
          </Box>
        </Stack>
      </Box>

      {/* Settings Modal */}
      {/* <SettingsModal
        open={openSettings}
        onClose={toggleSettings}
        settingsProps={{
          localModel,
          foreignModels,
          selectedForeignModel,
          setLocalModel,
          setForeignModels,
          setSelectedForeignModel
        }}
      /> */}
    </Box>
  );
};

export default CompareTab;