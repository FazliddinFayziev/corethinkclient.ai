import React from 'react';
import { Send } from '@mui/icons-material';
import { getSendButtonColor, styles } from './Styles';
import { Box, IconButton, TextField } from '@mui/material';

interface InputAreaProps {
    mode: boolean;
    input: string;
    onSend: () => void;
    setInput: (value: string) => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
};

const InputArea: React.FC<InputAreaProps> = ({
    input,
    setInput,
    onSend,
    onKeyDown,
    mode
}) => {
    return (
        <Box sx={styles(mode).inputCon}>
            <Box sx={styles(mode).inputBox}>
                <TextField
                    multiline
                    fullWidth
                    maxRows={4}
                    value={input}
                    onKeyDown={onKeyDown}
                    sx={styles(mode).inputS}
                    placeholder="Message CoreThink..."
                    onChange={(e) => setInput(e.target.value)}
                />
                <IconButton
                    onClick={onSend}
                    disabled={input.trim() === ''}
                    sx={{
                        ml: 1,
                        color: getSendButtonColor(mode, input.trim() === ''),
                    }}
                >
                    <Send sx={{ color: "#888888" }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default InputArea;