import React, { useState, useRef, type ChangeEvent } from 'react';
import {
  Box,
  Typography,
  IconButton,
  TextField,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Fade,
  useTheme,
  useMediaQuery,
  Chip,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  Tooltip,
  Badge,
} from '@mui/material';
import {
  Add as AddIcon,
  AttachFile as AttachFileIcon,
  Image as ImageIcon,
  Slideshow as SlideshowIcon,
  VideoLibrary as VideoIcon,
  AudioFile as AudioIcon,
  Web as WebIcon,
  Book as BookIcon,
  ExpandLess as ExpandLessIcon,
  Settings as SettingsIcon,
  Logout as LogoutIcon,
  AccountCircle as AccountCircleIcon,
  Send,
  Chat as ChatIcon,
  ViewSidebar as ViewSidebarIcon,
} from '@mui/icons-material';
import { FONTS } from '../../styles/GlobalStyles';
import { useGlobalContext } from '../../context/context';
import type { Attachment } from './types';
import { RenderAttachmentsGrid, RenderMessageAttachments } from './RenderAttachment';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
  attachments?: Attachment[];
}

interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  lastMessage: Date;
}

const Main: React.FC = () => {
  const { mode } = useGlobalContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [profileMenuAnchor, setProfileMenuAnchor] = useState<null | HTMLElement>(null);
  const [conversations, _setConversations] = useState<Conversation[]>([]);
  const [currentConversation, setCurrentConversation] = useState<Conversation | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [fileMenuAnchor, setFileMenuAnchor] = useState<null | HTMLElement>(null);

  const colors = {
    background: mode ? '#0a0a0a' : '#ffffff',
    surface: mode ? '#1a1a1a' : '#f8f9fa',
    surfaceHover: mode ? '#2a2a2a' : '#e9ecef',
    text: mode ? '#ffffff' : '#212529',
    textSecondary: mode ? '#9ca3af' : '#6c757d',
    border: mode ? '#2a2a2a' : '#dee2e6',
    inputBg: mode ? '#2a2a2a' : '#f8f9fa',
    inputBorder: mode ? '#3a3a3a' : '#ced4da',
    primary: '#9c88ff',
    primaryHover: '#8873ff',
    chip: mode ? '#333333' : '#e9ecef',
    chipActive: mode ? '#4a4a4a' : '#9c88ff',
    chipText: mode ? '#ffffff' : '#495057',
    chipActiveText: mode ? '#ffffff' : '#ffffff',
    profileBg: mode ? '#2a2a2a' : '#f8f9fa',
  };

  // Define sidebar widths
  const sidebarWidth = {
    expanded: 280,
    collapsed: 72,
    mobile: 280,
  };

  // Get current sidebar width
  const getCurrentSidebarWidth = () => {
    if (isMobile) {
      return sidebarOpen ? sidebarWidth.mobile : 0;
    }
    return sidebarOpen ? sidebarWidth.expanded : sidebarWidth.collapsed;
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() && attachments.length === 0) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
      attachments: [...attachments]
    };

    setMessages(prev => [...prev, newMessage]);
    setInputValue('');
    setAttachments([]);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: attachments.length > 0
          ? "Thanks for sharing those files! How can I help you with them?"
          : "I'm here to help! How can I assist you today?",
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleNewConversation = () => {
    setCurrentConversation(null);
    setMessages([]);
    setAttachments([]);
    // Auto-expand sidebar when creating new conversation on desktop
    if (!isMobile && !sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setProfileMenuAnchor(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setProfileMenuAnchor(null);
  };

  const handleConversationClick = (conv: Conversation) => {
    setCurrentConversation(conv);
    // Auto-expand sidebar when selecting conversation on desktop
    if (!isMobile && !sidebarOpen) {
      setSidebarOpen(true);
    }
  };

  const handleFileClick = (event: React.MouseEvent<HTMLElement>) => {
    setFileMenuAnchor(event.currentTarget);
  };

  const handleFileMenuClose = () => {
    setFileMenuAnchor(null);
  };

  const handleFileUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    const newAttachments: Attachment[] = [];

    Array.from(files).forEach(file => {
      const fileType = getFileType(file.type);
      const fileSize = formatFileSize(file.size);

      newAttachments.push({
        id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
        name: file.name,
        type: fileType,
        url: URL.createObjectURL(file),
        size: fileSize
      });
    });

    setAttachments(prev => [...prev, ...newAttachments]);
    handleFileMenuClose();
  };

  const getFileType = (mimeType: string): Attachment['type'] => {
    if (mimeType.startsWith('image/')) return 'image';
    if (mimeType.startsWith('video/')) return 'video';
    if (mimeType.startsWith('audio/')) return 'audio';
    if (mimeType.startsWith('application/pdf') ||
      mimeType.startsWith('application/msword') ||
      mimeType.startsWith('application/vnd.ms-excel')) {
      return 'document';
    }
    return 'other';
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes < 1024) return bytes + ' bytes';
    else if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    else return (bytes / 1048576).toFixed(1) + ' MB';
  };

  const removeAttachment = (id: string) => {
    setAttachments(prev => prev.filter(attachment => attachment.id !== id));
  };

  // Expanded sidebar content
  const expandedSidebarContent = (
    <Box
      sx={{
        width: isMobile ? sidebarWidth.mobile : sidebarWidth.expanded,
        height: '100%',
        backgroundColor: colors.surface,
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}
    >
      {/* Header */}
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <IconButton
            onClick={() => setSidebarOpen(false)}
            sx={{ ml: 'auto' }}
          >
            <ViewSidebarIcon sx={{ color: colors.text }} />
          </IconButton>
        </Box>

        <Button
          fullWidth
          variant="outlined"
          startIcon={<AddIcon />}
          onClick={handleNewConversation}
          sx={{
            borderColor: colors.primary,
            color: colors.primary,
            fontFamily: FONTS.primary,
            textTransform: 'none',
            borderRadius: 2,
            backgroundColor: 'rgba(156, 136, 255, 0.1)',
            py: 1.5,
            mb: 2,
            '&:hover': {
              borderColor: colors.primaryHover,
              backgroundColor: 'rgba(156, 136, 255, 0.15)',
            },
          }}
        >
          New task
        </Button>

        {/* Chats Button */}
        <Button
          fullWidth
          startIcon={<ChatIcon />}
          sx={{
            color: colors.text,
            fontFamily: FONTS.primary,
            textTransform: 'none',
            borderRadius: 2,
            py: 1.5,
            backgroundColor: 'transparent',
            border: 'none',
            justifyContent: 'flex-start',
          }}
        >
          Chats
        </Button>
      </Box>

      {/* Filter Chips */}
      <Box sx={{ px: 3, mb: 2 }}>
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Chip
            label="All"
            size="small"
            sx={{
              backgroundColor: colors.primary,
              color: colors.chipActiveText,
              fontFamily: FONTS.primary,
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Chip
            label="Favorites"
            size="small"
            sx={{
              backgroundColor: colors.chip,
              color: colors.chipText,
              fontFamily: FONTS.primary,
              fontSize: 12,
              fontWeight: 500,
            }}
          />
          <Chip
            label="Scheduled"
            size="small"
            sx={{
              backgroundColor: colors.chip,
              color: colors.chipText,
              fontFamily: FONTS.primary,
              fontSize: 12,
              fontWeight: 500,
            }}
          />
        </Box>
      </Box>

      {/* Conversation List */}
      <Box sx={{ flex: 1, overflow: 'auto', px: 1 }}>
        <List sx={{ py: 0 }}>
          {conversations.length === 0 ? (
            <Box sx={{ textAlign: 'center', py: 4 }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: FONTS.primary,
                  color: colors.textSecondary,
                  fontSize: 14,
                  mt: 1,
                }}
              >
                Create a new task to get started
              </Typography>
            </Box>
          ) : (
            conversations.map((conv) => (
              <ListItem key={conv.id} disablePadding sx={{ mb: 0.5 }}>
                <ListItemButton
                  onClick={() => handleConversationClick(conv)}
                  sx={{
                    borderRadius: 2,
                    mx: 2,
                    px: 2,
                    py: 1.5,
                    backgroundColor: currentConversation?.id === conv.id ? colors.primary : 'transparent',
                    color: currentConversation?.id === conv.id ? '#ffffff' : colors.text,
                    '&:hover': {
                      backgroundColor: currentConversation?.id === conv.id ? colors.primaryHover : colors.surfaceHover,
                    },
                  }}
                >
                  <Box sx={{ width: '100%' }}>
                    <Typography
                      sx={{
                        fontFamily: FONTS.primary,
                        fontSize: 14,
                        fontWeight: 500,
                        lineHeight: 1.2,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {conv.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: FONTS.primary,
                        fontSize: 12,
                        color: currentConversation?.id === conv.id ? 'rgba(255,255,255,0.7)' : colors.textSecondary,
                        mt: 0.5,
                      }}
                    >
                      {conv.lastMessage.toLocaleDateString()}
                    </Typography>
                  </Box>
                </ListItemButton>
              </ListItem>
            ))
          )}
        </List>
      </Box>
    </Box>
  );

  // Collapsed sidebar content (for desktop only)
  const collapsedSidebarContent = (
    <Box
      sx={{
        width: sidebarWidth.collapsed,
        height: '100%',
        backgroundColor: colors.surface,
        borderRight: `1px solid ${colors.border}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        py: 3,
      }}
    >
      {/* Menu Button */}
      <Tooltip title="Expand sidebar" placement="right">
        <IconButton
          onClick={() => setSidebarOpen(true)}
          sx={{
            color: colors.text,
            mb: 3,
            '&:hover': {
              backgroundColor: colors.surfaceHover,
            },
          }}
        >
          <ViewSidebarIcon />
        </IconButton>
      </Tooltip>

      {/* New Task Button */}
      <Tooltip title="New task" placement="right">
        <IconButton
          onClick={handleNewConversation}
          sx={{
            color: colors.primary,
            mb: 2,
            '&:hover': {
              backgroundColor: 'rgba(156, 136, 255, 0.1)',
            },
          }}
        >
          <AddIcon />
        </IconButton>
      </Tooltip>

      {/* Chats Button */}
      <Tooltip title="Chats" placement="right">
        <IconButton
          sx={{
            color: colors.text,
            mb: 3,
            '&:hover': {
              backgroundColor: colors.surfaceHover,
            },
          }}
        >
          <ChatIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );

  const mediaChips = [
    { label: 'Slides', icon: <SlideshowIcon sx={{ fontSize: 16 }} /> },
    { label: 'Image', icon: <ImageIcon sx={{ fontSize: 16 }} /> },
    { label: 'Video', icon: <VideoIcon sx={{ fontSize: 16 }} /> },
    { label: 'Audio', icon: <AudioIcon sx={{ fontSize: 16 }} /> },
    { label: 'Webpage', icon: <WebIcon sx={{ fontSize: 16 }} /> },
    { label: 'Playbook', icon: <BookIcon sx={{ fontSize: 16 }} /> },
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        height: '100vh',
        backgroundColor: colors.background,
        fontFamily: FONTS.primary,
      }}
    >
      {/* Hidden file input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileUpload}
        style={{ display: 'none' }}
        multiple
      />

      {/* File upload menu */}
      <Menu
        anchorEl={fileMenuAnchor}
        open={Boolean(fileMenuAnchor)}
        onClose={handleFileMenuClose}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: colors.surface,
            border: `1px solid ${colors.border}`,
            borderRadius: 2,
            minWidth: 200,
          },
        }}
      >
        <MenuItem
          onClick={() => fileInputRef.current?.click()}
          sx={{
            fontFamily: FONTS.primary,
            color: colors.text,
            fontSize: 14,
          }}
        >
          <AttachFileIcon sx={{ mr: 2, fontSize: 18 }} />
          Upload Files
        </MenuItem>
        <MenuItem
          onClick={() => {
            fileInputRef.current?.setAttribute('accept', 'image/*');
            fileInputRef.current?.click();
          }}
          sx={{
            fontFamily: FONTS.primary,
            color: colors.text,
            fontSize: 14,
          }}
        >
          <ImageIcon sx={{ mr: 2, fontSize: 18 }} />
          Upload Images
        </MenuItem>
      </Menu>

      {/* Sidebar */}
      {!isMobile ? (
        <Box
          sx={{
            width: getCurrentSidebarWidth(),
            transition: 'width 0.3s ease',
            overflow: 'hidden',
            flexShrink: 0,
          }}
        >
          {sidebarOpen ? expandedSidebarContent : collapsedSidebarContent}
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={sidebarOpen}
          onClose={() => setSidebarOpen(false)}
          sx={{
            '& .MuiDrawer-paper': {
              backgroundColor: colors.surface,
              borderRight: `1px solid ${colors.border}`,
            },
          }}
        >
          {expandedSidebarContent}
        </Drawer>
      )}

      {/* Main Content */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Bar */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            borderBottom: `1px solid ${colors.border}`,
            backgroundColor: colors.background,
          }}
        >
          {isMobile && (
            <IconButton
              onClick={() => setSidebarOpen(!sidebarOpen)}
              sx={{ color: colors.text }}
            >
              <ViewSidebarIcon />
            </IconButton>
          )}

          <Typography
            variant="h6"
            sx={{
              fontFamily: FONTS.primary,
              fontWeight: 600,
              color: colors.text,
            }}
          >
            Corethink.ai
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: "space-between", alignItems: 'center', gap: 2, ml: 'auto' }}>
            {/* Profile Section */}
            <Box
              sx={{ cursor: 'pointer' }}
              onClick={handleProfileMenuOpen}
            >
              <Avatar
                sx={{
                  width: 32,
                  height: 32,
                  backgroundColor: colors.primary,
                  fontSize: 14,
                  fontWeight: 600,
                }}
              >
                f
              </Avatar>
            </Box>

            {/* Profile Menu */}
            <Menu
              anchorEl={profileMenuAnchor}
              open={Boolean(profileMenuAnchor)}
              onClose={handleProfileMenuClose}
              sx={{
                '& .MuiPaper-root': {
                  backgroundColor: colors.surface,
                  border: `1px solid ${colors.border}`,
                  borderRadius: 2,
                  minWidth: 200,
                },
              }}
            >
              <MenuItem
                onClick={handleProfileMenuClose}
                sx={{
                  fontFamily: FONTS.primary,
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                <AccountCircleIcon sx={{ mr: 2, fontSize: 18 }} />
                Profile Settings
              </MenuItem>
              <MenuItem
                onClick={handleProfileMenuClose}
                sx={{
                  fontFamily: FONTS.primary,
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                <SettingsIcon sx={{ mr: 2, fontSize: 18 }} />
                Preferences
              </MenuItem>
              <Divider sx={{ backgroundColor: colors.border }} />
              <MenuItem
                onClick={handleProfileMenuClose}
                sx={{
                  fontFamily: FONTS.primary,
                  color: colors.text,
                  fontSize: 14,
                }}
              >
                <LogoutIcon sx={{ mr: 2, fontSize: 18 }} />
                Sign Out
              </MenuItem>
            </Menu>
          </Box>
        </Box>

        {/* Messages Area */}
        <Box
          sx={{
            flex: 1,
            overflow: 'auto',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {messages.length === 0 ? (
            <Fade in timeout={1000}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  height: '100%',
                  textAlign: 'center',
                  px: 4,
                }}
              >
                <Typography
                  variant="h4"
                  sx={{
                    fontFamily: FONTS.primary,
                    fontWeight: 600,
                    color: colors.text,
                    mb: 1,
                    fontSize: { xs: 28, md: 36 },
                  }}
                >
                  Hello Fazliddin Fayziev
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: FONTS.primary,
                    color: colors.textSecondary,
                    fontWeight: 400,
                    mb: 6,
                    fontSize: { xs: 18, md: 22 },
                  }}
                >
                  What can I do for you?
                </Typography>

                {/* Centered Input Area for Initial State */}
                <Box sx={{ width: '100%', maxWidth: 800 }}>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'flex-end',
                      gap: 2,
                      p: 2,
                      borderRadius: 3,
                      backgroundColor: colors.inputBg,
                      border: `1px solid ${colors.inputBorder}`,
                      mb: 3,
                    }}
                  >
                    <Tooltip title="Attach files">
                      <IconButton
                        onClick={handleFileClick}
                        sx={{ color: colors.textSecondary }}
                      >
                        <Badge
                          badgeContent={attachments.length}
                          color="primary"
                          invisible={attachments.length === 0}
                        >
                          <AttachFileIcon />
                        </Badge>
                      </IconButton>
                    </Tooltip>

                    <TextField
                      fullWidth
                      multiline
                      maxRows={4}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Assign a task or ask anything"
                      variant="standard"
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          fontFamily: FONTS.primary,
                          color: colors.text,
                          fontSize: 15,
                          '& ::placeholder': {
                            color: colors.textSecondary,
                            opacity: 1,
                          },
                        },
                      }}
                    />

                    <IconButton
                      onClick={handleSendMessage}
                      sx={{
                        color: colors.primary,
                        '&:hover': {
                          backgroundColor: 'rgba(156, 136, 255, 0.1)',
                        },
                      }}
                    >
                      <Send />
                    </IconButton>
                  </Box>

                  {/* Attachment previews */}
                  {attachments.length > 0 && (
                    <Box sx={{ mb: 3 }}>
                      <RenderAttachmentsGrid {...{attachments, removeAttachment}} />
                    </Box>
                  )}

                  {/* Media Chips */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      gap: 1.5,
                      mb: 3,
                      flexWrap: 'wrap',
                    }}
                  >
                    {mediaChips.map((chip) => (
                      <Chip
                        key={chip.label}
                        icon={chip.icon}
                        label={chip.label}
                        sx={{
                          backgroundColor: colors.chip,
                          color: colors.chipText,
                          fontFamily: FONTS.primary,
                          fontSize: 13,
                          fontWeight: 500,
                          '&:hover': {
                            backgroundColor: 'rgba(156, 136, 255, 0.1)',
                            color: colors.primary,
                          },
                        }}
                      />
                    ))}
                  </Box>

                  {/* Explore use cases */}
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <Typography
                      variant="caption"
                      sx={{
                        fontFamily: FONTS.primary,
                        color: colors.textSecondary,
                        fontSize: 12,
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        cursor: 'pointer',
                        '&:hover': {
                          color: colors.primary,
                        },
                      }}
                    >
                      Explore use cases
                      <ExpandLessIcon sx={{ fontSize: 16 }} />
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Fade>
          ) : (
            <Box sx={{ p: 3 }}>
              {messages.map((message) => (
                <Box
                  key={message.id}
                  sx={{
                    display: 'flex',
                    justifyContent: message.isUser ? 'flex-end' : 'flex-start',
                    mb: 3,
                  }}
                >
                  <Box
                    sx={{
                      maxWidth: '70%',
                      p: 3,
                      borderRadius: 3,
                      backgroundColor: message.isUser ? colors.primary : colors.surface,
                      color: message.isUser ? '#ffffff' : colors.text,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: FONTS.primary,
                        fontSize: 15,
                        lineHeight: 1.6,
                      }}
                    >
                      {message.text}
                    </Typography>
                    {message.attachments && message.attachments.length > 0 && (
                      <RenderMessageAttachments {...{attachments: message.attachments, removeAttachment}} />
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
          )}
        </Box>

        {/* Bottom Input Area (only shown when there are messages) */}
        {messages.length > 0 && (
          <Box
            sx={{
              p: 3,
              backgroundColor: colors.background,
            }}
          >
            <Box sx={{ maxWidth: 800, mx: 'auto' }}>
              {/* Attachment previews */}
              {attachments.length > 0 && (
                <Box sx={{ mb: 2 }}>
                  <RenderAttachmentsGrid {...{attachments, removeAttachment}} />
                </Box>
              )}

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: 2,
                  p: 2,
                  borderRadius: 3,
                  backgroundColor: colors.inputBg,
                  border: `1px solid ${colors.inputBorder}`,
                }}
              >
                <Tooltip title="Attach files">
                  <IconButton
                    onClick={handleFileClick}
                    sx={{ color: colors.textSecondary }}
                  >
                    <Badge
                      badgeContent={attachments.length}
                      color="primary"
                      invisible={attachments.length === 0}
                    >
                      <AttachFileIcon />
                    </Badge>
                  </IconButton>
                </Tooltip>

                <TextField
                  fullWidth
                  multiline
                  maxRows={4}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Assign a task or ask anything"
                  variant="standard"
                  InputProps={{
                    disableUnderline: true,
                    sx: {
                      fontFamily: FONTS.primary,
                      color: colors.text,
                      fontSize: 15,
                      '& ::placeholder': {
                        color: colors.textSecondary,
                        opacity: 1,
                      },
                    },
                  }}
                />

                <IconButton
                  onClick={handleSendMessage}
                  sx={{
                    color: colors.primary,
                    '&:hover': {
                      backgroundColor: 'rgba(156, 136, 255, 0.1)',
                    },
                  }}
                >
                  <Send />
                </IconButton>
              </Box>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default Main;