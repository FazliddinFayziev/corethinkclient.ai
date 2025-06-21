import React from 'react';
import {
    Box,
    Menu,
    AppBar,
    Button,
    Toolbar,
    MenuItem,
    Container,
    Typography,
    IconButton,
} from '@mui/material';
import { navs } from './data';
import { styles } from './Styles';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import InsightsIcon from '@mui/icons-material/Insights';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const HeroBanner: React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    return (
        <Box component="section" sx={styles.mainSection}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar sx={styles.tool}>
                    {/* Mobile Menu Icon */}
                    <Box sx={styles.menuContainer}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            onClick={(e) => setAnchorElNav(e.currentTarget)}
                        >
                            <MenuIcon sx={styles.menuIcon} />
                        </IconButton>
                        <Menu
                            anchorEl={anchorElNav}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                            transformOrigin={{ vertical: 'top', horizontal: 'left' }}
                            open={Boolean(anchorElNav)}
                            onClose={() => setAnchorElNav(null)}
                            sx={styles.menu}
                        >
                            {navs.map((nav) => (
                                <MenuItem key={nav.label} onClick={() => setAnchorElNav(null)}>
                                    <Typography sx={styles.menuTypo} textAlign="center">{nav.label}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    {/* Left: Logo */}
                    <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                        <Box
                            component="img"
                            src={logo}
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


                    {/* Center Nav Items (Desktop only) */}
                    <Box sx={styles.navItems}>
                        {navs.map((nav) => (
                            <Typography key={nav.label} variant="body1" sx={styles.navItem}>
                                {nav.label}
                            </Typography>
                        ))}
                    </Box>

                    {/* Right: Sign In */}
                    <Box sx={{ flexGrow: 1 }} />
                    <Button
                        to="/signin"
                        component={Link}
                        variant="outlined"
                        sx={styles.account}
                        endIcon={<InsightsIcon />}
                    >
                        Sign in
                    </Button>
                </Toolbar>
            </AppBar>


            {/* Hero Text */}
            <Container maxWidth="lg" sx={styles.heroContext}>
                <Box>
                    <Box sx={styles.welcomeCon}>
                        <Typography sx={styles.welcomeTypo}>
                            Welcome to corethink.ai
                            <AutoAwesomeIcon sx={styles.welcomeIcon} />
                        </Typography>
                    </Box>

                    <Typography variant="h2" sx={styles.mainTypo}>
                        Built for Deep Reasoning. Deployed Across Industries.
                    </Typography>
                    <Typography variant="h6" sx={styles.subtitle}>
                        CoreThink powers explainable, multi-step AI workflows—from diagnostics to supply chains. Below are just a few ways enterprises are using CoreThink to replace brittle heuristics with scalable logic.
                    </Typography>

                    {/* Call to Action Buttons */}
                    <Box sx={styles.bottomButtons}>
                        <Button variant="contained" sx={styles.leftButton}>
                            Get Started <ArrowOutwardIcon />
                        </Button>
                        <Button variant="outlined" sx={styles.rightButton}>
                            Learn More
                        </Button>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default HeroBanner;
