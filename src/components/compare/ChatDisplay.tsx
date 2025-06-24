import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Message } from './type/type';
import { useGlobalContext } from '../../context/context';
import { Box, Typography, Paper, Stack } from '@mui/material';
import { styles } from './Styles';

interface ChatDisplayProps {
    messages: Message[];
    respondLoading: boolean;
}

const LoadingDots: React.FC = () => {
    return (
        <Stack direction="row" spacing={0.5} sx={{ mt: 1, pl: 1 }}>
            {[0, 1, 2].map((i) => (
                <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, repeatType: 'loop', duration: 1, delay: i * 0.3 }}
                    style={{
                        display: 'inline-block',
                        width: 8,
                        height: 8,
                        borderRadius: '50%',
                        backgroundColor: '#3f51b5',
                    }}
                />
            ))}
        </Stack>
    );
};

const ChatDisplay: React.FC<ChatDisplayProps> = ({ messages, respondLoading }) => {
    const { mode } = useGlobalContext();
    const bottomRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, respondLoading]);
    return (
        <Box sx={styles(mode).chatContainer}>
            {messages.length === 0 ? (
                <Box sx={styles(mode).chatEmpty}>
                    <Typography sx={styles(mode).chatEmptyContext}>
                        Start the conversation — your messages will appear here ✨
                    </Typography>
                </Box>
            ) : (
                messages.map((msg, index) => {
                    const isUser = msg.sender === 'user';

                    return (
                        <Stack
                            key={index}
                            direction="row"
                            justifyContent={isUser ? 'flex-end' : 'flex-start'}
                            sx={{ mb: 1 }}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.25 }}
                                style={{ maxWidth: 'min(75%, 90vw)' }}
                            >
                                <Paper
                                    elevation={4}
                                    sx={{
                                        p: 2,
                                        borderRadius: '20px',
                                        bgcolor: isUser ? '#3f51b5' : '#2a2f45',
                                        color: '#fff',
                                        borderTopRightRadius: isUser ? 0 : '20px',
                                        borderTopLeftRadius: isUser ? '20px' : 0,
                                        wordBreak: 'break-word',
                                        boxShadow: isUser
                                            ? '0 2px 12px rgba(63, 81, 181, 0.4)'
                                            : '0 2px 12px rgba(0,0,0,0.3)',
                                    }}
                                >
                                    <Typography sx={styles(mode).chatBubbleContext} variant="body1" fontSize="1rem">
                                        {msg.message}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Stack>
                    );
                })
            )}

            {/* Loading Indicator - outside the map */}
            {respondLoading && (
                <Stack direction="row" justifyContent="flex-start" sx={{ mb: 2, pl: 1 }}>
                    <Paper sx={styles(mode).loadingBubble}>
                        <Typography sx={styles(mode).loadingContext}>Typing</Typography>
                        <LoadingDots />
                    </Paper>
                </Stack>
            )}
            <div ref={bottomRef} />
        </Box>
    );
};

export default ChatDisplay;
