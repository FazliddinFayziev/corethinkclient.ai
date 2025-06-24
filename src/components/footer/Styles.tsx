import { FONTS } from "../../styles/GlobalStyles";

export const styles = (mode: boolean) => ({
    footer: {
        position: 'relative',
        py: { xs: 6, md: 10 },
        px: 2,
        backgroundColor: mode ? '#0A0C21' : '#F8F7FC',
        color: mode ? '#FFFFFF' : '#0A0C21',
        borderTop: mode 
            ? '1px solid rgba(255, 255, 255, 0.1)'
            : '1px solid rgba(10, 12, 33, 0.1)',
        overflow: 'hidden',
    },
    backgroundGradient: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: mode 
            ? 'radial-gradient(circle at 70% 20%, rgba(123, 79, 255, 0.08) 0%, transparent 60%)' 
            : 'radial-gradient(circle at 70% 20%, rgba(182, 162, 245, 0.08) 0%, transparent 60%)',
        zIndex: 0,
        opacity: 0.6
    },
    decorativeDot1: {
        position: 'absolute',
        width: 120,
        height: 120,
        borderRadius: '50%',
        background: mode 
            ? 'radial-gradient(circle, rgba(182, 162, 245, 0.15) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(123, 79, 255, 0.15) 0%, transparent 70%)',
        top: '10%',
        right: '5%',
        zIndex: 0,
    },
    decorativeDot2: {
        position: 'absolute',
        width: 80,
        height: 80,
        borderRadius: '50%',
        background: mode 
            ? 'radial-gradient(circle, rgba(182, 162, 245, 0.1) 0%, transparent 70%)' 
            : 'radial-gradient(circle, rgba(123, 79, 255, 0.1) 0%, transparent 70%)',
        bottom: '15%',
        left: '8%',
        zIndex: 0,
    },
    footerContainer: {
        position: 'relative',
        zIndex: 1,
    },
    columnsContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gap: { xs: 4, md: 2 },
    },
    brandColumn: {
        flex: '1 1 300px',
        maxWidth: { md: '350px' },
        mb: { xs: 2, md: 0 },
    },
    navColumn: {
        flex: '0 1 160px',
        mb: { xs: 2, md: 0 },
    },
    connectColumn: {
        flex: '1 1 250px',
        maxWidth: { md: '300px' },
    },
    brandText: {
        fontFamily: FONTS.primary,
        fontWeight: 700,
        color: mode ? '#FFFFFF' : '#0A0C21',
        mb: 2,
        display: 'flex',
        alignItems: 'center',
        fontSize: { xs: '1.5rem', md: '1.75rem' }
    },
    brandIcon: {
        fontSize: { xs: 20, md: 24 },
        ml: 1.5,
        color: mode ? '#B6A2F5' : '#7B4FFF'
    },
    footerText: {
        color: mode ? 'rgba(255,255,255,0.75)' : 'rgba(10,12,33,0.75)',
        fontFamily: FONTS.primary,
        fontSize: '1rem',
        lineHeight: 1.6,
        maxWidth: 300,
        mb: 3,
    },
    footerHeading: {
        color: mode ? '#FFFFFF' : '#0A0C21',
        fontFamily: FONTS.primary,
        fontWeight: 600,
        mb: 2,
        fontSize: '1.1rem',
        letterSpacing: 0.5,
    },
    footerLink: {
        color: mode ? 'rgba(255,255,255,0.75)' : 'rgba(10,12,33,0.75)',
        fontFamily: FONTS.primary,
        fontSize: '0.95rem',
        py: 0.8,
        display: 'block',
        transition: 'color 0.3s ease',
        '&:hover': {
            color: mode ? '#B6A2F5' : '#7B4FFF',
        },
    },
    socialContainer: {
        display: 'flex',
        gap: 1,
        mb: 3,
        flexWrap: 'wrap'
    },
    footerIcon: {
        color: mode ? 'rgba(255,255,255,0.8)' : 'rgba(10,12,33,0.8)',
        backgroundColor: mode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(10, 12, 33, 0.05)',
        transition: 'all 0.3s ease',
        '&:hover': {
            color: mode ? '#B6A2F5' : '#7B4FFF',
            backgroundColor: mode 
                ? 'rgba(182, 162, 245, 0.15)' 
                : 'rgba(123, 79, 255, 0.15)',
            transform: 'translateY(-2px)'
        },
    },
    contactButton: {
        mt: 2,
        color: mode ? '#B6A2F5' : '#7B4FFF',
        borderColor: mode ? 'rgba(182, 162, 245, 0.5)' : 'rgba(123, 79, 255, 0.5)',
        borderRadius: '8px',
        px: 3,
        py: 1,
        fontWeight: 500,
        textTransform: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            borderColor: mode ? '#B6A2F5' : '#7B4FFF',
            backgroundColor: mode 
                ? 'rgba(182, 162, 245, 0.1)' 
                : 'rgba(123, 79, 255, 0.1)',
            boxShadow: mode 
                ? '0 4px 12px rgba(182, 162, 245, 0.2)' 
                : '0 4px 12px rgba(123, 79, 255, 0.2)',
        },
    },
    docsButton: {
        mt: 2,
        backgroundColor: mode ? '#B6A2F5' : '#7B4FFF',
        color: mode ? '#0A0C21' : '#FFFFFF',
        borderRadius: '8px',
        px: 3,
        py: 1.5,
        fontWeight: 500,
        textTransform: 'none',
        transition: 'all 0.3s ease',
        '&:hover': {
            backgroundColor: mode ? '#A492E5' : '#6B4AFF',
            boxShadow: mode 
                ? '0 4px 12px rgba(182, 162, 245, 0.3)' 
                : '0 4px 12px rgba(123, 79, 255, 0.3)',
        },
    },
    divider: {
        my: { xs: 3, md: 5 },
        borderColor: mode ? 'rgba(255,255,255,0.1)' : 'rgba(10,12,33,0.1)',
    },
    copyrightContainer: {
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
        pt: 2,
    },
    copyright: {
        color: mode ? 'rgba(255,255,255,0.6)' : 'rgba(10,12,33,0.6)',
        fontSize: '0.9rem',
        fontFamily: FONTS.primary,
    },
    legalLinks: {
        display: 'flex',
        gap: 2,
    },
    legalLink: {
        color: mode ? 'rgba(255,255,255,0.6)' : 'rgba(10,12,33,0.6)',
        fontSize: '0.9rem',
        fontFamily: FONTS.primary,
        transition: 'color 0.3s ease',
        '&:hover': {
            color: mode ? '#B6A2F5' : '#7B4FFF',
        },
    },
});