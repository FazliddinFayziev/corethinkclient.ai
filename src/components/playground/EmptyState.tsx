import React from 'react';
import { styles } from './Styles';
import { Box, Typography } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

interface EmptyStateProps {
  mode: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ mode }) => {
  return (
    <Box sx={styles(mode).emptyCon}>
      <ChatBubbleOutlineIcon sx={styles(mode).emptyIcon} />
      <Box>
        <Typography sx={styles(mode).emptyTitle}>
          Your conversation will appear here
        </Typography>
        <Typography sx={styles(mode).emptySubtitle}>
          Start by typing a message below.
        </Typography>
      </Box>
    </Box>
  );
};

export default EmptyState;
