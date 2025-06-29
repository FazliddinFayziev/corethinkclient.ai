import React, { useState, useRef, useEffect } from 'react';
import {
    Box,
    Typography,
    IconButton,
    TextField,
    Select,
    MenuItem,
    Slider,
    Tooltip,
    Button,
    Menu,
    Modal
} from '@mui/material';
import {
    Send,
    Edit,
    Add as AddIcon,
    MoreVert,
    CompareArrows,
    Tune as TuneIcon
} from '@mui/icons-material';
import { FONTS } from '../../styles/GlobalStyles';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { useGlobalContext } from '../../context/context';

interface Message {
    role: string;
    content: string;
    id: string;
    isEditing?: boolean;
}

const MODELS = [
    'deepseek-ai/DeepSeek-R1',
    'openchat/openchat-3.5',
    'gpt-4o'
];

const SAFETY_MODELS = ['None', 'OpenAI', 'Anthropic'];

// Helper functions for consistent styling
const getMessageBackgroundColor = (role: string, mode: boolean): string => {
    return role === 'user'
        ? (mode ? '#1e1e1e' : '#f0f0f0')
        : (mode ? '#1e1e1e' : '#f8f8f8');
};

const getMessageBorderColor = (mode: boolean): string => {
    return mode ? '#333' : '#e0e0e0';
};

const getTextColor = (mode: boolean): string => {
    return mode ? '#e0e0e0' : '#333333';
};

const getIconColor = (mode: boolean): string => {
    return mode ? '#AAAABB' : '#888888';
};

const getSendButtonColor = (mode: boolean, disabled: boolean): string => {
    if (disabled) return mode ? '#666' : '#999';
    return mode ? '#939BF9' : '#4E3C91';
};

const Playground: React.FC = () => {
    const { mode } = useGlobalContext();
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const [model, setModel] = useState(MODELS[0]);
    const [safety, setSafety] = useState(SAFETY_MODELS[0]);
    const [temperature, setTemperature] = useState(0.7);
    const [outputLength, setOutputLength] = useState(50);
    const [systemMessage, setSystemMessage] = useState('');
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const [_editMessageId, setEditMessageId] = useState<string | null>(null);
    const messagesEndRef = useRef<any>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const handleSend = () => {
        if (input.trim() === '') return;

        const userMessage: Message = {
            role: 'user',
            content: input,
            id: Date.now().toString()
        };
        setMessages([...messages, userMessage]);
        setInput('');

        // Simulate AI response
        setTimeout(() => {
            const aiResponse: Message = {
                role: 'assistant',
                content: generateAIResponse(),
                id: (Date.now() + 1).toString()
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);
    };

    const generateAIResponse = (): string => {
        return `Here's a response from ${model} with temperature ${temperature}:\n\n` +
            `Safety setting: ${safety}\n\n` +
            `Here's some example code:\n\n` +
            '```python\n' +
            'def calculate_fibonacci(n):\n' +
            '    if n <= 1:\n' +
            '        return n\n' +
            '    return calculate_fibonacci(n-1) + calculate_fibonacci(n-2)\n' +
            '```\n\n' +
            'And some formatted text:\n\n' +
            '*This is italic* and **this is bold**\n\n' +
            `Current output length: ${outputLength}`;
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleEditMessage = (id: string) => {
        setEditMessageId(id);
        const message = messages.find(m => m.id === id);
        if (message) {
            setInput(message.content);
        }
        setMessages(messages.filter(m => m.id !== id));
    };

    const toggleSettings = () => setSettingsOpen(!settingsOpen);

    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: mode ? '#121212' : '#f5f5f5',
            color: getTextColor(mode),
            fontFamily: FONTS.third,
        }}>
            {/* Left Panel - Configuration */}
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                width: '300px',
                minWidth: '300px',
                borderRight: `1px solid ${getMessageBorderColor(mode)}`,
            }}>
                {/* Model Configuration */}
                <Box sx={{
                    backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                    borderBottom: `1px solid ${getMessageBorderColor(mode)}`,
                    px: 2,
                    py: 1.5,
                }}>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1,
                    }}>
                        <Typography variant="subtitle2" sx={{
                            fontFamily: FONTS.third,
                            color: getIconColor(mode),
                            fontWeight: 500,
                        }}>
                            Model
                        </Typography>
                        <IconButton
                            size="small"
                            onClick={toggleSettings}
                            sx={{ color: getIconColor(mode) }}
                        >
                            <TuneIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    <Box sx={{
                        fontFamily: FONTS.third,
                        fontSize: '0.875rem',
                        backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                        borderRadius: '6px',
                        px: 1,
                        py: 0.5,
                        color: getTextColor(mode),
                        mb: 1,
                    }}>
                        {model}
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        fontSize: '0.75rem',
                        color: mode ? '#ccc' : '#555',
                        gap: 1.5
                    }}>
                        <Typography variant="body2" sx={{ fontSize: '0.65rem', color: getIconColor(mode), fontFamily: FONTS.third }}>
                            temp: <span style={{ color: '#00c080' }}>{temperature.toFixed(2)}</span>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.65rem', color: getIconColor(mode), fontFamily: FONTS.third }}>
                            length: <span style={{ color: '#00c080' }}>{outputLength}</span>
                        </Typography>
                        <Typography variant="body2" sx={{ fontSize: '0.65rem', color: getIconColor(mode), fontFamily: FONTS.third }}>
                            safety: <span style={{ color: '#00c080' }}>{safety}</span>
                        </Typography>
                    </Box>
                </Box>

                {/* Variables Section */}
                <Box sx={{
                    p: 2,
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                    borderBottom: `1px solid ${getMessageBorderColor(mode)}`,
                }}>
                    <Typography variant="subtitle2" sx={{
                        fontFamily: FONTS.third,
                        color: getIconColor(mode),
                        fontWeight: 500,
                    }}>
                        Variables
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Typography sx={{
                            fontFamily: FONTS.third,
                            fontSize: '0.8rem',
                            color: getIconColor(mode),
                            cursor: "pointer",
                        }}>
                            Create
                        </Typography>
                        <AddIcon sx={{
                            fontSize: '1rem',
                            color: getIconColor(mode),
                            cursor: 'pointer'
                        }} />
                    </Box>
                </Box>

                {/* System Message */}
                <Box sx={{
                    p: 2,
                    backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                    flex: 1,
                }}>
                    <Typography variant="subtitle2" sx={{
                        fontFamily: FONTS.third,
                        color: getIconColor(mode),
                        fontWeight: 500,
                        mb: 1,
                    }}>
                        System Message
                    </Typography>
                    <TextField
                        multiline
                        rows={4}
                        fullWidth
                        placeholder='Describe desired model behavior'
                        value={systemMessage}
                        onChange={(e) => setSystemMessage(e.target.value)}
                        size="small"
                        sx={{
                            '& .MuiInputBase-root': {
                                backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                                color: getTextColor(mode),
                                fontFamily: FONTS.third,
                                fontSize: '0.8rem',
                            }
                        }}
                    />
                </Box>
            </Box>

            {/* Right Panel - Chat */}
            <Box sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                overflow: 'hidden'
            }}>
                {/* Top Navigation */}
                <Box sx={{
                    p: 2,
                    borderBottom: `1px solid ${getMessageBorderColor(mode)}`,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button
                            startIcon={<AddIcon sx={{ color: getIconColor(mode) }} />}
                            sx={{
                                textTransform: 'none',
                                color: getTextColor(mode),
                                fontFamily: FONTS.third,
                            }}
                        >
                            New prompt
                        </Button>
                        <Typography variant="body2" sx={{
                            color: getIconColor(mode),
                            fontFamily: FONTS.third,
                        }}>
                            Draft
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Tooltip title="Compare">
                            <IconButton sx={{ color: getIconColor(mode) }}>
                                <CompareArrows fontSize="small" />
                            </IconButton>
                        </Tooltip>
                        <Button
                            variant="contained"
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#4E3C91',
                                fontFamily: FONTS.third,
                                '&:hover': {
                                    backgroundColor: '#5a4a99',
                                },
                            }}
                        >
                            Save
                        </Button>
                        <IconButton onClick={handleMenuOpen} sx={{ color: getIconColor(mode) }}>
                            <MoreVert />
                        </IconButton>
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleMenuClose}
                            PaperProps={{
                                sx: {
                                    backgroundColor: mode ? '#2d2d2d' : '#ffffff',
                                }
                            }}
                        >
                            <MenuItem onClick={handleMenuClose} sx={{
                                color: getTextColor(mode),
                                fontFamily: FONTS.third,
                            }}>
                                Optimize
                            </MenuItem>
                            <MenuItem onClick={handleMenuClose} sx={{
                                color: getTextColor(mode),
                                fontFamily: FONTS.third,
                            }}>
                                Evaluate
                            </MenuItem>
                        </Menu>
                    </Box>
                </Box>

                {/* Chat Area */}
                <Box sx={{
                    flex: 1,
                    overflowY: 'auto',
                    p: 2,
                    backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                    '&::-webkit-scrollbar': {
                        width: '6px',
                    },
                    '&::-webkit-scrollbar-track': {
                        background: 'transparent',
                    },
                    '&::-webkit-scrollbar-thumb': {
                        backgroundColor: mode ? '#444' : '#ddd',
                        borderRadius: '3px',
                        '&:hover': {
                            backgroundColor: mode ? '#555' : '#ccc',
                        }
                    },
                }}>
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

                {/* Input Area */}
                <InputArea
                    input={input}
                    setInput={setInput}
                    onSend={handleSend}
                    onKeyDown={handleKeyDown}
                    mode={mode}
                />
            </Box>

            {/* Settings Modal */}
            <Modal open={settingsOpen} onClose={toggleSettings} sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Box sx={{
                    backgroundColor: mode ? '#1e1e1e' : '#ffffff',
                    border: `1px solid ${getMessageBorderColor(mode)}`,
                    borderRadius: '8px',
                    width: '400px',
                    p: 3,
                    outline: 'none'
                }}>
                    <SettingsPanel
                        model={model}
                        safety={safety}
                        temperature={temperature}
                        outputLength={outputLength}
                        setModel={setModel}
                        setSafety={setSafety}
                        setTemperature={setTemperature}
                        setOutputLength={setOutputLength}
                        mode={mode}
                    />
                </Box>
            </Modal>
        </Box>
    );
};

interface SettingsPanelProps {
    model: string;
    safety: string;
    temperature: number;
    outputLength: number;
    setModel: (value: string) => void;
    setSafety: (value: string) => void;
    setTemperature: (value: number) => void;
    setOutputLength: (value: number) => void;
    mode: boolean;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
    model,
    safety,
    setModel,
    setSafety,
    temperature,
    outputLength,
    setTemperature,
    setOutputLength,
    mode
}) => {
    const getTextColor = (mode: boolean): string => mode ? '#e0e0e0' : '#333333';
    const getIconColor = (mode: boolean): string => mode ? '#AAAABB' : '#888888';

    return (
        <Box>
            <Typography sx={{
                fontFamily: FONTS.third,
                color: getTextColor(mode),
                fontWeight: 500,
                mb: 2,
                fontSize: '1.2rem'
            }}>
                Model Settings
            </Typography>

            <Typography sx={{
                fontFamily: FONTS.third,
                color: getTextColor(mode),
                mb: 1,
            }}>
                Model
            </Typography>
            <TextField
                select
                fullWidth
                size="small"
                value={model}
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        color: getTextColor(mode),
                        fontFamily: FONTS.third,
                    }
                }}
                onChange={(e) => setModel(e.target.value)}
                variant="outlined"
            >
                {MODELS.map((modelOption) => (
                    <MenuItem
                        key={modelOption}
                        value={modelOption}
                        sx={{ fontFamily: FONTS.third }}
                    >
                        {modelOption}
                    </MenuItem>
                ))}
            </TextField>

            <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography sx={{
                        fontFamily: FONTS.third,
                        color: getTextColor(mode),
                        mr: 1
                    }}>
                        Output Length
                    </Typography>
                    <InfoOutlinedIcon fontSize="small" sx={{ color: getIconColor(mode) }} />
                </Box>
                <Slider
                    min={1}
                    max={100}
                    value={outputLength}
                    sx={{ color: '#4E3C91' }}
                    onChange={(_, val) => setOutputLength(val as number)}
                />
                <Typography sx={{
                    fontFamily: FONTS.third,
                    color: getIconColor(mode),
                    textAlign: 'right',
                    fontSize: '0.8rem'
                }}>
                    {outputLength}
                </Typography>
            </Box>

            <Box sx={{ mb: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <Typography sx={{
                        fontFamily: FONTS.third,
                        color: getTextColor(mode),
                        mr: 1
                    }}>
                        Temperature
                    </Typography>
                    <InfoOutlinedIcon fontSize="small" sx={{ color: getIconColor(mode) }} />
                </Box>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={temperature}
                    sx={{ color: '#4E3C91' }}
                    onChange={(_, val) => setTemperature(val as number)}
                />
                <Typography sx={{
                    fontFamily: FONTS.third,
                    color: getIconColor(mode),
                    textAlign: 'right',
                    fontSize: '0.8rem'
                }}>
                    {temperature.toFixed(2)}
                </Typography>
            </Box>

            <Typography sx={{
                fontFamily: FONTS.third,
                color: getTextColor(mode),
                mb: 1,
            }}>
                Safety Model
            </Typography>
            <Select
                value={safety}
                fullWidth
                size="small"
                sx={{
                    mb: 2,
                    '& .MuiOutlinedInput-root': {
                        color: getTextColor(mode),
                        fontFamily: FONTS.third,
                    }
                }}
                onChange={(e) => setSafety(e.target.value)}
                variant="outlined"
            >
                {SAFETY_MODELS.map((safetyOption) => (
                    <MenuItem
                        key={safetyOption}
                        value={safetyOption}
                        sx={{ fontFamily: FONTS.third }}
                    >
                        {safetyOption}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

interface EmptyStateProps {
    mode: boolean;
}

const EmptyState: React.FC<EmptyStateProps> = ({ mode }) => {
    return (
        <Box sx={{
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: mode ? '#666666' : '#999999',
            textAlign: 'center',
            flexDirection: 'column',
            gap: '16px'
        }}>
            <Typography variant="h6" sx={{ fontFamily: FONTS.third }}>
                Your conversation will appear here
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: FONTS.third }}>
                Start by typing a message below.
            </Typography>
        </Box>
    );
};

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
    const getMessageColor = (role: string): string => {
        return role === 'user'
            ? (mode ? '#4E3C91' : '#4E3C91')
            : (mode ? '#939BF9' : '#4E3C91');
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            {messages.map((message) => (
                <Box
                    key={message.id}
                    sx={{
                        p: 2,
                        borderRadius: '8px',
                        backgroundColor: getMessageBackgroundColor(message.role, mode),
                        border: `1px solid ${getMessageBorderColor(mode)}`,
                        maxWidth: '800px',
                        marginLeft: message.role === 'user' ? 'auto' : '0',
                        marginRight: message.role === 'user' ? '0' : 'auto',
                        position: 'relative'
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        mb: 1
                    }}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                fontWeight: 600,
                                fontFamily: FONTS.third,
                                color: getMessageColor(message.role)
                            }}
                        >
                            {message.role === 'user' ? 'You' : model}
                        </Typography>
                        {message.role === 'user' && (
                            <IconButton
                                size="small"
                                onClick={() => onEditMessage(message.id)}
                                sx={{ color: getIconColor(mode) }}
                            >
                                <Edit fontSize="small" />
                            </IconButton>
                        )}
                    </Box>
                    <SyntaxHighlighter
                        language="markdown"
                        style={mode ? atomDark : prism}
                        wrapLines={true}
                        customStyle={{
                            background: 'none',
                            padding: 0,
                            margin: 0,
                            fontSize: '0.9rem',
                            fontFamily: FONTS.third,
                            color: getTextColor(mode)
                        }}
                    >
                        {message.content}
                    </SyntaxHighlighter>
                </Box>
            ))}
            <div ref={messagesEndRef} />
        </Box>
    );
};

interface InputAreaProps {
    input: string;
    setInput: (value: string) => void;
    onSend: () => void;
    onKeyDown: (e: React.KeyboardEvent) => void;
    mode: boolean;
}

const InputArea: React.FC<InputAreaProps> = ({
    input,
    setInput,
    onSend,
    onKeyDown,
    mode
}) => {
    return (
        <Box sx={{
            p: 2,
            borderTop: `1px solid ${getMessageBorderColor(mode)}`,
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
        }}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: '8px',
                backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                border: `1px solid ${getMessageBorderColor(mode)}`,
                p: '4px 12px'
            }}>
                <TextField
                    multiline
                    maxRows={4}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder="Message CoreThink..."
                    fullWidth
                    sx={{
                        '& .MuiOutlinedInput-root': {
                            border: 'none',
                            '& fieldset': { border: 'none' },
                            '&:hover fieldset': { border: 'none' },
                            '&.Mui-focused fieldset': { border: 'none' },
                            fontFamily: FONTS.third,
                            color: getTextColor(mode)
                        },
                    }}
                />
                <IconButton
                    onClick={onSend}
                    disabled={input.trim() === ''}
                    sx={{
                        color: getSendButtonColor(mode, input.trim() === ''),
                        ml: 1
                    }}
                >
                    <Send sx={{ color: "#888888" }} />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Playground;