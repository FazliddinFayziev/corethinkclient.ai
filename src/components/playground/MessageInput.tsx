import React from 'react';
import { styles } from './Styles';
import { Send as SendIcon } from '@mui/icons-material';
import { useGlobalContext } from '../../context/context';
import { Box, IconButton, TextField } from '@mui/material';

interface MessageInputProp {
    message: string;
    setMessage: (value: string) => void;
    onSend: () => void;
};

const MessageInput: React.FC<MessageInputProp> = ({ message, setMessage, onSend }) => {
    const { mode } = useGlobalContext();
    return (
        <Box sx={styles(mode).messageInputConS}>
            <TextField
                fullWidth
                multiline
                maxRows={6}
                value={message}
                sx={styles(mode).messageInputFS}
                placeholder="Start typing ..."
                InputProps={styles(mode).inputPropMS}
                onChange={(e) => setMessage(e.target.value)}
            />

            <IconButton sx={styles(mode).iconBMS} onClick={onSend}>
                <SendIcon />
            </IconButton>
        </Box>
    )
};

export default MessageInput;