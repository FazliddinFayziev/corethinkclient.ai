import { FONTS } from "../../styles/GlobalStyles";

const getColors = (mode: boolean) => ({
    primary: '#7f5af0',
    secondary: mode ? '#57499F' : '#7f5af0',
    backgroundDark: mode ? '#14161D' : '#f8f9fa',
    panelBackground: mode ? '#323747' : '#ffffff',
    textWhite: mode ? '#fff' : '#1a202c',
    textMuted: mode ? '#888' : '#4a5568',
    iconButtonBg: mode ? '#2a2c3b' : '#edf2f7',
    iconButtonHover: mode ? '#3a3d52' : '#e2e8f0',
    borderColor: mode ? '#2d3748' : '#e2e8f0',
    codeBackground: mode ? '#0e0f26' : '#f8f9fa',
    modalBackground: mode ? '#1e1e2f' : '#ffffff',
    modalText: mode ? '#ffffff' : '#1a202c',
    scrollbarThumb: mode ? '#444' : '#cbd5e0',
});

export const styles = (mode: boolean) => {
    const COLORS = getColors(mode);
    
    return {
        // ==================================== PLAYGROUND-TAB ===============================================>

        // ===================================== PLAYGROUND-HEADER ============================================>

        playgroundheader: {
            px: 2,
            py: 1,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            bgcolor: 'transparent',
            fontFamily: FONTS.primary,
        },
        chatBubble: { color: COLORS.textWhite, fontSize: 30 },
        chatContext: {
            color: COLORS.textWhite,
            fontWeight: 500,
            fontSize: 20,
            fontFamily: FONTS.primary,
        },
        modelContext: {
            display: { xs: 'none', sm: 'flex' },
            alignItems: 'center',
            px: 2,
            py: 0.8,
            borderRadius: '999px',
            bgcolor: COLORS.iconButtonBg,
            color: COLORS.textWhite,
            fontSize: 14,
            fontWeight: 500,
        },
        modelText: {
            width: 20,
            height: 20,
            mr: 1,
            fontFamily: FONTS.primary,
        },
        copyIcon: { fontSize: 16, ml: 1, cursor: 'pointer', color: mode ? '#ccc' : '#718096' },
        apiViewS: {
            px: 2.5,
            py: 0.8,
            borderRadius: '999px',
            bgcolor: COLORS.iconButtonBg,
            color: COLORS.textWhite,
            fontSize: 14,
            fontWeight: 500,
            fontFamily: FONTS.primary,
            textTransform: 'none',
            '&:hover': { bgcolor: COLORS.iconButtonHover },
        },
        menuIconS: {
            bgcolor: COLORS.iconButtonBg,
            width: 36,
            height: 36,
            borderRadius: '50%',
            color: COLORS.textWhite,
            '&:hover': { bgcolor: COLORS.iconButtonHover },
        },

        codeCon: {
            bgcolor: COLORS.codeBackground,
            borderRadius: 3,
            position: 'relative',
            overflow: 'auto',
            fontFamily: 'monospace',  // Kept as monospace
            border: mode ? 'none' : `1px solid ${COLORS.borderColor}`,
        },

        codeBgS: {
            margin: 0,
            padding: '1.5rem',
            fontSize: '0.85rem',
            background: 'transparent',
            fontFamily: FONTS.primary,  // Changed from 'Faustina, sans-serif'
        },

        // ===================================== SYSTEM-PROMT-INPUT ============================================>

        systemPS: {
            fontFamily: FONTS.primary,
            bgcolor: COLORS.backgroundDark,
            borderRadius: 2,
            '& fieldset': { borderColor: COLORS.secondary },
            '&.Mui-focused fieldset': { borderColor: COLORS.primary },
            color: COLORS.textWhite,
        },
        expandBS: { color: COLORS.textWhite },
        inputlabel: {
            sx: { color: COLORS.textMuted, fontFamily: FONTS.primary },
        },

        // ====================================== SLIDER-CONTROL ===============================================>

        sliderConS: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: COLORS.textWhite,
        },
        sliderLabel: {
            fontFamily: FONTS.primary,
            fontSize: 14,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
        },
        displayS: { fontSize: 13, fontFamily: FONTS.primary },
        sliderS: { color: COLORS.primary },

        // ====================================== SETTINGS-PANEL ===============================================>

        settingsPanelS: {
            width: '100%',
            maxWidth: 320,
            boxSizing: 'border-box',
            borderRadius: 3,
            p: { xs: 1.5, sm: 2 },
            bgcolor: COLORS.panelBackground,
            color: COLORS.textWhite,
            fontFamily: FONTS.primary,
            border: `1px solid ${COLORS.secondary}`,
            mx: { xs: 'auto', md: 0 },
        },

        settingsPModelS: {
            mb: 1,
            fontWeight: 500,
            color: COLORS.textWhite,
            fontFamily: FONTS.primary,
        },

        chooseModelS: {
            fontFamily: FONTS.primary,
            bgcolor: COLORS.panelBackground,
            borderRadius: 1.5,
            '& .MuiOutlinedInput-root': {
                color: COLORS.textWhite,
                fontFamily: FONTS.primary,
                '& fieldset': { borderColor: COLORS.secondary },
                '&:hover fieldset': { borderColor: COLORS.primary },
                '&.Mui-focused fieldset': { borderColor: COLORS.primary },
            },
        },

        settingsContextS: {
            fontFamily: FONTS.primary,
            fontWeight: 500,
            mt: 3,
            mb: 1,
            color: COLORS.textWhite
        },

        safetyModelS: {
            fontFamily: FONTS.primary,
            fontSize: 14,
            mt: 2,
            mb: 1,
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            color: COLORS.textWhite,
        },

        safetySelectS: {
            fontFamily: FONTS.primary,
            bgcolor: COLORS.panelBackground,
            borderRadius: 1.5,
            color: COLORS.textWhite,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: COLORS.secondary },
            '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: COLORS.primary },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: COLORS.primary },
        },

        // ====================================== CHAT-DISPLAY =================================================>

        chatContainer: {
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            bgcolor: COLORS.backgroundDark,
            border: `1px solid ${COLORS.primary}`,
            borderRadius: 2,
            height: { xs: '60vh', md: '70vh' },
            maxWidth: '100%',
            color: COLORS.textWhite,
            overflowY: 'auto',
            fontFamily: FONTS.primary,
            px: { xs: 1, sm: 2, md: 3 },
            py: { xs: 2, md: 3 },
            '&::-webkit-scrollbar': {
                width: '6px',
            },
            '&::-webkit-scrollbar-track': {
                background: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                backgroundColor: COLORS.scrollbarThumb,
                borderRadius: '6px',
            },
        },

        chatEmpty: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            color: COLORS.textMuted,
            fontStyle: 'italic',
            fontSize: { xs: '1rem', sm: '1.1rem' },
            px: { xs: 1, sm: 2 },
        },

        chatEmptyContext: {
            fontFamily: FONTS.primary,
        },

        chatBubbleContext: {
            fontFamily: FONTS.primary,
            fontSize: {
                xs: '0.95rem',
                sm: '1rem',
                md: '1.05rem',
            },
            lineHeight: 1.5,
        },

        loadingBubble: {
            p: { xs: 1, sm: 1.5 },
            px: { xs: 2, sm: 3 },
            borderRadius: '20px',
            background: mode 
                ? 'linear-gradient(90deg, #2a2f45, #3b3f65)' 
                : 'linear-gradient(90deg, #e2e8f0, #cbd5e0)',
            color: mode ? '#ccc' : '#4a5568',
            fontStyle: 'italic',
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
            display: 'flex',
            alignItems: 'center',
            minWidth: 80,
        },

        loadingContext: {
            mr: 1,
            fontFamily: FONTS.primary,
            fontSize: { xs: '0.85rem', sm: '0.95rem' },
        },

        // ====================================== MESSAGE-INPUT ================================================>

        messageInputConS: {
            display: 'flex',
            gap: 2,
            alignItems: 'flex-end',
            width: '100%'
        },
        messageInputFS: {
            bgcolor: COLORS.backgroundDark,
            borderRadius: 2,
            fontFamily: FONTS.primary,
            '& .MuiInputBase-root': {
                p: 1.5,
                color: COLORS.textWhite,
                fontFamily: FONTS.primary,
            },
            '& .MuiOutlinedInput-notchedOutline': {
                borderColor: COLORS.secondary,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
                borderColor: COLORS.primary,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                borderColor: COLORS.primary,
            },
            '& .MuiInputBase-inputMultiline': {
                maxHeight: '150px',
                overflowY: 'auto',
                scrollbarWidth: 'thin',
                scrollbarColor: 'transparent transparent',
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-thumb': {
                    backgroundColor: mode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
                    borderRadius: 8,
                },
                '&::-webkit-scrollbar-track': { background: 'transparent' },
            },
        },
        inputPropMS: {
            sx: { maxHeight: '150px', overflowY: 'auto' },
        },
        iconBMS: {
            bgcolor: COLORS.backgroundDark,
            border: `1px solid ${COLORS.secondary}`,
            borderRadius: 2,
            height: '48px',
            width: '48px',
            alignSelf: 'center',
            color: COLORS.textWhite,
            '&:hover': {
                borderColor: COLORS.primary,
                backgroundColor: `rgba(127, 90, 240, ${mode ? '0.1' : '0.05'})`,
            },
        },
        sendIconS: { 
            color: '#B6A2F5',
            cursor: 'pointer',
        },

        suggestionsCardsBox: { 
            width: '100%', 
            position: 'relative' 
        },

        suggestionsBox: { 
            width: '100%',
            mb: 2,
            overflow: 'hidden',
            position: 'relative',
            height: '72px',
            '&:hover .suggestion-card': {
                transform: 'scale(0.98)',
                opacity: 0.9
            }
        },

        suggestionCard: {
            flexShrink: 0,
            cursor: 'pointer',
            p: 1.5,
            borderRadius: '15px',
            bgcolor: mode ? 'rgba(127, 90, 240, 0.12)' : 'rgba(127, 90, 240, 0.08)',
            border: `1px solid ${mode ? 'rgba(127, 90, 240, 0.25)' : 'rgba(127, 90, 240, 0.15)'}`,
            boxShadow: 'none',
            width: '180px',
            height: '60px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.2s ease',
            '&:hover': {
                bgcolor: mode ? 'rgba(127, 90, 240, 0.2)' : 'rgba(127, 90, 240, 0.12)',
                boxShadow: mode ? '0 4px 12px rgba(127, 90, 240, 0.15)' : '0 4px 12px rgba(127, 90, 240, 0.08)'
            }
        },

        suggestionCardContext: { 
            fontWeight: 500,
            color: mode ? '#E2E8F0' : '#2D3748',
            fontFamily: 'Faustina, sans-serif',
            lineHeight: 1.25,
            fontSize: '0.85rem',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textAlign: "center",
        },

        // ====================================== MODAL-API-VIEW ================================================>

        modalContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
            p: 0,
            m: 0,
            left: '4%',
            width: '90vw',
            maxWidth: '100vw',
            '& .MuiBackdrop-root': {
                width: '100vw',
                maxWidth: '100vw',
            }
        },

        modalIcon: {
            position: 'absolute',
            top: 8,
            right: 8,
            color: mode ? '#aaa' : '#718096',
        },

        modalApiContext: {
            fontFamily: FONTS.primary,
            fontSize: 20,
            fontWeight: 400,
            mb: 2,
            color: COLORS.textWhite,
        },
        modalTabs: {
            maxWidth: '100%',
            overflow: 'hidden',
        },
        modalTab: {
            fontFamily: FONTS.primary,
            color: COLORS.textWhite,
        },
        modalCodeBox: {
            mt: 2,
            borderRadius: 2,
            overflow: 'auto',
            background: mode ? '#282c34' : '#f8f9fa',
            width: '100%',
            border: mode ? 'none' : `1px solid ${COLORS.borderColor}`,
        },

        // ====================================== SETTINGS-MODAL ================================================>

        settingModalCon: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            p: 4,
        },
    }
}

export const modalBoxStyle = (isMobile: boolean, mode: boolean) => {
    const COLORS = getColors(mode);
    return {
        position: 'relative',
        bgcolor: COLORS.modalBackground,
        borderRadius: 2,
        color: COLORS.modalText,
        p: isMobile ? 2 : 3,
        boxShadow: 24,
        width: '100%',
        maxWidth: isMobile ? '95%' : 720,
        maxHeight: '90vh',              
        overflowY: 'auto',              
        boxSizing: 'border-box',
    }
}

export const expandStyle = (expanded: boolean) => {
    return {
        transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
    }
}