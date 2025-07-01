import { FONTS } from "../../styles/GlobalStyles";

export const getMessageBackgroundColor = (role: string, mode: boolean): string => {
    return role === 'user'
        ? (mode ? '#1e1e1e' : '#f0f0f0')
        : (mode ? '#1e1e1e' : '#f8f8f8');
};

export const getMessageBorderColor = (mode: boolean): string => {
    return mode ? '#333' : '#e0e0e0';
};

export const getTextColor = (mode: boolean): string => {
    return mode ? '#e0e0e0' : '#333333';
};

export const getIconColor = (mode: boolean): string => {
    return mode ? '#AAAABB' : '#888888';
};

export const getSendButtonColor = (mode: boolean, disabled: boolean): string => {
    if (disabled) return mode ? '#666' : '#999';
    return mode ? '#939BF9' : '#4E3C91';
};

const getMessageColor = (role: string, mode: boolean): string => {
    return role === 'user'
        ? (mode ? '#4E3C91' : '#4E3C91')
        : (mode ? '#939BF9' : '#4E3C91');
};

export const styles = (mode: boolean) => {
    return {

        // ====================== INPUT AREA ========================>

        inputCon: {
            p: 2,
            borderTop: `1px solid ${getMessageBorderColor(mode)}`,
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
        },
        inputBox: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            border: `1px solid ${getMessageBorderColor(mode)}`,
            p: '4px 12px'
        },
        inputS: {
            '& .MuiOutlinedInput-root': {
                border: 'none',
                '& fieldset': { border: 'none' },
                '&:hover fieldset': { border: 'none' },
                '&.Mui-focused fieldset': { border: 'none' },
                fontFamily: FONTS.third,
                color: getTextColor(mode)
            },
        },

        // ================= SETTHINGS PANEL ==================>

        settingsText: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            fontWeight: 500,
            mb: 2,
            fontSize: '1.2rem'
        },
        modelS: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mb: 1,
        },
        modelField: {
            mb: 2,
            '& .MuiOutlinedInput-root': {
                color: getTextColor(mode),
                fontFamily: FONTS.third,
            }
        },
        outputCon: { mb: 2 },
        outputBox: {
            mb: 1,
            display: 'flex',
            alignItems: 'center',
        },
        outputText: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mr: 1
        },
        outputLengthS: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            textAlign: 'right',
            fontSize: '0.8rem',
        },
        tempCon: { mb: 2 },
        tempBox: {
            display: 'flex',
            alignItems: 'center',
            mb: 1,
        },
        tempText: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mr: 1
        },
        tempS: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            textAlign: 'right',
            fontSize: '0.8rem'
        },
        safetyMS: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mb: 1,
        },
        selectSafety: {
            mb: 2,
            '& .MuiOutlinedInput-root': {
                color: getTextColor(mode),
                fontFamily: FONTS.third,
            }
        },

        // ================= EMPTY STATE ==================>

        emptyCon: {
            display: 'flex',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            color: mode ? '#666666' : '#999999',
            textAlign: 'center',
            flexDirection: 'column',
            gap: '16px'
        },

        // ================= MESSAGE LISTING ==================>

        messageCon: {
            gap: 2,
            display: 'flex',
            flexDirection: 'column',
        },
        messagetypoBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1
        },
        editIconB: { color: getIconColor(mode) },
        messageMarkdownS: {
            background: 'none',
            padding: 0,
            margin: 0,
            fontSize: '0.9rem',
            fontFamily: FONTS.third,
            color: getTextColor(mode)
        },

    }
};

export const messageListStyle = (message: any, mode: boolean) => {
    return {
        messageBox: {
            p: 2,
            borderRadius: '8px',
            backgroundColor: getMessageBackgroundColor(message.role, mode),
            border: `1px solid ${getMessageBorderColor(mode)}`,
            maxWidth: '800px',
            marginLeft: message.role === 'user' ? 'auto' : '0',
            marginRight: message.role === 'user' ? '0' : 'auto',
            position: 'relative'
        },
        contextS: {
            fontWeight: 600,
            fontFamily: FONTS.third,
            color: getMessageColor(message.role, mode)
        },
    };
};

export const p_styles = (mode: boolean) => {
    return {
        // ========================= PLAYGROUND ================================>

        mainPlaygroundCon: {
            display: 'flex',
            height: '100%',
            width: '100%',
            backgroundColor: mode ? '#121212' : '#f5f5f5',
            color: getTextColor(mode),
            fontFamily: FONTS.third,
        },

        // ========================== CHAT =====================================>

        mainChatCon: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            overflow: 'hidden'
        },

        // ========================== TOP-NAV ==============================>

        topNavS: {
            p: 2,
            borderBottom: `1px solid ${getMessageBorderColor(mode)}`,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        navTitleBox: { display: 'flex', alignItems: 'center', gap: 1 },
        navTitle: {
            textTransform: 'none',
            color: getTextColor(mode),
            fontFamily: FONTS.third,
        },
        navRightBox: { display: 'flex', alignItems: 'center', gap: 1 },
        saveS: {
            textTransform: 'none',
            backgroundColor: '#4E3C91',
            fontFamily: FONTS.third,
            '&:hover': {
                backgroundColor: '#5a4a99',
            },
        },
        navMenuS: {
            sx: {
                backgroundColor: mode ? '#2d2d2d' : '#ffffff',
            }
        },
        menuItemS: {
            color: getTextColor(mode),
            fontFamily: FONTS.third,
        },
        navTypoIcon: {
            color: getIconColor(mode),
            fontSize: '1.4rem'
        },

        // ============================ CHAT SECTION =============================>

        chatSectionS: {
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
        },

        // ======================== SETTINGS ========================================>

        settingsCon: {
            display: 'flex',
            flexDirection: 'column',
            width: '300px',
            minWidth: '300px',
            borderRight: `1px solid ${getMessageBorderColor(mode)}`,
        },
        modelCon: {
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            borderBottom: `1px solid ${getMessageBorderColor(mode)}`,
            px: 2,
            py: 1.5,
        },
        modelBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: 1,
        },
        modelTypo: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            fontWeight: 500,
        },
        modelIcon: { color: getIconColor(mode) },
        modelS: {
            fontFamily: FONTS.third,
            fontSize: '0.875rem',
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            borderRadius: '6px',
            px: 1,
            py: 0.5,
            color: getTextColor(mode),
            mb: 1,
        },
        controlCon: {
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: '0.75rem',
            color: mode ? '#ccc' : '#555',
            gap: 1.5
        },
        controlTypo: { 
            fontSize: '0.65rem', 
            color: getIconColor(mode), 
            fontFamily: FONTS.third 
        },
        variableBox: {
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            borderBottom: `1px solid ${getMessageBorderColor(mode)}`,
        },
        variableTypo: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            fontWeight: 500,
        },
        createBox: { display: 'flex', alignItems: 'center', gap: 0.5 },
        createTypo: {
            fontFamily: FONTS.third,
            fontSize: '0.8rem',
            color: getIconColor(mode),
            cursor: "pointer",
        },
        addIconS: {
            fontSize: '1rem',
            color: getIconColor(mode),
            cursor: 'pointer'
        },
        systemBox: {
            p: 2,
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            flex: 1,
        },
        systemTypo: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            fontWeight: 500,
            mb: 1,
        },
        sysMessage: {
            '& .MuiInputBase-root': {
                backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
                color: getTextColor(mode),
                fontFamily: FONTS.third,
                fontSize: '0.8rem',
            }
        },
    }
};