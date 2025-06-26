import React from 'react';
import { styles } from './Styles';
import { Box } from '@mui/material';

const TopCircles: React.FC<{ mode: boolean }> = ({ mode }) => {
    return (
        (mode ? (
            <>
                <Box sx={styles(mode).topCircleOne} />
                <Box sx={styles(mode).topCircleTwo} />
            </>
        ) : (
            <>
                <Box sx={styles(mode).topCircleThree} />
                <Box sx={styles(mode).topCircleFour} />
            </>
        ))
    );
};

export default TopCircles;