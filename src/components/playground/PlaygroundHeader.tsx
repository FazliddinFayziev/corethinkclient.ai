import React from 'react';
import { styles } from './Styles';
import TuneIcon from '@mui/icons-material/Tune';
import { useGlobalContext } from '../../context/context';
import { Code, ContentCopy, ChatBubbleOutline } from '@mui/icons-material';
import { Box, Button, IconButton, Stack, Typography, useTheme, useMediaQuery } from '@mui/material';

interface PlaygroundProp {
  model: string;
  toggleModal: () => void;
  toggleSettings: () => void; 
}

const PlaygroundHeader: React.FC<PlaygroundProp> = ({ toggleModal, toggleSettings, model }) => {
  const { mode } = useGlobalContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); 

  return (
    <Box sx={styles(mode).playgroundheader}>
      <Stack direction="row" alignItems="center" spacing={1}>
        <ChatBubbleOutline sx={styles(mode).chatBubble} />
        <Typography sx={styles(mode).chatContext}>Chat</Typography>
      </Stack>

      <Stack direction="row" spacing={2} alignItems="center">
        <Box sx={styles(mode).modelContext}>
          {model}
          <ContentCopy sx={styles(mode).copyIcon} />
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Button startIcon={<Code />} sx={styles(mode).apiViewS} onClick={toggleModal}>
            API view
          </Button>
        </Box>

        {/* Mobile version of API button */}
        <IconButton sx={{ display: { xs: 'inline-flex', sm: 'none' } }} onClick={toggleModal}>
          <Code />
        </IconButton>
      </Stack>

      {/* Only show tune icon on mobile devices */}
      {isMobile && (
        <IconButton sx={styles(mode).menuIconS} onClick={toggleSettings}>
          <TuneIcon fontSize="small" />
        </IconButton>
      )}
    </Box>
  );
};

export default PlaygroundHeader;