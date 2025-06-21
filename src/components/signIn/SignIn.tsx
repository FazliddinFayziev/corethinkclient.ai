import React from 'react';
import { contexts } from './data';
import { styles } from './Styles';
import { Link } from 'react-router-dom';
import logo from "../assets/lightLogo.png";
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Button, Typography, Stack } from '@mui/material';

const SignIn: React.FC = () => {
  return (
    <>
      {/* Logo at the Top */}
      {/* <Box sx={styles.signinContainer}>
        <Typography to="/" variant="h6" sx={styles.logo} component={Link}>
          corethink.ai
        </Typography>
      </Box> */}

      <Box sx={styles.signinContainer}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={logo}
            alt="CoreThink logo"
            sx={{
              height: 80,
              width: 'auto',
              mr: 2,
              display: 'block',
              cursor: 'pointer',
            }}
          />
        </Link>
      </Box>

      {/* Main Section */}
      <Box sx={styles.mainSection}>
        {/* Left Content */}
        <Box sx={styles.leftContainer}>
          <Typography variant="h1" sx={styles.leftTypoOne}>
            corethink.
          </Typography>
          <Typography variant="h1" sx={styles.leftTypoTwo}>
            sign in
          </Typography>

          <Stack spacing={2}>
            {contexts.map((text, idx) => (
              <Typography key={idx} sx={styles.contexts}>
                {text}
                <Box component="span" sx={{ color: '#a78bfa' }}>
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
            sx={styles.button}
            onClick={() => {
              window.location.href = 'https://corethinkai-production.up.railway.app/auth/google/login';
            }}
          >
            Sign in with Google
          </Button>

          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            sx={styles.button}
            onClick={() => {
              window.location.href = 'https://corethinkai-production.up.railway.app/auth/github/login';
            }}
          >
            Sign in with GitHub
          </Button>

          <Typography variant="caption" sx={styles.caption}>
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
