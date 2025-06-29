import React from 'react';
import modelOne from './assets/model1.jpg';
import modelTwo from './assets/model2.jpg';
import modelThree from './assets/model3.jpg';
import { FONTS } from '../../styles/GlobalStyles';
import { useGlobalContext } from '../../context/context';
import { Box, Card, Typography, Button, useTheme, useMediaQuery } from '@mui/material';

interface Model {
    name: string;
    description: string;
    image: string;
};

const MODELS: Model[] = [
    {
        name: 'corethink-4.1',
        description: 'Flagship GPT model for complex tasks',
        image: modelOne,
    },
    {
        name: 'o4-mini',
        description: 'Faster, more affordable reasoning model',
        image: modelTwo,
    },
    {
        name: 'o3',
        description: 'Our most powerful reasoning model',
        image: modelThree,
    },
];

const Models: React.FC = () => {
    const { mode } = useGlobalContext();
    const isDarkMode = mode === true;
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const colors = {
        background: isDarkMode ? '#121212' : '#f5f5f5',
        text: isDarkMode ? '#e0e0e0' : '#333333',
        muted: isDarkMode ? '#AAAABB' : '#888888',
    };
    return (
        <Box sx={{ marginTop: 4, overflow: 'hidden' }}>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: 2,
                    width: '100%',
                }}
            >
                <Typography
                    sx={{
                        color: colors.text,
                        mb: 3,
                        fontFamily: FONTS.primary,
                        fontWeight: 500,
                        fontSize: '1.125rem',
                    }}
                >
                    Browse models
                </Typography>
                <Button
                    variant="text"
                    sx={{
                        fontSize: '0.8rem',
                        fontFamily: FONTS.third,
                        textTransform: 'none',
                        color: colors.text,
                        '&:hover': {
                            backgroundColor: 'transparent',
                        },
                    }}
                >
                    View all →
                </Button>
            </Box>

            <Box
                sx={{
                    display: 'flex',
                    gap: 2,
                    overflowX: { xs: 'auto', md: 'visible' },
                    flexWrap: { xs: 'nowrap', md: 'wrap' },
                    scrollbarWidth: 'none',
                    '&::-webkit-scrollbar': { display: 'none' },
                    pb: 2,
                }}
            >
                {MODELS.map((model) => (
                    <Card
                        key={model.name}
                        sx={{
                            flex: '0 0 auto',
                            width: { xs: '240px', md: '32%' },
                            minWidth: '240px',
                            backgroundColor: 'transparent',
                            boxShadow: 'none',
                            border: 'none',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 1,
                            cursor: 'pointer',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                width: '100%',
                                height: '180px',
                                borderRadius: '12px',
                                overflow: 'hidden',
                            }}
                        >
                            <img
                                src={model.image}
                                alt={model.name}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    borderRadius: '12px',
                                }}
                            />
                            <Box
                                sx={{
                                    position: 'absolute',
                                    inset: 0,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontFamily: FONTS.third,
                                    fontWeight: 600,
                                    fontSize: isSmallScreen ? '0.9rem' : '1rem',
                                    color: 'white',
                                    background: 'linear-gradient(to bottom, rgba(0,0,0,0.4), rgba(0,0,0,0.5))',
                                }}
                            >
                                {model.name}
                            </Box>
                        </Box>

                        <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: isSmallScreen ? '0.8rem' : '0.9rem',
                                fontFamily: FONTS.third,
                                color: colors.text,
                                marginTop: 0.5,
                            }}
                        >
                            {model.name}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                fontSize: isSmallScreen ? '0.7rem' : '0.8rem',
                                fontFamily: FONTS.third,
                                color: colors.muted,
                                lineHeight: 1.3,
                            }}
                        >
                            {model.description}
                        </Typography>
                    </Card>
                ))}
            </Box>
        </Box>
    )
};

export default Models;