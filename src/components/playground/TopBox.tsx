import React from 'react';
import { Box, TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

interface TopBoxProps {
  mode: boolean;
  id: 'A' | 'B';
  model: string;
  systemMessage: string;
  setSystemMessage: (msg: string) => void;
}

const TopBox: React.FC<TopBoxProps> = ({
  mode,
  id,
  model,
  systemMessage,
  setSystemMessage,
}) => {
  const isA = id === 'A';
  const color = isA ? '#f7d99e' : '#cfc2ff';
  const textColor = '#000';

  return (
    <Box
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        borderBottom: `1px solid ${mode ? '#333' : '#ccc'}`,
        backgroundColor: mode ? '#1e1e1e' : '#fafafa',
        px: 1.5,
        py: 1,
      }}
    >
      {/* Top Row: Label + Model */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
        {/* A / B Label */}
        <Box
          sx={{
            backgroundColor: color,
            color: textColor,
            fontWeight: 600,
            fontSize: 12,
            px: 1,
            py: 0.3,
            borderRadius: '8px 0 0 8px',
            minWidth: 18,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {id}
        </Box>

        {/* Model Name + Settings */}
        <Box
          sx={{
            backgroundColor: color,
            color: textColor,
            fontWeight: 500,
            fontSize: 12,
            px: 1,
            py: 0.3,
            borderRadius: '0 8px 8px 0',
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
          }}
        >
          {model}
          <SettingsIcon sx={{ fontSize: 15 }} />
        </Box>
      </Box>

      {/* System Message Input */}
      <TextField
        value={systemMessage}
        onChange={(e) => setSystemMessage(e.target.value)}
        placeholder="Describe model behavior (tone, tools, style...)"
        fullWidth
        multiline
        maxRows={3}
        variant="outlined"
        size="small"
        sx={{
          fontSize: 12,
          '& .MuiInputBase-root': {
            borderRadius: 2,
            backgroundColor: mode ? '#2a2a2a' : '#fff',
            color: mode ? '#fff' : '#000',
          },
          '& textarea': {
            fontSize: 12,
            fontFamily: 'Dosis',
            lineHeight: 1.4,
            padding: '6px',
          },
        }}
      />
    </Box>
  );
};

export default TopBox;
