import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { motion } from 'framer-motion';
import { DashboardStyles } from './Styles';
import CodeIcon from '@mui/icons-material/Code';
import { useGlobalContext } from '../../context/context';
import DashboardIcon from '@mui/icons-material/Dashboard';
import SummarizeIcon from '@mui/icons-material/Summarize';
import { useNavigate, useLocation } from 'react-router-dom';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { DocOverview, Logs, NavTab, Playground } from '../../components';

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

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useGlobalContext();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('accessToken', token);
      navigate('/main/dashboard/overview');
    }
  }, [location.search, navigate]);

  const navTabs: NavTab[] = [
    {
      name: 'Dashboard',
      path: '/main/dashboard',
      sidebarItems: [
        {
          path: '/main/dashboard/overview',
          label: 'Overview',
          icon: <DashboardIcon />,
          component: <Logs />
        },
        {
          path: '/main/dashboard/analytics',
          label: 'Analytics',
          icon: <DashboardIcon />,
          component: <Box sx={{ margin: 2 }}>Analytics Content</Box>
        }
      ]
    },
    {
      name: 'Playground',
      path: '/main/playground',
      sidebarItems: [
        {
          path: '/main/playground/code',
          label: 'Prompts',
          icon: <ChatBubbleOutlineIcon />,
          component: <Playground />
        }
      ]
    },
    {
      name: 'Docs',
      path: '/main/docs',
      sidebarItems: [
        {
          path: '/main/docs/overview',
          label: 'Overview',
          icon: <CodeIcon />,
          component: <DocOverview />
        },
        {
          path: '/main/docs/quickstart',
          label: 'Quick Start',
          icon: <SummarizeIcon />,
          component: <Box sx={{ margin: 2 }}>Quick Start Docs</Box>
        }
      ]
    },
    {
      name: 'API reference',
      path: '/main/api',
      sidebarItems: [
        {
          path: '/main/api/overview',
          label: 'Overview',
          icon: <CompareArrowsIcon />,
          component: <Box sx={{ margin: 2 }}>API Overview</Box>
        },
        {
          path: '/main/api/quickstart',
          label: 'Quick Start',
          icon: <CompareArrowsIcon />,
          component: <Box sx={{ margin: 2 }}>Quick Start API</Box>
        }
      ]
    }
  ];

  return (
    <Box
      component={motion.div}
      sx={DashboardStyles(mode)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <NavTab navTabs={navTabs} />
    </Box>
  );
};

export default Dashboard;