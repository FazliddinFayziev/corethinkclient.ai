import React from 'react';
import type { Message } from './type';
import { Edit } from '@mui/icons-material';
import { messageListStyle, styles } from './Styles';
import { Box, Typography, IconButton } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface MessageListProps {
    messages: Message[];
    mode: boolean;
    model: string;
    onEditMessage: (id: string) => void;
    messagesEndRef: React.RefObject<HTMLDivElement>;
}

const MessageList: React.FC<MessageListProps> = ({
    messages,
    mode,
    model,
    onEditMessage,
    messagesEndRef
}) => {
    return (
        <Box sx={styles(mode).messageCon}>
            {messages.map((message) => (
                <Box key={message.id} sx={messageListStyle(message, mode)}>
                    <Box sx={styles(mode).messagetypoBox}>
                        <Typography variant="subtitle2" sx={messageListStyle(message, mode)}>
                            {message.role === 'user' ? 'You' : model}
                        </Typography>
                        {message.role === 'user' && (
                            <IconButton
                                size="small"
                                sx={styles(mode).editIconB}
                                onClick={() => onEditMessage(message.id)}
                            >
                                <Edit fontSize="small" />
                            </IconButton>
                        )}
                    </Box>
                    <SyntaxHighlighter
                        wrapLines={true}
                        language="markdown"
                        style={mode ? atomDark : prism}
                        customStyle={styles(mode).messageMarkdownS}
                    >
                        {message.content}
                    </SyntaxHighlighter>
                </Box>
            ))}
            <div ref={messagesEndRef} />
        </Box>
    );
};

export default MessageList;