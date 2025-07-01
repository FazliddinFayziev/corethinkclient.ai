import React from 'react';
import { styles } from './Styles';
import { Box, Typography } from '@mui/material';
import { FONTS } from '../../styles/GlobalStyles';

interface EmptyStateProps {
    mode: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ mode }) => {
    return (
        <Box sx={styles(mode).emptyCon}>
            <Typography variant="h6" sx={{ fontFamily: FONTS.third }}>
                Your conversation will appear here
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONTS.third }}>
                Start by typing a message below.
            </Typography>
        </Box>
    );
};

export default EmptyState;