import React, { useState, useEffect } from 'react';
import {
  Box,
  List,
  Button,
  ListItem,
  IconButton,
  Typography,
  Divider,
  useTheme,
  Avatar,
  useMediaQuery,
  Menu,
  MenuItem,
  CircularProgress
} from '@mui/material';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context/context';
import { FONTS } from '../../styles/GlobalStyles';
import Profile from '../profile/Profile';

export interface SidebarItem {
  path: string;
  label: string;
  icon: React.ReactNode;
  component: React.ReactNode;
}

export interface NavTab {
  name: string;
  path: string;
  sidebarItems: SidebarItem[];
}

interface NavTabProps {
  navTabs?: NavTab[];
}

const drawerWidth = 180;
const collapsedWidth = 72;

const NavTab: React.FC<NavTabProps> = ({ navTabs = [] }) => {
  const { mode, setMode } = useGlobalContext();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmallMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const navigate = useNavigate();
  const location = useLocation();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(!isMobile);
  const [currentNav, setCurrentNav] = useState<NavTab | null>(null);
  const [currentSidebarItem, setCurrentSidebarItem] = useState<SidebarItem | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  // Colors
  const bgColor = mode ? '#000000' : '#ffffff';
  const appBarBg = mode ? '#000000' : '#ffffff';
  const sidebarBg = mode ? '#000000' : '#ffffff';
  const contentBg = mode ? '#1e1e1e' : '#f8f8f8';
  const primaryTextColor = mode ? '#ffffff' : '#333333';
  const secondaryTextColor = mode ? '#bbbbbb' : '#666666';
  const activeColor = mode ? '#7b5cfa' : '#4E3C91';
  const iconColor = mode ? '#dddddd' : '#555555';
  const activeIconColor = mode ? '#ffffff' : '#4E3C91';
  const hoverBgColor = mode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.04)';
  const activeBgColor = mode ? 'rgba(123, 92, 250, 0.2)' : 'rgba(78, 60, 145, 0.1)';

  // Ultra-thin scrollbar styles
  const scrollbarStyles = {
    '&::-webkit-scrollbar': {
      width: '2px',
      height: '2px'
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: mode ? 'rgba(255,255,255,0.05)' : 'rgba(0,0,0,0.05)',
      borderRadius: '1px'
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'transparent'
    }
  };

  useEffect(() => {
    if (!navTabs || navTabs.length === 0) return;

    // Check if we're on the profile page
    if (location.pathname.startsWith('/main/profile')) {
      const profileNav = {
        name: 'Profile',
        path: '/main/profile',
        sidebarItems: [
          {
            path: '/main/profile',
            label: 'Your Profile',
            icon: <PermIdentityIcon />,
            component: <Profile />
          }
        ]
      };
      setCurrentNav(profileNav);
      setCurrentSidebarItem(profileNav.sidebarItems[0]);
      return;
    }

    const matchedNav = navTabs.find(nav => location.pathname.startsWith(nav.path)) || navTabs[0];
    const matchedSidebarItem = matchedNav?.sidebarItems?.find(item => 
      location.pathname.startsWith(item.path)
    ) || matchedNav?.sidebarItems?.[0];

    setCurrentNav(matchedNav || null);
    setCurrentSidebarItem(matchedSidebarItem || null);

    if (matchedNav && matchedSidebarItem && !location.pathname.startsWith(matchedSidebarItem.path)) {
      navigate(matchedNav.sidebarItems[0].path);
    }
  }, [location.pathname, navTabs, navigate]);

  const handleNavClick = (nav: NavTab) => {
    setCurrentNav(nav);
    if (!location.pathname.startsWith(nav.path)) {
      navigate(nav.sidebarItems[0].path);
    }
  };

  const handleSidebarItemClick = (item: SidebarItem) => {
    setCurrentSidebarItem(item);
    navigate(item.path);
    if (isMobile) setMobileOpen(false);
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const toggleMobileDrawer = () => setMobileOpen(!mobileOpen);
  const toggleColorMode = () => setMode(!mode);

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    navigate('/main/profile');
    handleProfileMenuClose();
  };

  const handleLogout = () => {
    handleProfileMenuClose();
  };

  if (!navTabs || navTabs.length === 0) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: bgColor
      }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!currentNav || !currentSidebarItem) {
    return (
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: bgColor,
        color: primaryTextColor,
        flexDirection: 'column',
        gap: 2
      }}>
        <Typography variant="h6" fontFamily={FONTS.third}>
          Navigation Error
        </Typography>
        <Typography fontFamily={FONTS.third}>
          No navigation items available
        </Typography>
        <Button 
          variant="contained" 
          onClick={() => window.location.reload()}
          sx={{ fontFamily: FONTS.third }}
        >
          Refresh Page
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      height: '100vh',
      overflow: 'hidden',
      backgroundColor: bgColor,
      fontFamily: FONTS.third
    }}>
      {/* App Bar */}
      <Box sx={{ 
        height: { xs: '48px', sm: '56px' },
        width: '100%',
        backgroundColor: appBarBg,
        color: primaryTextColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: { xs: 2, sm: 3 },
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 10,
        boxShadow: 'none'
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {isMobile && (
            <IconButton 
              onClick={toggleMobileDrawer}
              sx={{ color: primaryTextColor, mr: 1 }}
              aria-label="open drawer"
              size={isSmallMobile ? 'small' : 'medium'}
            >
              <MenuIcon fontSize={isSmallMobile ? 'small' : 'medium'} />
            </IconButton>
          )}
          <Link to={navTabs[0]?.sidebarItems[0]?.path || '/'} style={{ textDecoration: 'none' }}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: FONTS.third,
                fontWeight: 700,
                fontSize: { xs: '0.8rem', sm: '0.9rem' },
                color: primaryTextColor,
                '&:hover': { opacity: 0.8 }
              }}
            >
              Corethink.ai
            </Typography>
          </Link>
        </Box>

        <Box sx={{ display: { xs: 'none', sm: 'flex' }, gap: { sm: 1, md: 2 } }}>
          {navTabs.map((nav) => {
            const isActive = location.pathname.startsWith(nav.path);
            return (
              <Typography
                key={nav.path}
                onClick={() => handleNavClick(nav)}
                sx={{
                  fontFamily: FONTS.third,
                  fontSize: { sm: '0.7rem', md: '0.8rem' },
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? activeColor : secondaryTextColor,
                  cursor: 'pointer',
                  '&:hover': { 
                    color: activeColor,
                    opacity: 0.9 
                  },
                  py: 0.5
                }}
              >
                {nav.name}
              </Typography>
            );
          })}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mr: 6 }}>
          <IconButton 
            onClick={toggleColorMode}
            sx={{ color: iconColor, '&:hover': { color: activeIconColor } }}
            aria-label="toggle dark mode"
            size={isSmallMobile ? 'small' : 'medium'}
          >
            {mode ? (
              <Brightness7Icon fontSize={isSmallMobile ? 'small' : 'medium'} />
            ) : (
              <DarkModeIcon fontSize={isSmallMobile ? 'small' : 'medium'} />
            )}
          </IconButton>
          
          <Box 
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              cursor: 'pointer',
              '&:hover': { opacity: 0.9 }
            }}
            onClick={handleProfileMenuOpen}
          >
            <Avatar
              sx={{
                width: { xs: 30, sm: 36 },
                height: { xs: 30, sm: 36 },
                bgcolor: activeColor,
                color: '#fff',
                fontSize: { xs: '0.7rem', sm: '0.8rem' },
                fontWeight: 600
              }}
            >
              F
            </Avatar>
          </Box>

          <Menu
            anchorEl={anchorEl}
            open={open}
            onClose={handleProfileMenuClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                minWidth: 180,
                bgcolor: mode ? '#1e1e1e' : '#fff',
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: mode ? '#1e1e1e' : '#fff',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
                ...scrollbarStyles
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem 
              onClick={handleProfileClick} 
              sx={{ 
                fontFamily: FONTS.third,
                fontSize: '0.8rem',
                color: primaryTextColor
              }}
            >
              <Avatar sx={{ width: 24, height: 24, fontSize: '0.7rem' }} /> Profile
            </MenuItem>
            <Divider sx={{ bgcolor: mode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />
            <MenuItem 
              onClick={handleLogout} 
              sx={{ 
                fontFamily: FONTS.third,
                fontSize: '0.8rem',
                color: primaryTextColor
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        </Box>
      </Box>

      {/* Main Content Area */}
      <Box sx={{ 
        display: 'flex', 
        flex: 1, 
        mt: { xs: '48px', sm: '56px' },
        height: { xs: 'calc(100vh - 48px)', sm: 'calc(100vh - 56px)' },
        overflow: 'hidden'
      }}>
        {/* Sidebar */}
        <Box
          sx={{
            width: isMobile ? (mobileOpen ? drawerWidth : 0) : (sidebarOpen ? drawerWidth : collapsedWidth),
            minWidth: isMobile ? (mobileOpen ? drawerWidth : 0) : (sidebarOpen ? drawerWidth : collapsedWidth),
            backgroundColor: sidebarBg,
            color: primaryTextColor,
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ p: { xs: 1, sm: 2 }, flexShrink: 0 }}>
            {sidebarOpen && !isMobile && (
              <Typography variant="h6" sx={{ 
                fontFamily: FONTS.third,
                fontSize: { sm: '0.7rem', md: '0.9rem' },
                color: primaryTextColor,
                fontWeight: 600
              }}>
                {currentNav.name}
              </Typography>
            )}
          </Box>

          <Box sx={{ 
            flex: 1, 
            overflow: 'hidden',
            '&:hover': { overflow: 'auto' },
            py: 0.5,
            ...scrollbarStyles
          }}>
            <List>
              {currentNav.sidebarItems?.map(item => {
                const isActive = location.pathname.startsWith(item.path);
                return (
                  <ListItem key={item.path} disablePadding sx={{ 
                    mb: 0.5, 
                    px: 1,
                    mx: 1,
                    backgroundColor: isActive ? activeBgColor : 'transparent'
                  }}>
                    <Button
                      fullWidth
                      onClick={() => handleSidebarItemClick(item)}
                      startIcon={React.cloneElement(item.icon as React.ReactElement)}
                      sx={{
                        justifyContent: sidebarOpen ? 'flex-start' : 'center',
                        textTransform: 'none',
                        fontFamily: FONTS.third,
                        fontWeight: 400,
                        fontSize: '0.8rem',
                        color: isActive ? activeColor : secondaryTextColor,
                        px: sidebarOpen ? 2 : 1,
                        py: 1,
                        minHeight: 44,
                        '&:hover': {
                          backgroundColor: hoverBgColor
                        },
                        '& .MuiButton-startIcon': {
                          marginRight: sidebarOpen ? 1 : 0,
                          marginLeft: sidebarOpen ? 0 : '2px'
                        }
                      }}
                    >
                      {sidebarOpen && (
                        <Typography sx={{ 
                          whiteSpace: 'nowrap', 
                          overflow: 'hidden', 
                          textOverflow: 'ellipsis',
                          fontWeight: isActive ? 500 : 400,
                          fontFamily: FONTS.third,
                          fontSize: '0.75rem',
                        }}>
                          {item.label}
                        </Typography>
                      )}
                    </Button>
                  </ListItem>
                );
              })}
            </List>
          </Box>

          {!isMobile && (
            <Box sx={{ p: { xs: 1, sm: 2 }, flexShrink: 0 }}>
              <Divider sx={{ 
                my: 1, 
                backgroundColor: mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)' 
              }} />
              <Button
                fullWidth
                onClick={toggleSidebar}
                startIcon={
                  sidebarOpen ? (
                    <ChevronLeftIcon sx={{ color: iconColor }} />
                  ) : (
                    <ChevronRightIcon sx={{ color: iconColor }} />
                  )
                }
                sx={{
                  justifyContent: sidebarOpen ? 'flex-start' : 'center',
                  color: secondaryTextColor,
                  textTransform: 'none',
                  fontFamily: FONTS.third,
                  fontSize: '0.8rem',
                  px: sidebarOpen ? 2 : 1,
                  py: 1,
                  minHeight: 44,
                  '&:hover': {
                    backgroundColor: hoverBgColor
                  }
                }}
              >
                {sidebarOpen && "Collapse"}
              </Button>
            </Box>
          )}
        </Box>

        {/* Content Area */}
        <Box
          component="main"
          sx={{
            flex: 1,
            backgroundColor: contentBg,
            overflow: 'hidden',
            display: 'flex',
            borderRadius: { xs: 0, md: '10px' },
            margin: { xs: 0, md: 2 },
            transition: 'background-color 0.3s ease',
            width: '100%',
            ...scrollbarStyles
          }}
        >
          {currentSidebarItem.component}
        </Box>
      </Box>
    </Box>
  );
};

export default NavTab;