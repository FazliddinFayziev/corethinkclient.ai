import { FONTS } from "../../styles/GlobalStyles";

export const styles = (mode: boolean) => ({
    dashboardContainer: { 
        maxWidth: 1100, 
        width: '100%', 
        mx: 'auto', 
        fontFamily: FONTS.primary,
        color: mode ? '#E2E8F0' : '#1A202C',
    },
    contextOneCon: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 1 
    },
    contextManage: {
        fontWeight: 500,
        letterSpacing: '0.03em',
        color: mode ? '#CBD5E1' : '#2D3748',
        fontFamily: FONTS.primary,
    },
    buttonOne: {
        fontWeight: 300,
        borderRadius: 999,
        border: `1px solid ${mode ? '#4A5568' : '#CBD5E1'}`,
        color: mode ? '#E2E8F0' : '#2D3748',
        px: 3,
        fontFamily: FONTS.primary,
        textTransform: 'none',
        transition: '0.3s',
        '&:hover': {
            background: 'linear-gradient(90deg, #4E3C91, #939BF9)',
            color: '#FFFFFF',
            border: '1px solid transparent',
        },
    },
    textOne: {
        color: mode ? '#7F8FA6' : '#4A5568',
        mb: 6,
        fontWeight: 500,
        letterSpacing: 0.4,
        fontFamily: FONTS.primary,
    },
    cardOneS: {
        flex: 1,
        borderRadius: 5,
        p: 4,
        backdropFilter: 'blur(16px)',
        background: mode 
            ? 'linear-gradient(135deg, rgba(78,60,145,0.1), rgba(147,155,249,0.05))'
            : 'linear-gradient(135deg, rgba(78,60,145,0.05), rgba(147,155,249,0.02))',
        border: mode 
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: mode 
            ? '0 12px 40px rgba(147,155,249,0.2)'
            : '0 12px 40px rgba(78,60,145,0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.015)',
            boxShadow: mode 
                ? '0 16px 50px rgba(78,60,145,0.35)'
                : '0 16px 50px rgba(78,60,145,0.2)',
        },
    },
    cardOneContext: { 
        fontWeight: 700, 
        mb: 1, 
        color: mode ? '#A3A9D1' : '#4E3C91', 
        fontFamily: FONTS.primary,
    },
    cardOneText: { 
        mb: 3, 
        color: mode ? '#7F8FA6' : '#718096', 
        fontWeight: 500, 
        fontFamily: FONTS.primary,
    },
    apiKeyS: {
        display: 'flex',
        alignItems: 'center',
        bgcolor: mode ? '#1F2143' : '#EDF2F7',
        borderRadius: 3,
        py: 1,
        px: 2,
        fontFamily: 'monospace',
        color: mode ? '#D1D9FF' : '#2D3748',
    },
    apiKeyCopyS: { 
        flexGrow: 1, 
        fontWeight: 400, 
        fontFamily: FONTS.primary, 
    },
    copyIcon: {
        color: mode ? '#FFFFFF' : '#4A5568',
    },
    managekeys: {
        mt: 4,
        background: 'linear-gradient(90deg, #4E3C91, #939BF9)',
        borderRadius: 999,
        fontWeight: 400,
        py: 1.5,
        textTransform: 'none',
        letterSpacing: '0.05em',
        color: "#FFFFFF",
        fontFamily: FONTS.primary,
        '&:hover': { 
            background: 'linear-gradient(90deg, #3E2C81, #838BE9)',
        },
    },
    cardTwoS: {
        flex: 1,
        borderRadius: 5,
        p: 4,
        backdropFilter: 'blur(16px)',
        background: mode 
            ? 'linear-gradient(135deg, rgba(44,182,125,0.1), rgba(255,255,255,0.05))'
            : 'linear-gradient(135deg, rgba(44,182,125,0.05), rgba(255,255,255,0.02))',
        border: mode 
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(0, 0, 0, 0.05)',
        boxShadow: mode 
            ? '0 12px 40px rgba(44,182,125,0.2)'
            : '0 12px 40px rgba(44,182,125,0.1)',
        transition: 'all 0.3s ease-in-out',
        '&:hover': {
            transform: 'scale(1.015)',
            boxShadow: mode 
                ? '0 16px 50px rgba(44,182,125,0.35)'
                : '0 16px 50px rgba(44,182,125,0.2)',
        },
    },
    cardTwoContext: { 
        fontWeight: 700, 
        mb: 1, 
        color: mode ? '#A3A9D1' : '#2CB67D', 
        fontFamily: FONTS.primary, 
    },
    cardTwoText: { 
        mb: 2, 
        color: mode ? '#7F8FA6' : '#718096', 
        fontWeight: 500, 
        fontFamily: FONTS.primary, 
    },
    priceS: { 
        color: '#2CB67D', 
        fontWeight: 'bold', 
        mb: 1, 
        fontFamily: FONTS.primary, 
    },
    remainS: { 
        display: 'block', 
        color: mode ? '#81F4D6' : '#2CB67D', 
        mb: 4, 
        fontFamily: FONTS.primary, 
    },
    addCredit: {
        background: 'linear-gradient(90deg, rgb(48, 121, 44), rgb(137, 255, 137))',
        borderRadius: 999,
        fontWeight: 400,
        py: 1.5,
        textTransform: 'none',
        letterSpacing: '0.05em',
        color: "#000000",
        fontFamily: FONTS.primary,
        '&:hover': { 
            background: 'linear-gradient(90deg, rgb(38, 111, 34), rgb(127, 245, 127))',
        },
    },
    contextTwoCon: { 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 1,
    },
    contextQuick: {
        fontWeight: 500,
        letterSpacing: '0.03em',
        color: mode ? '#CBD5E1' : '#2D3748',
        fontFamily: FONTS.primary,
    },
    buttonTwo: {
        fontWeight: 300,
        borderRadius: 999,
        border: `1px solid ${mode ? '#4A5568' : '#CBD5E1'}`,
        color: mode ? '#E2E8F0' : '#2D3748',
        px: 3,
        fontFamily: FONTS.primary,
        textTransform: 'none',
        transition: '0.3s',
        '&:hover': {
            background: 'linear-gradient(90deg, #4E3C91, #939BF9)',
            color: '#FFFFFF',
            border: '1px solid transparent',
        },
    },
    setupS: {
        color: mode ? '#7F8FA6' : '#4A5568',
        mb: 6,
        fontWeight: 500,
        letterSpacing: 0.4,
        fontFamily: FONTS.primary,
    },
    tabsS: {
        mb: 3,
        '& .MuiTabs-indicator': {
            backgroundColor: '#7F5AF0',
            height: 3,
            borderRadius: 3,
        },
    },
    tabS: { 
        color: mode ? '#FFFFFF' : '#2D3748', 
        fontWeight: 500, 
        textTransform: 'none', 
        fontFamily: FONTS.primary,
        opacity: 1,
    },
    codeCon: {
        bgcolor: mode ? '#0E0F26' : '#F7FAFC',
        borderRadius: 3,
        position: 'relative',
        overflow: 'auto',
        fontFamily: 'monospace',
        border: mode ? 'none' : '1px solid #E2E8F0',
    },
    copyCode: {
        position: 'absolute',
        top: 12,
        right: 12,
        color: mode ? '#FFFFFF' : '#4A5568',
        '&:hover': {
            backgroundColor: mode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        },
    },
    codebg: {
        margin: 0,
        padding: '1.5rem',
        fontSize: '0.85rem',
        background: 'transparent',
        fontFamily: FONTS.primary,
    }
});