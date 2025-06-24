import React from 'react';
import { contexts } from './data';
import { styles } from './Styles';
import { Link } from 'react-router-dom';
import darkLogo from "../assets/dark_corethink.png";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import lightLogo from "../assets/light_corethink.png";
import { useGlobalContext } from '../../context/context';
import { Box, Button, Typography, Stack } from '@mui/material';

const SignIn: React.FC = () => {
  const { mode } = useGlobalContext();
  return (
    <>
      <Box sx={styles(mode).signinContainer}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={mode ? lightLogo : darkLogo}
            alt="CoreThink logo"
            sx={{
              height: { xs: 80, sm: 100, md: 120 },
              width: 'auto',
              display: 'block',
              cursor: 'pointer',
              mt: 1
            }}
          />
        </Link>
      </Box>

      {/* Main Section */}
      <Box sx={styles(mode).mainSection}>
        {/* Left Content */}
        <Box sx={styles(mode).leftContainer}>
          <Typography variant="h1" sx={styles(mode).leftTypoOne}>
            corethink.
          </Typography>
          <Typography variant="h1" sx={styles(mode).leftTypoTwo}>
            sign in
          </Typography>

          <Stack spacing={2}>
            {contexts.map((text, idx) => (
              <Typography key={idx} sx={styles(mode).contexts}>
                {text}
                <Box component="span" sx={{ color: mode ? '#a78bfa' : '#7b4fff' }}>
                  {idx === 0
                    ? 'all leading LLMs'
                    : idx === 1
                      ? 'data, domain, and users'
                      : 'scalable AI applications'}
                </Box>
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Right Content */}
        <Stack spacing={3} sx={{ width: '100%', maxWidth: 360 }}>
          <Button
            variant="outlined"
            startIcon={<GoogleIcon />}
            sx={styles(mode).button}
            onClick={() => {
              window.location.href = 'https://corethinkai-production.up.railway.app/auth/google/login';
            }}
          >
            Sign in with Google
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={styles(mode).button}
            onClick={() => {
              window.location.href = 'https://corethinkai-production.up.railway.app/auth/github/login';
            }}
          >
            Sign in with GitHub
          </Button>

          <Typography variant="caption" sx={styles(mode).caption}>
            By signing up, I agree to the CoreThink AI{' '}
            <Box component="span" sx={{ textDecoration: 'underline' }}>
              privacy policy
            </Box>{' '}
            and{' '}
            <Box component="span" sx={{ textDecoration: 'underline' }}>
              terms of service
            </Box>
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default SignIn;