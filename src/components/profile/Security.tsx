import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useGlobalContext } from '../../context/context';
import { FONTS } from '../../styles/GlobalStyles';

const Security: React.FC = () => {
  const { mode } = useGlobalContext();

  return (
    <Box
      sx={{
        backgroundColor: mode ? '#1e1e1e' : '#f5f5f5',
        color: mode ? '#ffffff' : '#000000',
        height: '100vh',
        overflowY: 'auto',
        padding: 4,
        borderRadius: 2,

        // Custom scroll styling
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
      {/* MFA Section */}
      <Box mb={5}>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          mb={0.5}
          fontSize="0.9rem"
           fontFamily={FONTS.third}
        >
          Multi-factor authentication (MFA)
        </Typography>
        <Typography
          variant="body2"
          color={mode ? '#aaa' : 'text.secondary'}
          fontSize="0.75rem"
          mb={2}
          maxWidth={500}
           fontFamily={FONTS.third}
        >
          Require an extra security challenge when logging in. If you are
          unable to pass this challenge, you will have the option to recover
          your account via email.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2ea57f',
            '&:hover': {
              backgroundColor: '#289b75',
            },
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            borderRadius: 2,
            paddingX: 2,
            paddingY: 0.8,
             fontFamily: FONTS.third
          }}
        >
          Enable MFA
        </Button>
      </Box>

      {/* Logout Section */}
      <Box>
        <Typography
          variant="subtitle1"
          fontWeight={600}
          mb={0.5}
          fontSize="0.9rem"
           fontFamily={FONTS.third}
        >
          Log out of all devices
        </Typography>
        <Typography
          variant="body2"
          color={mode ? '#aaa' : 'text.secondary'}
          fontSize="0.75rem"
          mb={2}
          maxWidth={500}
           fontFamily={FONTS.third}
        >
          Log out of all active sessions across all devices, including your
          current session.
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: mode ? '#3a3a3a' : '#e0e0e0',
            color: mode ? '#ffffff' : '#000000',
            '&:hover': {
              backgroundColor: mode ? '#4a4a4a' : '#d5d5d5',
            },
            textTransform: 'none',
            fontWeight: 'bold',
            fontSize: '0.75rem',
            borderRadius: 2,
            paddingX: 2,
            paddingY: 0.8,
            fontFamily: FONTS.third
          }}
        >
          Log out all
        </Button>
      </Box>
    </Box>
  );
};

export default Security;
