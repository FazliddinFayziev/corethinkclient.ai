import React, { useState } from 'react';
import { useCaseData } from './data';
import { FONTS } from '../../styles/GlobalStyles';
import { motion, AnimatePresence } from 'framer-motion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box, Typography, Tabs, Tab, Card, CardContent, alpha, Button } from '@mui/material';

interface UseCaseCardProps {
  item: {
    title: string;
    desc: string;
    image: string;
  };
  icon: React.ReactNode;
  mode: boolean;
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ item, icon, mode }) => {
  return (
    <Card
      component={motion.div}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.4 }}
      sx={{
        borderRadius: 3,
        background: mode ? '#1A1C33' : '#F8F7FC',
        color: mode ? '#FFFFFF' : '#0A0C21',
        height: '100%',
        transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
        boxShadow: mode 
          ? '0 4px 20px rgba(0, 0, 0, 0.2)' 
          : '0 4px 20px rgba(182, 162, 245, 0.1)',
        border: mode 
          ? '1px solid rgba(255, 255, 255, 0.06)' 
          : '1px solid rgba(10, 12, 33, 0.06)',
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: mode 
            ? '0 12px 32px rgba(123, 79, 255, 0.25)' 
            : '0 12px 32px rgba(182, 162, 245, 0.25)',
          borderColor: mode 
            ? alpha('#7B4FFF', 0.3) 
            : alpha('#B6A2F5', 0.2),
        },
      }}
    >
      <CardContent
        sx={{
          p: 3,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: mode 
              ? alpha('#7B4FFF', 0.1) 
              : alpha('#B6A2F5', 0.1),
            color: mode ? '#7B4FFF' : '#B6A2F5',
          }}
        >
          {icon}
        </Box>

        <Typography
          variant="h5"
          component="h3"
          sx={{
            fontWeight: 700,
            mb: 1.5,
            fontSize: '1.1rem',
            fontFamily: FONTS.primary,
            color: mode ? '#FFFFFF' : '#0A0C21',
          }}
        >
          {item.title}
        </Typography>

        <Typography
          variant="body1"
          sx={{
            lineHeight: 1.5,
            mb: 2,
            flexGrow: 1,
            fontSize: '0.9rem',
            color: mode ? '#D3D3D3' : '#4A4B5E',
            fontFamily: FONTS.secodary,
          }}
        >
          {item.desc}
        </Typography>
        
        <Box
          sx={{
            mt: 'auto',
            borderRadius: '12px',
            overflow: 'hidden',
            height: 120,
            position: 'relative',
            '& img': {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.3s ease',
            },
            '&:hover img': {
              transform: 'scale(1.05)',
            }
          }}
        >
          <img 
            src={item.image} 
            alt={item.title}
            loading="lazy"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

const CategoryTabs: React.FC<{
  activeTab: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
  mode: boolean;
}> = ({ activeTab, handleChange, mode }) => {
  const allCategories = [{ category: 'All', icon: <AutoAwesomeIcon fontSize="small" /> }, ...useCaseData];
  
  return (
    <Box sx={{ 
      mb: 6,
      display: 'flex',
      justifyContent: "center",
      width: '100%',
      overflowX: 'auto',
      '&::-webkit-scrollbar': {
        height: '6px',
        backgroundColor: 'transparent',
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '4px',
        backgroundColor: mode 
          ? alpha('#7B4FFF', 0.3) 
          : alpha('#B6A2F5', 0.3),
      },
      py: 1,
    }}>
      <Tabs
        value={activeTab}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        allowScrollButtonsMobile
        sx={{
          minWidth: 'max-content',
          '& .MuiTabs-indicator': {
            display: 'none'
          },
          '& .MuiTabs-scroller': {
            overflow: 'visible !important',
          },
          '& .MuiTabScrollButton-root': {
            color: mode ? '#FFFFFF' : '#0A0C21',
            opacity: 0.7,
            '&.Mui-disabled': {
              opacity: 0.3
            }
          }
        }}
      >
        {allCategories.map((tab, index) => (
          <Tab 
            key={index} 
            label={tab.category.split(' & ')[0]} 
            sx={{
              color: mode ? '#AAAAAA' : '#888888',
              opacity: 0.9,
              fontSize: '0.85rem',
              fontWeight: 500,
              textTransform: 'none',
              letterSpacing: '0.3px',
              px: 3,
              py: 1,
              mx: 1,
              borderRadius: 50,
              fontFamily: FONTS.primary,
              minHeight: 'auto',
              minWidth: 'unset',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              '&.Mui-selected': {
                color: mode ? '#FFFFFF' : '#0A0C21',
                opacity: 1,
                background: mode 
                  ? alpha('#7B4FFF', 0.1) 
                  : alpha('#B6A2F5', 0.1),
                border: mode 
                  ? `1px solid ${alpha('#7B4FFF', 0.3)}` 
                  : `1px solid ${alpha('#B6A2F5', 0.3)}`,
                fontWeight: 600,
                boxShadow: mode 
                  ? '0 2px 8px rgba(123, 79, 255, 0.1)' 
                  : '0 2px 8px rgba(182, 162, 245, 0.1)'
              },
              '&:hover': {
                color: mode ? '#7B4FFF' : '#B6A2F5',
                opacity: 1,
                background: mode 
                  ? alpha('#7B4FFF', 0.05) 
                  : alpha('#B6A2F5', 0.05)
              }
            }}
          />
        ))}
      </Tabs>
    </Box>
  );
};

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
        mb: 2,
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
        Build With CoreThink
        <AutoAwesomeIcon sx={{ 
          fontSize: 18,
          color: mode ? '#7B4FFF' : '#B6A2F5' 
        }} />
      </Typography>
    </Box>
  );
};

interface UseCasesProps {
  mode: boolean;
}

const UseCases: React.FC<UseCasesProps> = ({ mode }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [showAllCategories, setShowAllCategories] = useState(false);
  
  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setActiveTab(newValue);
    // Reset explore more when switching tabs
    if (newValue === 0) {
      setShowAllCategories(false);
    }
  };

  // Combine all cases for the "All" tab
  const allCases = useCaseData.flatMap(category => category.cases);
  const allCategories = [{ category: 'All', icon: <AutoAwesomeIcon fontSize="small" />, cases: allCases }, ...useCaseData];
  
  // Determine which cases to display based on active tab and explore more state
  const getDisplayCases = () => {
    if (activeTab === 0) { // All tab
      return allCases;
    } else {
      return allCategories[activeTab].cases;
    }
  };

  // For All tab, we'll show 2 categories initially, then all when expanded
  const getDisplayCategories = () => {
    if (activeTab !== 0) return [];
    
    return showAllCategories 
      ? useCaseData 
      : useCaseData.slice(0, 2);
  };

  return (
    <Box sx={{
      px: { xs: 2, md: 8 },
      py: 4,
      backgroundColor: mode ? '#0A0C21' : '#f5f5f5',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Animated background elements */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: mode 
            ? 'radial-gradient(circle at 70% 30%, #7B4FFF 0%, transparent 50%)' 
            : 'radial-gradient(circle at 70% 30%, #B6A2F5 0%, transparent 50%)',
          zIndex: 0
        }}
      />
      
      <Box sx={{ 
        maxWidth: 1200, 
        mx: 'auto', 
        position: 'relative', 
        zIndex: 2 
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <HeaderBadge mode={mode} />
        </Box>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={{
            fontFamily: FONTS.primary,
            fontWeight: 500,
            textAlign: 'center',
            fontSize: {
              xs: '2.2rem',
              sm: '2.8rem',
              md: '3.8rem',
              lg: '4.5rem',
            },
            color: mode ? '#FFFFFF' : '#333',
            mb: 3,
          }}>
            <span style={{ color: mode ? "#B6A2F5" : "#7B4FFF" }}>
              Explore use cases
            </span> from our official collection.
          </Typography>

          <div id='Solutions' />
          <Typography 
            variant="body1" 
            textAlign="center" 
            mb={4} 
            sx={{
              opacity: 0.8,
              fontSize: '1.1rem',
              maxWidth: 700,
              mx: 'auto',
              color: mode ? '#D3D3D3' : '#4A4B5E',
              fontFamily: FONTS.primary,
            }}
          >
            See how CoreThink enhances model responses through real-time reasoning transformations — step by step.
          </Typography>
        </motion.div>

        <Box sx={{ 
          px: { xs: 3, md: 6, lg: 8 },
          py: { xs: 6, md: 8 },
          position: 'relative',
          overflow: 'hidden'
        }}>
          <Box 
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 0.8 }}
            sx={{
              position: 'absolute',
              top: -100,
              right: -100,
              width: 400,
              height: 400,
              borderRadius: '50%',
              background: mode 
                ? alpha('#7B4FFF', 0.05) 
                : alpha('#B6A2F5', 0.05),
              zIndex: 0
            }} 
          />
          
          <Box sx={{ 
            maxWidth: 1400,
            mx: 'auto',
            position: 'relative',
            zIndex: 1
          }}>
            <CategoryTabs 
              activeTab={activeTab} 
              handleChange={handleChange} 
              mode={mode} 
            />

            {/* Display all cases when a specific category is selected */}
            {activeTab !== 0 && (
              <Box
                sx={{
                  display: 'grid',
                  gridTemplateColumns: {
                    xs: 'repeat(1, 1fr)',
                    sm: 'repeat(2, 1fr)',
                    md: 'repeat(3, 1fr)',
                  },
                  gap: 3,
                }}
              >
                <AnimatePresence mode="wait">
                  {getDisplayCases().map((item, index) => (
                    <UseCaseCard 
                      key={`${activeTab}-${index}`} 
                      item={item} 
                      icon={allCategories[activeTab].icon} 
                      mode={mode}
                    />
                  ))}
                </AnimatePresence>
              </Box>
            )}

            {/* Display categories when "All" tab is selected */}
            {activeTab === 0 && (
              <>
                {getDisplayCategories().map((category, catIndex) => (
                  <Box key={catIndex} sx={{ mb: 6 }}>
                    <Box
                      sx={{
                        display: 'grid',
                        gridTemplateColumns: {
                          xs: 'repeat(1, 1fr)',
                          sm: 'repeat(2, 1fr)',
                          md: 'repeat(3, 1fr)',
                        },
                        gap: 3,
                      }}
                    >
                      {category.cases.map((item, index) => (
                        <UseCaseCard 
                          key={`${catIndex}-${index}`} 
                          item={item} 
                          icon={category.icon} 
                          mode={mode}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}

                {!showAllCategories && useCaseData.length > 2 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => setShowAllCategories(true)}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 50,
                        borderColor: mode ? '#7B4FFF' : '#B6A2F5',
                        color: mode ? '#7B4FFF' : '#B6A2F5',
                        textTransform: 'none',
                        fontFamily: FONTS.primary,
                        fontWeight: 500,
                        '&:hover': {
                          borderColor: mode ? '#7B4FFF' : '#B6A2F5',
                          backgroundColor: mode 
                            ? alpha('#7B4FFF', 0.08) 
                            : alpha('#B6A2F5', 0.08),
                        }
                      }}
                      endIcon={<ExpandMoreIcon />}
                    >
                      Explore More Categories
                    </Button>
                  </Box>
                )}

                {showAllCategories && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                      variant="outlined"
                      onClick={() => setShowAllCategories(false)}
                      sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: 50,
                        borderColor: mode ? '#7B4FFF' : '#B6A2F5',
                        color: mode ? '#7B4FFF' : '#B6A2F5',
                        textTransform: 'none',
                        fontFamily: FONTS.primary,
                        fontWeight: 500,
                        '&:hover': {
                          borderColor: mode ? '#7B4FFF' : '#B6A2F5',
                          backgroundColor: mode 
                            ? alpha('#7B4FFF', 0.08) 
                            : alpha('#B6A2F5', 0.08),
                        }
                      }}
                      endIcon={<ExpandLessIcon />}
                    >
                      Show Less Categories
                    </Button>
                  </Box>
                )}
              </>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UseCases;