import React from 'react';
import { styles } from './Styles';
import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const HeaderBadge: React.FC<{ mode: boolean }> = ({ mode }) => {
    return (
        <Box sx={styles(mode).headerS}>
            <Typography sx={styles(mode).headerContext}>
                Measured. Verified. Trusted
                <AutoAwesomeIcon sx={styles(mode).headerIcon} />
            </Typography>
        </Box>
    );
};

export default HeaderBadge;