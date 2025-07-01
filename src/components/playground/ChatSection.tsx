import React, { useState } from 'react';
import { Box } from '@mui/material';
import { p_styles } from './Styles';
import type { Message } from './type';
import EmptyState from './EmptyState';
import MessageList from './MessageList';
import TopBox from './TopBox';

interface ChatSectionProp {
    modelID?: "A" | "B";
    mode: boolean;
    model: string;
    compare: boolean;
    messages: Message[];
    messagesEndRef: any;
    handleEditMessage: any;
};

const ChatSection: React.FC<ChatSectionProp> = ({
    mode,
    model,
    modelID,
    messages,
    compare,
    messagesEndRef,
    handleEditMessage,
}) => {
    const [systemMessageA, setSystemMessageA] = useState('');

    return (
        <Box sx={p_styles(mode).chatSectionS}>
            {compare && (
                <TopBox
                    mode={mode}
                    id={modelID || "A"}
                    model={model}
                    systemMessage={systemMessageA}
                    setSystemMessage={setSystemMessageA}
                />
            )}
            {messages.length === 0 ? (
                <EmptyState mode={mode} />
            ) : (
                <MessageList
                    messages={messages}
                    mode={mode}
                    model={model}
                    onEditMessage={handleEditMessage}
                    messagesEndRef={messagesEndRef}
                />
            )}
        </Box>
    );
};

export default ChatSection;