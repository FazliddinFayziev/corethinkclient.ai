import React, { useState } from 'react';
import User from './User';
import ApiKey from './ApiKey';
import Security from './Security';
import { FONTS } from '../../styles/GlobalStyles';
import { useGlobalContext } from '../../context/context';
import { Box, Tabs, Tab, Typography, Divider } from '@mui/material';

function TabPanel({ children, value, index }: any) {
  return (
    <div hidden={value !== index} style={{ width: '100%' }}>
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const Profile = () => {
  const { mode } = useGlobalContext();
  const [tabIndex, setTabIndex] = useState(2);

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const primaryTextColor = mode ? '#fff' : '#1a1a1a';
  const tabTextColor = mode ? '#bbb' : '#555';
  const activeTabColor = mode ? '#fff' : '#000';

  return (
    <Box sx={{ width: '100%', px: 3, mt: 4 }}>
      <Typography
        variant="h6"
        fontWeight={400}
        fontFamily={FONTS.third}
        color={primaryTextColor}
        sx={{ mb: 1, ml: 1 }}
      >
        Profile
      </Typography>

      <Tabs
        value={tabIndex}
        onChange={handleTabChange}
        aria-label="Profile Tabs"
        TabIndicatorProps={{
          style: {
            backgroundColor: '#fff',
            height: '2px',
            borderRadius: '1px',
          },
        }}
        sx={{
          minHeight: 36,
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          mb: 1,
          '& .MuiTabs-flexContainer': {
            gap: '8px',
            justifyContent: 'flex-start',
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            fontFamily: FONTS.third,
            fontWeight: 500,
            fontSize: '0.8rem',
            color: tabTextColor,
            minHeight: 30,
            paddingX: 1.5,
            paddingY: 0.5,
            minWidth: 'auto',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          },
          '& .Mui-selected': {
            color: activeTabColor,
          },
        }}
      >
        <Tab label="User" />
        <Tab label="Security" />
        <Tab label="User API keys" />
      </Tabs>

      <Divider sx={{ bgcolor: mode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)' }} />

      <TabPanel value={tabIndex} index={0}>
        <User />
      </TabPanel>
      <TabPanel value={tabIndex} index={1}>
        <Security />
      </TabPanel>
      <TabPanel value={tabIndex} index={2}>
        <ApiKey />
      </TabPanel>
    </Box>
  );
};

export default Profile;
