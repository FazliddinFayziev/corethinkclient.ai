import React, { useState } from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';
import { FONTS } from '../../styles/GlobalStyles';
import { useGlobalContext } from '../../context/context';

const User: React.FC = () => {
  const { mode } = useGlobalContext();
  const [name, setName] = useState('fazliddin fayziev');
  const [email] = useState('fazrez4515@gmail.com');
  const [phone, setPhone] = useState('+601113152704');

  const labelColor = mode ? '#a0a0a0' : '#555';
  const inputTextColor = mode ? '#e0e0e0' : '#333';
  const bgColor = mode ? '#2a2a2a' : '#e8e8e8';
  const borderColor = mode ? '#444' : '#bbb';
  const accentColor = '#5a5a5a';

  return (
    <Box
      sx={{
        height: '100%',
        maxHeight: 'calc(100vh - 250px)',
        overflowY: 'auto',
        pb: 10,
        '&::-webkit-scrollbar': {
          width: '6px',
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: mode ? 'rgba(200,200,200,0.2)' : 'rgba(100,100,100,0.2)',
          borderRadius: '3px',
        },
        scrollbarWidth: 'thin',
        scrollbarColor: mode ? 'rgba(200,200,200,0.2) transparent' : 'rgba(100,100,100,0.2) transparent',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          maxWidth: 520,
          mt: 2,
          pb: 5,
          mx: 'auto',
        }}
      >
        {/** Name Field */}
        <Box>
          <Typography
            fontSize="0.9rem"
            fontWeight={600}
            fontFamily={FONTS.third}
            color={labelColor}
            mb={0.6}
          >
            Name
          </Typography>
          <Typography fontSize="0.75rem" fontFamily={FONTS.third} color={labelColor} mb={1.2}>
            The name associated with this account
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputProps={{
              sx: {
                fontFamily: FONTS.third,
                fontSize: '0.9rem',
                color: inputTextColor,
                backgroundColor: bgColor,
                borderRadius: '10px',
                '& fieldset': { borderColor },
                '&:hover fieldset': { borderColor: accentColor },
                '&.Mui-focused fieldset': { 
                  borderColor: accentColor, 
                  borderWidth: '2px' 
                },
              },
            }}
          />
        </Box>

        {/** Email Field */}
        <Box>
          <Typography
            fontSize="0.9rem"
            fontWeight={600}
            fontFamily={FONTS.third}
            color={labelColor}
            mb={0.6}
          >
            Email address
          </Typography>
          <Typography fontSize="0.75rem" fontFamily={FONTS.third} color={labelColor} mb={1.2}>
            The email address associated with this account
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={email}
            disabled
            InputProps={{
              sx: {
                fontFamily: FONTS.third,
                fontSize: '0.9rem',
                color: inputTextColor,
                backgroundColor: bgColor,
                borderRadius: '10px',
                '& fieldset': { borderColor },
              },
            }}
          />
        </Box>

        {/** Phone Field */}
        <Box>
          <Typography
            fontSize="0.9rem"
            fontWeight={600}
            fontFamily={FONTS.third}
            color={labelColor}
            mb={0.6}
          >
            Phone number
          </Typography>
          <Typography fontSize="0.75rem" fontFamily={FONTS.third} color={labelColor} mb={1.2}>
            The phone number associated with this account
          </Typography>
          <TextField
            fullWidth
            variant="outlined"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            InputProps={{
              sx: {
                fontFamily: FONTS.third,
                fontSize: '0.9rem',
                color: inputTextColor,
                backgroundColor: bgColor,
                borderRadius: '10px',
                '& fieldset': { borderColor },
                '&:hover fieldset': { borderColor: accentColor },
                '&.Mui-focused fieldset': { 
                  borderColor: accentColor, 
                  borderWidth: '2px' 
                },
              },
            }}
          />
        </Box>

        {/** Save Button */}
        <Box sx={{ display: 'flex', justifyContent: 'flex-start', pt: 1 }}>
          <Button
            variant="contained"
            sx={{
              width: 110,
              borderRadius: '12px',
              fontFamily: FONTS.third,
              textTransform: 'none',
              fontWeight: 600,
              fontSize: '1rem',
              backgroundColor: '#00b87c',
              transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                backgroundColor: '#009e67',
                boxShadow: '0 6px 14px rgba(0,158,103,0.5)',
              },
            }}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default User;