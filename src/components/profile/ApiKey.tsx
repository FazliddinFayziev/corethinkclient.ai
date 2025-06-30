import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Modal,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { FONTS } from '../../styles/GlobalStyles';
import { useGlobalContext } from '../../context/context';

const generateRandomKey = (label: string) => {
  const randomPart = Math.random().toString(36).substring(2, 10);
  return `sk-${label.toLowerCase().replace(/\s+/g, '')}-${randomPart}`;
};

const ApiKey: React.FC = () => {
  const { mode } = useGlobalContext();
  const [apiKeys, setApiKeys] = useState([
    {
      name: 'gptgenius',
      key: 'sk-...jeig',
      tracking: 'Enabled',
      lastUsed: 'Mar 18, 2024',
      permissions: 'All',
    },
  ]);
  const [modalOpen, setModalOpen] = useState(false);
  const [newKeyName, setNewKeyName] = useState('');

  const handleAddKey = () => {
    if (newKeyName.trim()) {
      const newKey = generateRandomKey(newKeyName);
      setApiKeys([
        ...apiKeys,
        {
          name: newKeyName,
          key: newKey,
          tracking: 'Enabled',
          lastUsed: 'Never',
          permissions: 'All',
        },
      ]);
      setNewKeyName('');
      setModalOpen(false);
    }
  };

  const handleDelete = (index: number) => {
    setApiKeys(apiKeys.filter((_, i) => i !== index));
  };

  return (
    <Box
      sx={{
        backgroundColor: mode ? '#1e1e1e' : '#fafafa',
        color: mode ? '#ffffff' : '#000000',
        padding: { xs: 2, sm: 4 },
        fontFamily: FONTS.third,
        height: '100vh',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: 'transparent',
        },
        '&:hover::-webkit-scrollbar-thumb': {
          backgroundColor: mode ? '#444' : '#ccc',
          borderRadius: '4px',
        },
      }}
    >
      <Typography
        variant="body2"
        fontSize="0.75rem"
        color={mode ? '#aaa' : 'text.secondary'}
        mb={3}
        maxWidth={700}
      >
        Do not share your API key with others or expose it in the browser or other client-side code. To protect your account’s security, OpenAI may automatically disable any API key that has leaked publicly.
      </Typography>

      <Typography
        variant="body2"
        fontSize="0.75rem"
        color={mode ? '#aaa' : 'text.secondary'}
        mb={1.5}
      >
        Enable tracking to see usage per API key on the{' '}
        <Box component="span" sx={{ color: '#10b981', textDecoration: 'underline', cursor: 'pointer' }}>
          Usage page.
        </Box>
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr auto',
          alignItems: 'center',
          py: 1,
          borderBottom: '1px solid',
          borderColor: mode ? '#333' : '#ccc',
          mb: 1,
        }}
      >
        {['NAME', 'SECRET KEY', 'TRACKING', 'LAST USED', 'PERMISSIONS', ''].map((header) => (
          <Typography
            key={header}
            fontSize="0.75rem"
            fontWeight="bold"
            color="#888"
          >
            {header}
          </Typography>
        ))}
      </Box>

      {apiKeys.map((key, index) => (
        <Box
          key={index}
          sx={{
            display: 'grid',
            gridTemplateColumns: '1fr 2fr 1fr 1fr 1fr auto',
            alignItems: 'center',
            py: 1,
            borderBottom: index < apiKeys.length - 1 ? '1px solid' : 'none',
            borderColor: mode ? '#2d2d2d' : '#e0e0e0',
          }}
        >
          <Typography fontSize="0.75rem">{key.name}</Typography>
          <Typography fontSize="0.75rem">{key.key}</Typography>
          <Typography fontSize="0.75rem">{key.tracking}</Typography>
          <Typography fontSize="0.75rem">{key.lastUsed}</Typography>
          <Typography fontSize="0.75rem">{key.permissions}</Typography>
          <Box>
            <Tooltip title="Edit">
              <IconButton size="small">
                <Edit sx={{ fontSize: '1rem', color: '#aaa' }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="Delete">
              <IconButton size="small" onClick={() => handleDelete(index)}>
                <Delete sx={{ fontSize: '1rem', color: '#f87171' }} />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
      ))}

      <Button
        onClick={() => setModalOpen(true)}
        variant="contained"
        sx={{
          fontFamily: FONTS.third,
          fontSize: '0.75rem',
          textTransform: 'none',
          backgroundColor: '#4b5563',
          '&:hover': { backgroundColor: '#374151' },
          borderRadius: 2,
          paddingX: 2,
          paddingY: 1,
          mt: 2,
        }}
      >
        + Create new secret key
      </Button>

      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: mode ? '#1e1e1e' : '#ffffff',
            boxShadow: 24,
            borderRadius: 2,
            p: 4,
            fontFamily: FONTS.third,
          }}
        >
          <Typography fontWeight="bold" fontSize="0.9rem" mb={2}>
            New API Key
          </Typography>
          <TextField
            fullWidth
            label="Key Name"
            variant="outlined"
            size="small"
            value={newKeyName}
            onChange={(e) => setNewKeyName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button
            variant="contained"
            onClick={handleAddKey}
            fullWidth
            sx={{
              fontFamily: FONTS.third,
              textTransform: 'none',
              fontSize: '0.75rem',
              backgroundColor: '#4b5563',
              '&:hover': { backgroundColor: '#374151' },
            }}
          >
            Generate Key
          </Button>
        </Box>
      </Modal>
    </Box>
  );
};

export default ApiKey;
