import React, { useState } from 'react';
import { styles } from './Styles';
import { useCaseData } from './data';
import UseCaseCard from './UseCaseCard';
import HeaderBadge from './HeaderBadge';
import CategoryTabs from './CategoryTabs';
import { motion, AnimatePresence } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

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
    <Box sx={styles(mode).useCaseCon}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.03 }}
        transition={{ duration: 1 }}
        sx={styles(mode).animationBox}
      />

      <Box sx={styles(mode).useCaseMainBox}>
        <Box sx={styles(mode).topBox}>
          <HeaderBadge mode={mode} />
        </Box>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography variant="h2" sx={styles(mode).useCasesContext}>
            <span style={{ color: mode ? "#B6A2F5" : "#7B4FFF" }}>
              Explore use cases
            </span> from our official collection.
          </Typography>

          <div id='Solutions' />
          <Typography
            mb={4}
            variant="body1"
            textAlign="center"
            sx={styles(mode).useCaseText}
          >
            See how CoreThink enhances model responses through real-time reasoning
            transformations — step by step.
          </Typography>
        </motion.div>

        <Box sx={styles(mode).cardsCon}>
          <Box
            component={motion.div}
            sx={styles(mode).cardsBox}
            transition={{ duration: 0.8 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
          />

          <Box sx={styles(mode).categotyTabsCon}>
            <CategoryTabs
              mode={mode}
              activeTab={activeTab}
              handleChange={handleChange}
            />

            {/* Display all cases when a specific category is selected */}

            {activeTab !== 0 && (
              <Box sx={styles(mode).gridS}>
                <AnimatePresence mode="wait">
                  {getDisplayCases().map((item, index) => (
                    <UseCaseCard
                      item={item}
                      mode={mode}
                      key={`${activeTab}-${index}`}
                      icon={allCategories[activeTab].icon}
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
                    <Box sx={styles(mode).gridS}>
                      {category.cases.map((item, index) => (
                        <UseCaseCard
                          item={item}
                          mode={mode}
                          icon={category.icon}
                          key={`${catIndex}-${index}`}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}

                {!showAllCategories && useCaseData.length > 2 && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                      variant="outlined"
                      endIcon={<ExpandMoreIcon />}
                      sx={styles(mode).exploreMore}
                      onClick={() => setShowAllCategories(true)}
                    >
                      Explore More Categories
                    </Button>
                  </Box>
                )}

                {showAllCategories && (
                  <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Button
                      variant="outlined"
                      sx={styles(mode).showLess}
                      endIcon={<ExpandLessIcon />}
                      onClick={() => setShowAllCategories(false)}
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