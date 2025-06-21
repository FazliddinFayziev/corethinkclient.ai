import React, { useState, useEffect, type ReactElement, type ReactNode } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import {
  Box,
  List,
  Stack,
  Button,
  Drawer,
  ListItem,
  IconButton,
  Typography,
} from '@mui/material';
import { getStyles } from './Styles';
import { Link } from 'react-router-dom';
import darkLogo from '../assets/darkLogo.png';
import lightLogo from '../assets/lightLogo.png';
import { useGlobalContext } from '../../context/context';

interface SingleTabProps {
  path: string;
  component: ReactElement;
}

interface NavTabProps {
  children: ReactNode;
}

const NavTab: React.FC<NavTabProps> & { SingleTab: React.FC<SingleTabProps> } = ({ children }) => {
  const { mode, setMode } = useGlobalContext();
  const styles = getStyles(mode);
  const tabs = React.Children.toArray(children) as React.ReactElement<SingleTabProps>[];
  const [activeNav, setActiveNav] = useState<string>('');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    if (tabs.length > 0 && !activeNav) {
      setActiveNav(tabs[0].props.path);
    }
  }, [tabs, activeNav]);

  const currentComponent =
    tabs.find((tab) => tab.props.path === activeNav)?.props.component ?? null;

  return (
    <>
      {/* NAVIGATION HEADER */}
      <Box sx={styles.headerContainer}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Box
            component="img"
            src={mode ? lightLogo : darkLogo}
            alt="CoreThink logo"
            sx={{
              height: 80,
              width: 'auto',
              mr: 2,
              display: 'block',
              cursor: 'pointer',
            }}
          />
        </Link>

        {/* Desktop Nav */}
        <Box sx={styles.nav}>
          <Stack direction="row" spacing={3}>
            {tabs.map(({ props }) => (
              <Button
                key={props.path}
                sx={styles.navItem(props.path === activeNav)}
                onClick={() => setActiveNav(props.path)}
              >
                {props.path}
              </Button>
            ))}
          </Stack>

          {/* Toggle Theme Icon */}
          <IconButton
            onClick={() => setMode(!mode)}
            sx={{ ml: 2, color: mode ? '#fff' : '#0A0C21' }}
          >
            {mode ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>

          <Box sx={{ mr: 2 }} />
          <Box sx={styles.logoBubble}>M</Box>
        </Box>

        {/* Mobile Nav */}
        <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center' }}>
          <IconButton 
            onClick={() => setDrawerOpen(true)} 
            sx={styles.menuIcon}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            onClick={() => setMode(!mode)}
            sx={{ mx: 2, color: mode ? '#fff' : '#0A0C21' }}
          >
            {mode ? <Brightness7Icon /> : <DarkModeIcon />}
          </IconButton>
          <Box sx={styles.mobileLogo}>M</Box>
          <Drawer
            anchor="top"
            open={drawerOpen}
            onClose={() => setDrawerOpen(false)}
            PaperProps={{ sx: styles.drawerPaper }}
          >
            <List>
              {tabs.map(({ props }) => (
                <ListItem
                  key={props.path}
                  onClick={() => {
                    setActiveNav(props.path);
                    setDrawerOpen(false);
                  }}
                  sx={{ px: 3, py: 2, cursor: 'pointer' }}
                >
                  <Typography sx={styles.drawerItem(props.path === activeNav)}>
                    {props.path}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Drawer>
        </Box>
      </Box>

      {/* COMPONENT RENDERING */}
      {currentComponent}
    </>
  );
};

NavTab.SingleTab = () => null;

export const SingleTab = NavTab.SingleTab;
export default NavTab;