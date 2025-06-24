import React, { useEffect, useRef } from 'react';
import { styles } from './Styles';
import type { Message } from './type/type';
import { SUGGESTED_PROMPTS } from './data';
import { motion, useAnimation } from 'framer-motion';
import { Send as SendIcon } from '@mui/icons-material';
import { useGlobalContext } from '../../context/context';
import { Box, IconButton, TextField, Card, Typography } from '@mui/material';

interface MessageInputProp {
    message: string;
    messages: Message[];
    onSend: () => void;
    setMessage: (value: string) => void;
    onSendSuggestion: (suggestion: string) => void;
};

const MessageInput: React.FC<MessageInputProp> = ({ 
    message, 
    messages,
    setMessage, 
    onSend, 
    onSendSuggestion 
}) => {
    const { mode } = useGlobalContext();
    const containerRef = useRef<HTMLDivElement>(null);
    const controls = useAnimation();
    const currentStyles = styles(mode);

    useEffect(() => {
        const containerWidth = containerRef.current?.offsetWidth || 0;
        const cardWidth = 180;
        const gap = 12;
        const totalWidth = (SUGGESTED_PROMPTS.length * (cardWidth + gap)) + containerWidth;
        const duration = totalWidth / 50;

        controls.start({
            x: [0, -totalWidth + containerWidth],
            transition: {
                duration,
                repeat: Infinity,
                repeatType: "loop",
                ease: "linear"
            }
        });
    }, [controls]);

    const handleSuggestionClick = (text: string) => {
        setMessage(text);
        onSendSuggestion(text);
        document.getElementById('message-input')?.focus();
    };

    return (
        <Box sx={currentStyles.suggestionsCardsBox}>
            {/* Suggestions Marquee - Only shown when message is empty */}
            {messages.length === 0 && (
                <Box ref={containerRef} sx={currentStyles.suggestionsBox}>
                    <motion.div 
                        animate={controls}
                        style={{
                            display: 'flex',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            gap: '12px',
                            height: '100%',
                            alignItems: 'center'
                        }}
                    >
                        {[...SUGGESTED_PROMPTS, ...SUGGESTED_PROMPTS].map((prompt, index) => (
                            <Card 
                                key={`prompt-${index}`}
                                className="suggestion-card"
                                component={motion.div}
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => handleSuggestionClick(prompt)}
                                sx={currentStyles.suggestionCard}
                            >
                                <Typography 
                                    variant="body2" 
                                    sx={currentStyles.suggestionCardContext}
                                >
                                    {prompt}
                                </Typography>
                            </Card>
                        ))}
                    </motion.div>
                </Box>
            )}

            {/* Input Section */}
            <Box sx={currentStyles.messageInputConS}>
                <TextField
                    id="message-input"
                    fullWidth
                    multiline
                    maxRows={6}
                    value={message}
                    sx={currentStyles.messageInputFS}
                    placeholder="Start typing ..."
                    InputProps={currentStyles.inputPropMS}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && onSend()}
                    variant="outlined"
                />

                <IconButton 
                    sx={currentStyles.iconBMS} 
                    onClick={onSend}
                    disabled={!message.trim()}
                >
                    <SendIcon sx={currentStyles.sendIconS} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default MessageInput;