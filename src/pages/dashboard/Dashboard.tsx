import React, { useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { DashboardStyles } from './Styles';
import { useGlobalContext } from '../../context/context';
import { useNavigate, useLocation } from 'react-router-dom';
import { DashboardTab, NavTab, PlaygroundTab, SingleTab } from '../../components';


const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { mode } = useGlobalContext();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get('token');
    if (token) {
      localStorage.setItem('accessToken', token);
      navigate('/dashboard');
    }
  }, [location.search, navigate]);

  return (
    <Box
      component={motion.div}
      sx={DashboardStyles(mode)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <NavTab>
        <SingleTab path="Dashboard" component={<DashboardTab />} />
        <SingleTab path="Playground" component={<PlaygroundTab />} />
        <SingleTab path="Compare" component={
          <>
            <Typography sx={{ fontFamily: 'Faustina, sans-serif' }}>
              There will be Compare section!
            </Typography>
          </>
        } />
      </NavTab>
    </Box>
  );
};

export default Dashboard;
