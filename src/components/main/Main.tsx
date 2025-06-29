import React, { useState } from 'react';
import { Box, Typography, Button, TextField, IconButton } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const navLinks = ['Playground', 'Dashboard', 'Docs', 'API Reference'];
const sidebarItems = ['Prompts', 'Images', 'Realtime', 'Assistants', 'TTS'];

const Main: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    const newMessages = [...messages, { role: 'user', content: input }, { role: 'assistant', content: `Echo: ${input}` }];
    setMessages(newMessages);
    setInput('');
  };

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Top Navbar */}
      <Box
        sx={{
          height: '56px',
          width: '100%',
          borderBottom: '1px solid #333',
          backgroundColor: '#111',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          px: 3,
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 10
        }}
      >
        <Typography variant="h6">CoreThink Playground</Typography>
        <Box sx={{ display: 'flex', gap: 3 }}>
          {navLinks.map(link => (
            <Typography key={link} sx={{ cursor: 'pointer', '&:hover': { opacity: 0.7 } }}>
              {link}
            </Typography>
          ))}
        </Box>
      </Box>

      {/* Main Body */}
      <Box sx={{ display: 'flex', flex: 1, mt: '56px', height: 'calc(100vh - 56px)' }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: '240px',
            minWidth: '240px',
            borderRight: '1px solid #333',
            backgroundColor: '#1e1e1e',
            color: '#fff',
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            gap: 2
          }}
        >
          {sidebarItems.map(item => (
            <Button key={item} sx={{ color: '#fff', justifyContent: 'flex-start' }}>
              {item}
            </Button>
          ))}
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            flex: 1,
            backgroundColor: '#121212',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            p: 2,
            gap: 2
          }}
        >
          {/* Tabs Section */}
          <Box sx={{ border: '1px solid #333', p: 2 }}>
            <Typography variant="body1">Prompt Configuration Section</Typography>
          </Box>

          {/* Chat Area */}
          <Box sx={{ border: '1px solid #333', flex: 1, display: 'flex', flexDirection: 'column', p: 2, gap: 2 }}>
            <Box sx={{ flex: 1, overflowY: 'auto', p: 1, border: '1px solid #444' }}>
              {messages.map((msg, idx) => (
                <Typography
                  key={idx}
                  sx={{
                    color: msg.role === 'user' ? '#00C8FF' : '#90EE90',
                    mb: 1
                  }}
                >
                  <strong>{msg.role === 'user' ? 'User' : 'Assistant'}:</strong> {msg.content}
                </Typography>
              ))}
            </Box>
            <Box sx={{ display: 'flex', gap: 1 }}>
              <TextField
                fullWidth
                variant="outlined"
                placeholder="Chat with your prompt..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                sx={{ input: { color: '#fff' } }}
              />
              <IconButton onClick={handleSend} sx={{ color: '#00C8FF' }}>
                <SendIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Main;
