import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import { FONTS } from '../../styles/GlobalStyles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import GroupsIcon from '@mui/icons-material/Groups';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import companyImage from "../assets/company.png";

const HeaderBadge: React.FC<{ mode: boolean }> = ({ mode }) => {
  return (
    <Box 
      component={motion.div}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        px: 2,
        py: 1,
        borderRadius: '50px',
        backdropFilter: 'blur(10px)',
        backgroundColor: mode 
          ? 'rgba(255, 255, 255, 0.1)' 
          : 'rgba(10, 12, 33, 0.1)',
        border: mode 
          ? '1px solid rgba(255, 255, 255, 0.2)' 
          : '1px solid rgba(10, 12, 33, 0.2)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        display: 'inline-block',
        cursor: 'default',
        mb: 4,
      }}
    >
      <Typography sx={{
        fontWeight: 400,
        fontSize: '0.8rem',
        color: mode ? '#FFFFFF' : '#0A0C21',
        fontFamily: FONTS.primary,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 0.5,
      }}>
        Our Company
        <AutoAwesomeIcon sx={{ 
          fontSize: 18,
          color: mode ? '#7B4FFF' : '#B6A2F5' 
        }} />
      </Typography>
    </Box>
  );
};

interface CompanyProps {
  mode: boolean; 
}

const Company: React.FC<CompanyProps> = ({ mode }) => {
  const companyValues = [
    {
      icon: <AutoAwesomeIcon fontSize="large" />,
      title: "Our Mission",
      description: "Transform how enterprises reason over complex data with transparent AI systems"
    },
    {
      icon: <GroupsIcon fontSize="large" />,
      title: "Our Approach",
      description: "Collaborative development of customizable, multi-step AI workflows"
    },
    {
      icon: <VisibilityIcon fontSize="large" />,
      title: "Transparency",
      description: "Every decision step is visible, editable, and accountable"
    },
    {
      icon: <AccountTreeIcon fontSize="large" />,
      title: "Technology",
      description: "Structured reasoning that goes beyond black-box AI models"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6
      }
    })
  };

  // Colors based on mode
  const colors = {
    textPrimary: mode ? '#FFFFFF' : '#0A0C21',
    textSecondary: mode ? '#D3D3D3' : '#4A4B5E',
    accent: mode ? '#7B4FFF' : '#B6A2F5',
    accentLight: mode ? 'rgba(123, 79, 255, 0.1)' : 'rgba(182, 162, 245, 0.1)',
    border: mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(10, 12, 33, 0.1)'
  };

  return (
    <Box sx={{
      px: { xs: 3, sm: 6, md: 8 },
      py: { xs: 8, md: 10 },
      backgroundColor: mode ? '#0A0C21' : '#f5f5f5',
      position: 'relative',
      overflow: 'hidden'
    }}>

      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <HeaderBadge mode={mode} />
        </Box>
      
      <Box sx={{ 
        maxWidth: 1400, 
        mx: 'auto', 
        position: 'relative',
        zIndex: 1 
      }}>
        {/* Content Row */}
        <Box sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: 4, md: 6 },
          mb: { xs: 6, md: 8 }
        }}>
          {/* Text Content */}
          <Box sx={{ 
            flex: 1,
            minWidth: 0 // Prevent flex item overflow
          }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div id='Company' />
              <Typography variant="h2" sx={{
                fontFamily: FONTS.primary,
                fontWeight: 500,
                fontSize: {
                  xs: '2rem',
                  sm: '2.5rem',
                  md: '3rem'
                },
                color: mode ? "#FFF" : "#333",
                mb: 2,
              }}>
                Who We Are
              </Typography>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Typography variant="body1" sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: colors.textSecondary,
                mb: 3,
                fontFamily: FONTS.secodary,
                textAlign: 'justify',
              }}>
                CoreThink is a deep-tech AI company focused on transforming how enterprises reason over complex data. 
                We help organizations build transparent, multi-step decision systems that go beyond black-box AI — 
                unlocking scalable logic, explainability, and trust.
              </Typography>

              <Typography variant="body1" sx={{
                fontSize: { xs: '1rem', md: '1.1rem' },
                lineHeight: 1.7,
                color: colors.textSecondary,
                fontFamily: FONTS.secodary,
                textAlign: 'justify',
              }}>
                We believe brittle heuristics and opaque AI models are holding back real-world deployment. 
                Our platform enables structured, auditable, and customizable AI workflows — where each 
                decision step is visible, editable, and accountable.
              </Typography>
            </motion.div>
          </Box>

          {/* Image - Desktop Only */}
          <Box sx={{ 
            flex: 1,
            display: { xs: 'none', md: 'flex' },
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <Box sx={{
                width: '100%',
                maxWidth: 400,
                borderRadius: '12px',
                overflow: 'hidden'
              }}>
                <img 
                  src={companyImage} 
                  alt="CoreThink team working" 
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
              </Box>
            </motion.div>
          </Box>
        </Box>

        {/* Values Cards - Now in one row with equal sizes */}
        <Box sx={{
  display: 'grid',
  gridTemplateColumns: {
    xs: '1fr',
    sm: 'repeat(2, 1fr)',
    md: 'repeat(4, 1fr)'
  },
  gap: { xs: 4, sm: 3, md: 3 }, 
  rowGap: { xs: 10, sm: 8, md: 3 },
  width: '100%',
}}>
  {companyValues.map((value, index) => (
    <motion.div
      key={index}
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      custom={index}
      style={{ height: '100%' }}
    >
      <Box sx={{
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '12px',
        background: mode
          ? 'rgba(255, 255, 255, 0.03)'
          : 'rgba(10, 12, 33, 0.03)',
        border: `1px solid ${colors.border}`,
        mb: { xs: 4, sm: 0 } 
      }}>
        <Box sx={{
          width: 50,
          height: 50,
          mb: 3,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '12px',
          background: colors.accentLight,
          color: colors.accent
        }}>
          {value.icon}
        </Box>
        <Typography variant="h5" sx={{
          fontWeight: 600,
          mb: 1.5,
          color: colors.textPrimary,
          fontFamily: FONTS.primary,
          fontSize: '1.2rem'
        }}>
          {value.title}
        </Typography>
        <Typography variant="body2" sx={{
          color: colors.textSecondary,
          lineHeight: 1.6,
          fontFamily: FONTS.secodary
        }}>
          {value.description}
        </Typography>
      </Box>
    </motion.div>
  ))}
</Box>
      </Box>
    </Box>
  );
};

export default Company;