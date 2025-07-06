import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import TuneIcon from '@mui/icons-material/Tune';
import { Box, IconButton, TextField, Tooltip } from '@mui/material';

const modelShortNames: Record<string, string> = {
  'deepseek-ai/DeepSeek-R1': 'DeepSeek',
  'openchat/openchat-3.5': 'OpenChat 3.5',
  'gpt-4o': 'GPT-4o',
};

interface TopBoxProps {
  mode: boolean;
  id: 'A' | 'B';
  model: string;
  systemMessage: string;
  toggleCompare: () => void;
  setSystemMessage: (msg: string) => void;
}

const TopBox: React.FC<TopBoxProps> = ({
  mode,
  id,
  model,
  systemMessage,
  toggleCompare,
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
        backgroundColor: mode ? '#1e1e1e' : '#f9f9f9',
        px: 1,
        py: 1,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 1,
          mb: 0.5,
        }}
      >
        {/* Label + Model + Tune */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.1 }}>
          {/* ID Label */}
          <Box
            sx={{
              backgroundColor: color,
              color: textColor,
              fontWeight: 600,
              fontSize: 11,
              px: 0.7,
              py: 0.2,
              borderRadius: '6px 0 0 6px',
              minWidth: 16,
              textAlign: 'center',
            }}
          >
            {id}
          </Box>

          {/* Model Name */}
          <Tooltip title={model} arrow placement="top">
            <Box
              sx={{
                backgroundColor: color,
                color: textColor,
                fontWeight: 500,
                fontSize: 11,
                px: 0.7,
                py: 0.2,
                borderRadius: 0,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                maxWidth: 70,
              }}
            >
              {modelShortNames[model] || model.split(" ")[0]}
            </Box>
          </Tooltip>

          {/* Tune Icon */}
          <Box
            sx={{
              backgroundColor: color,
              color: textColor,
              px: 0.6,
              py: 0.2,
              borderRadius: '0 6px 6px 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TuneIcon sx={{ fontSize: 15.5 }} />
          </Box>
        </Box>

        {/* Close Button */}
        <IconButton
          onClick={toggleCompare}
          size="small"
          sx={{
            p: 0.5,
            color: mode ? '#fff' : '#000',
            '&:hover': { backgroundColor: 'transparent' },
          }}
        >
          <CloseIcon sx={{ fontSize: 16 }} />
        </IconButton>
      </Box>

      {/* System Prompt Input */}
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
          '& .MuiInputBase-root': {
            borderRadius: 1,
            backgroundColor: mode ? '#2a2a2a' : '#fff',
            color: mode ? '#fff' : '#000',
            fontSize: 12,
            px: 1,
            py: 0.5,
          },
          '& textarea': {
            fontFamily: 'Dosis',
            fontSize: 12,
            lineHeight: 1.3,
            padding: '4px 6px',
          },
        }}
      />
    </Box>
  );
};

export default TopBox;
