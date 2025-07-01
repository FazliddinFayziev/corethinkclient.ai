import React from 'react';
import { p_styles } from './Styles';
import { MoreVert, CompareArrows, Chat } from '@mui/icons-material'; 
import { Box, Typography, IconButton, MenuItem, Tooltip, Button, Menu } from '@mui/material';

interface TopNavProp {
    anchorEl: any;
    mode: boolean;
    handleMenuOpen: any;
    compareMode: boolean;
    toggleCompare: () => void;
    handleMenuClose: () => void;
};

const getIconColor = (mode: boolean): string => mode ? '#AAAABB' : '#888888';

const TopNav: React.FC<TopNavProp> = ({
    mode,
    anchorEl,
    compareMode,
    toggleCompare,
    handleMenuOpen,
    handleMenuClose,
}) => {
    return (
        <Box sx={p_styles(mode).topNavS}>
            <Box sx={p_styles(mode).navTitleBox}>
                {compareMode ? (<CompareArrows sx={p_styles(mode).navTypoIcon} />) : (
                    <Chat sx={p_styles(mode).navTypoIcon} />
                )}
                <Typography sx={p_styles(mode).navTitle}>
                    {compareMode ? "Compare Prompts" : "Chat Playground"}
                </Typography>
            </Box>
            <Box sx={p_styles(mode).navRightBox}>
                <Tooltip title="Compare">
                    <IconButton onClick={toggleCompare} sx={{ color: getIconColor(mode) }}>
                        <CompareArrows sx={{ color: compareMode ? '#4E3C91' : getIconColor(mode) }} fontSize="small" />
                    </IconButton>
                </Tooltip>
                <Button variant="contained" sx={p_styles(mode).saveS}>Save</Button>
                <IconButton onClick={handleMenuOpen} sx={{ color: getIconColor(mode) }}>
                    <MoreVert />
                </IconButton>
                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={p_styles(mode).navMenuS}
                >
                    <MenuItem onClick={handleMenuClose} sx={p_styles(mode).menuItemS}>Optimize</MenuItem>
                    <MenuItem onClick={handleMenuClose} sx={p_styles(mode).menuItemS}>Evaluate</MenuItem>
                </Menu>
            </Box>
        </Box>
    );
};

export default TopNav;