import React from 'react';
import { styles } from './Styles';
import { motion } from 'framer-motion';
import type { UseCaseCardProps } from './types/type';
import { Box, Typography, Card, CardContent } from '@mui/material';

const UseCaseCard: React.FC<UseCaseCardProps> = ({ item, icon, mode }) => {
    return (
        <Card
            component={motion.div}
            whileHover={{ y: -5 }}
            sx={styles(mode).cardS}
            transition={{ duration: 0.4 }}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 15 }}
        >
            <CardContent sx={styles(mode).cardContent}>
                <Box sx={styles(mode).cardIcon}>{icon}</Box>

                <Typography
                    variant="h5"
                    component="h3"
                    sx={styles(mode).cardTitle}
                >
                    {item.title}
                </Typography>

                <Typography variant="body1" sx={styles(mode).cardDesc}>
                    {item.desc}
                </Typography>

                <Box sx={styles(mode).imgBox}>
                    <img
                        loading="lazy"
                        alt={item.title}
                        src={item.image}
                    />
                </Box>
            </CardContent>
        </Card>
    );
};

export default UseCaseCard;