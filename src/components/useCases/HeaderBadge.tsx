import React from 'react';
import { styles } from './Styles';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const HeaderBadge: React.FC<{ mode: boolean }> = ({ mode }) => {
    return (
        <Box
            component={motion.div}
            sx={styles(mode).headerBox}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            initial={{ opacity: 0, y: 10 }}
        >
            <Typography sx={styles(mode).headerContext}>
                Build With CoreThink
                <AutoAwesomeIcon sx={styles(mode).headerIcon} />
            </Typography>
        </Box>
    );
};

export default HeaderBadge;