import { FONTS } from "../../styles/GlobalStyles";

export const getStyles = (mode: boolean) => ({
  navItem: (isActive: boolean) => ({
    color: isActive ? '#fff' : (mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'),
    fontWeight: isActive ? 600 : 500,
    borderRadius: '6px',
    background: isActive ? 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)' : 'transparent',
    textTransform: 'none',
    px: 2,
    py: 1,
    fontSize: '0.9rem',
    fontFamily: FONTS.primary,
    transition: 'all 0.2s ease',
    '&:hover': {
      background: isActive ? 
        'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)' : 
        (mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
    },
    minWidth: '100px',
  }),
  mobileNavItem: (isActive: boolean) => ({
    color: isActive ? '#fff' : (mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'),
    fontWeight: isActive ? 600 : 500,
    borderRadius: '6px',
    background: isActive ? 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)' : 'transparent',
    textTransform: 'none',
    px: 1.5,
    py: 0.5,
    fontSize: '0.8rem',
    fontFamily: FONTS.primary,
    minWidth: 'auto',
    whiteSpace: 'nowrap',
    '&:hover': {
      background: isActive ? 
        'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)' : 
        (mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'),
    },
  }),
  profileButton: {
    width: 36,
    height: 36,
    borderRadius: '50%',
    background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff',
    marginLeft: 1,
    cursor: 'pointer',
    transition: 'transform 0.2s',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  },
  drawerPaper: {
    backgroundColor: mode ? '#1A1C2E' : '#fff',
    color: mode ? '#fff' : '#333',
    borderRight: 'none',
    boxShadow: mode ? '2px 0 8px rgba(0, 0, 0, 0.3)' : '2px 0 8px rgba(0, 0, 0, 0.1)',
    width: 240,
    overflowX: 'hidden',
  },
  sidebarItem: {
    color: mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderRadius: '6px',
    px: 2,
    py: 1.5,
    fontSize: '0.875rem',
    '&:hover': {
      backgroundColor: mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
      color: mode ? '#fff' : '#000',
    },
    '&.Mui-selected': {
      background: 'linear-gradient(135deg, #6A11CB 0%, #2575FC 100%)',
      color: '#fff',
    },
  },
  sidebarToggle: {
    color: mode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-start',
    textTransform: 'none',
    borderRadius: '6px',
    px: 2,
    py: 1,
    fontSize: '0.875rem',
    '&:hover': {
      backgroundColor: mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
    },
  },
});