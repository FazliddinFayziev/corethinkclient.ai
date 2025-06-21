import { FONTS } from "../../styles/GlobalStyles";

export const DashboardStyles = (mode: boolean) => {
    return {
        minHeight: '100vh',
        px: { xs: 4, md: 4 },
        py: { xs: 6, md: 8 },
        backgroundSize: '20px 20px',
        fontFamily: FONTS.primary,
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: mode ? '#0A0C21' : '#F9F9FF',
        color: mode ? '#fff' : '#111',
        backgroundImage: mode
          ? 'radial-gradient(#1a1d40 1px, transparent 1px)'
          : 'radial-gradient(#e5e5ff 1px, transparent 1px)',
    }
};