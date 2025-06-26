import React from 'react';
import { styles } from './Styles';
import { useCaseData } from './data';
import { Box, Tabs, Tab } from '@mui/material';
import type { CardCategoryProps } from './types/type';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const CategoryTabs: React.FC<CardCategoryProps> = ({ activeTab, handleChange, mode }) => {
    const allCategories = [{ category: 'All', icon: <AutoAwesomeIcon fontSize="small" /> }, ...useCaseData];

    return (
        <Box sx={styles(mode).tabsCon}>
            <Tabs
                value={activeTab}
                scrollButtons="auto"
                variant="scrollable"
                onChange={handleChange}
                sx={styles(mode).tabsS}
                allowScrollButtonsMobile
            >
                {allCategories.map((tab, index) => (
                    <Tab
                        key={index}
                        sx={styles(mode).tabS}
                        label={tab.category.split(' & ')[0]}
                    />
                ))}
            </Tabs>
        </Box>
    );
};

export default CategoryTabs;