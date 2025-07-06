import React from 'react';
import { p_styles } from './Styles';
import {
  MoreVert,
  CompareArrows,
  Chat
} from '@mui/icons-material';
import {
  Box,
  Typography,
  IconButton,
  MenuItem,
  Tooltip,
  Button,
  Menu
} from '@mui/material';

interface TopNavProp {
  anchorEl: any;
  mode: boolean;
  handleMenuOpen: any;
  handleMenuClose: any;
  compareMode: boolean;
  toggleCompare: () => void;
}

const TopNav: React.FC<TopNavProp> = ({
  mode,
  anchorEl,
  compareMode,
  toggleCompare,
  handleMenuOpen,
  handleMenuClose,
}) => {
  const styles = p_styles(mode);

  return (
    <Box sx={styles.topNavS}>
      <Box sx={styles.navTitleBox}>
        {compareMode ? (
          <CompareArrows sx={styles.navTypoIcon} />
        ) : (
          <Chat sx={styles.navTypoIcon} />
        )}
        <Typography sx={styles.navTitle}>
          {compareMode ? 'Compare Prompts' : 'Chat Playground'}
        </Typography>
      </Box>

      <Box sx={styles.navRightBox}>
        <Tooltip title="Compare">
          <IconButton onClick={toggleCompare} sx={styles.navIconButton}>
            <CompareArrows
              fontSize="small"
              sx={{
                color: compareMode ? '#4E3C91' : styles.iconColor?.color,
              }}
            />
          </IconButton>
        </Tooltip>

        <Button variant="contained" sx={styles.saveS}>
          Save
        </Button>

        <IconButton onClick={handleMenuOpen} sx={styles.navIconButton}>
          <MoreVert />
        </IconButton>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          PaperProps={styles.navMenuS}
        >
          <MenuItem onClick={handleMenuClose} sx={styles.menuItemS}>
            Optimize
          </MenuItem>
          <MenuItem onClick={handleMenuClose} sx={styles.menuItemS}>
            Evaluate
          </MenuItem>
        </Menu>
      </Box>
    </Box>
  );
};

export default TopNav;
