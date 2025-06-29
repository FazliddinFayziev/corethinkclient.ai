import React from 'react';
import StartCard from './StartCard';
import Models from './Models';
import { Box, Typography } from '@mui/material';
import { FONTS } from '../../styles/GlobalStyles';
import { useGlobalContext } from '../../context/context';

import TextFieldsIcon from '@mui/icons-material/TextFields';
import ImageIcon from '@mui/icons-material/Image';
import AndroidIcon from '@mui/icons-material/Android';
import DataObjectIcon from '@mui/icons-material/DataObject';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import TuneIcon from '@mui/icons-material/Tune';

const buildOptions = [
    {
        title: 'Read and generate text',
        description: 'Use the API to prompt a model and generate text',
        icon: <TextFieldsIcon />,
    },
    {
        title: 'Generate images as output',
        description: 'Create images with GPT Image 1',
        icon: <ImageIcon />,
    },
    {
        title: 'Build agentic applications',
        description: 'Use the API to build agents that use tools and computers',
        icon: <AndroidIcon />,
    },
    {
        title: 'Get structured data from models',
        description: 'Use Structured Outputs to get model responses that adhere to a JSON schema',
        icon: <DataObjectIcon />,
    },
    {
        title: "Use a model's vision capabilities",
        description: 'Allow models to see and analyze images in your application',
        icon: <VisibilityIcon />,
    },
    {
        title: 'Build apps with audio',
        description: 'Analyze, transcribe, and generate audio with API endpoints',
        icon: <HeadphonesIcon />,
    },
    {
        title: 'Achieve complex tasks with reasoning',
        description: 'Use reasoning models to carry out complex tasks',
        icon: <AutoAwesomeIcon />,
    },
    {
        title: 'Tailor to your use case',
        description:
            'Adjust our models to perform specifically for your use case with fine-tuning, evals, and distillation',
        icon: <TuneIcon />,
    },
];

const Overview: React.FC = () => {
    const { mode } = useGlobalContext();
    const isDarkMode = mode === true;

    const colors = {
        background: isDarkMode ? '#121212' : '#f5f5f5',
        text: isDarkMode ? '#e0e0e0' : '#333333',
        muted: isDarkMode ? '#888888' : '#666666',
        lightMuted: isDarkMode ? '#555555' : '#aaaaaa',
        border: isDarkMode ? '#333333' : '#e0e0e0',
        iconBg: isDarkMode ? '#2a2a2a' : '#eeeeee',
        accent: isDarkMode ? '#939BF9' : '#4E3C91',
    };

    return (
        <Box
            sx={{
                backgroundColor: colors.background,
                color: colors.text,
                padding: { xs: '1.5rem', md: '2rem' },
                fontFamily: FONTS.third,
                width: '100%',
                minHeight: '100dvh',
                boxSizing: 'border-box',
                overflowX: 'hidden',
                '&::-webkit-scrollbar': {
                    height: '6px',
                    width: '6px',
                },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: colors.accent,
                    borderRadius: '3px',
                },
                '&::-webkit-scrollbar-track': {
                    backgroundColor: colors.background,
                },
            }}
        >
            <StartCard />
            <Models />

            {/* Start Building Section */}
            <Box
                sx={{
                    mt: 8,
                    width: '100%',
                    maxWidth: '1100px',
                    mx: 'auto',
                }}
            >
                <Typography
                    component="h2"
                    sx={{
                        color: colors.text,
                        mb: 3,
                        fontFamily: FONTS.primary,
                        fontWeight: 500,
                        fontSize: '1.125rem',
                    }}
                >
                    Start building
                </Typography>

                {/* 2-column Responsive Layout */}
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        gap: '24px',
                        mb: 14,
                    }}
                >
                    {buildOptions.map((option, index) => (
                        <Box
                            key={index}
                            sx={{
                                width: {
                                    xs: '100%',
                                    sm: '100%',
                                    md: 'calc(50% - 12px)',
                                },
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 2,
                            }}
                        >
                            {/* Icon Container */}
                            <Box
                                sx={{
                                    backgroundColor: colors.iconBg,
                                    borderRadius: '8px',
                                    padding: '10px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    minWidth: '40px',
                                    minHeight: '40px',
                                }}
                            >
                                {React.cloneElement(option.icon, { sx: { color: colors.accent, fontSize: 20 } })}
                            </Box>

                            {/* Text */}
                            <Box sx={{
                                display: 'flex',
                                flexDirection: "column",
                                justifyContent: "center",
                            }}>
                                <Typography
                                    component="h3"
                                    sx={{
                                        fontWeight: 500,
                                        fontSize: '0.8rem',
                                        fontFamily: FONTS.third,
                                        color: colors.text,
                                        mb: 0.5,
                                        lineHeight: 1.4,
                                    }}
                                >
                                    {option.title}
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: '0.75rem',
                                        fontFamily: FONTS.third,
                                        color: colors.muted,
                                        lineHeight: 1.5,
                                    }}
                                >
                                    {option.description}
                                </Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Overview;
