import React, { useEffect } from 'react';
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
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import darkLogo from "../assets/dark_corethink.png";
import lightLogo from "../assets/light_corethink.png";
import InsightsIcon from '@mui/icons-material/Insights';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import { motion, type Transition, type Variants } from 'framer-motion';

interface HeroBannerProps {
    mode: boolean;
    toggleMode: () => void;
}

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.2
        }
    }
};

const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10
        } as Transition
    }
};

const slideInLeft: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        } as Transition
    }
};

const slideInRight: Variants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5
        } as Transition
    }
};

const HeroBanner: React.FC<HeroBannerProps> = ({ mode, toggleMode }) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    useEffect(() => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function (this: HTMLAnchorElement, e: Event) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                if (targetId) {
                    const targetElement = document.querySelector(targetId);
                    if (targetElement) {
                        targetElement.scrollIntoView({
                            behavior: "smooth"
                        });
                    }
                }
            });
        });
    }, []);

    return (
        <Box component="section" sx={styles(mode).mainSection}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters sx={styles(mode).tool}>
                        {/* Left: Logo with animation */}
                        <Box sx={{ flexGrow: { xs: 1, md: 0 } }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={slideInLeft}
                                transition={{ delay: 0.2 }}
                            >
                                <Link to="/" style={{ display: 'flex', alignItems: 'center' }}>
                                    <Box
                                        component="img"
                                        src={mode ? lightLogo : darkLogo}
                                        alt="CoreThink logo"
                                        sx={styles(mode).logoImage}
                                    />
                                </Link>
                            </motion.div>
                        </Box>

                        {/* Center Nav Items (Desktop only) */}
                        <Box sx={styles(mode).navItems}>
                            {navs.map((nav, index) => (
                                <motion.div
                                    key={nav.label}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.3 + index * 0.1
                                    }}
                                >
                                    <a href={nav.path} style={{ textDecoration: 'none' }}>
                                        <Typography variant="body1" sx={styles(mode).navItem}>
                                            {nav.label}
                                        </Typography>
                                    </a>
                                </motion.div>
                            ))}
                        </Box>

                        {/* Right: Sign In and Theme Toggle (Desktop only) */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 2 }}>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={slideInRight}
                                transition={{ delay: 0.3 }}
                            >
                                <IconButton onClick={toggleMode} sx={styles(mode).themeToggle}>
                                    {mode ? <Brightness7Icon /> : <DarkModeIcon />}
                                </IconButton>
                            </motion.div>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={slideInRight}
                                transition={{ delay: 0.4 }}
                            >
                                <Button
                                    to="/signin"
                                    component={Link}
                                    variant="outlined"
                                    sx={styles(mode).account}
                                    endIcon={<InsightsIcon sx={styles(mode).accountIcon} />}
                                >
                                    Sign in
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Mobile Menu Icon and Menu */}
                        <Box sx={styles(mode).menuContainer}>
                            <Box sx={styles(mode).mobileThemeToggle}>
                                <IconButton onClick={toggleMode} sx={styles(mode).themeToggle}>
                                    {mode ? <Brightness7Icon /> : <DarkModeIcon />}
                                </IconButton>
                            </Box>
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={slideInRight}
                                transition={{ delay: 0.4 }}
                            >
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    onClick={handleOpenNavMenu}
                                    sx={styles(mode).menuButton}
                                >
                                    <MenuIcon sx={styles(mode).menuIcon} />
                                </IconButton>
                            </motion.div>
                            <Menu
                                anchorEl={anchorElNav}
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={styles(mode).menu}
                            >
                                {navs.map((nav) => (
                                    <MenuItem key={nav.label} onClick={handleCloseNavMenu}>
                                        <a href={nav.path} style={{ textDecoration: 'none' }}>
                                            <Typography sx={styles(mode).menuTypo} textAlign="center">
                                                {nav.label}
                                            </Typography>
                                        </a>
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={handleCloseNavMenu} sx={styles(mode).menuSignInItem}>
                                    <Typography to="/signin" component={Link} sx={styles(mode).menuTypo} textAlign="center">
                                        Sign In
                                    </Typography>
                                    <InsightsIcon sx={styles(mode).menuSignInIcon} />
                                </MenuItem>
                            </Menu>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>

            {/* Hero Text with animations */}
            <Container maxWidth="lg" sx={styles(mode).heroContext}>
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <Box sx={styles(mode).heroContent}>
                        {/* Welcome section */}
                        <motion.div variants={itemVariants}>
                            <Box sx={styles(mode).welcomeCon}>
                                <Typography sx={styles(mode).welcomeTypo}>
                                    Welcome to corethink.ai
                                    <AutoAwesomeIcon sx={styles(mode).welcomeIcon} />
                                </Typography>
                            </Box>
                        </motion.div>

                        {/* Main headline */}
                        <motion.div variants={itemVariants}>
                            <Typography variant="h2" component="h1" sx={styles(mode).mainTypo}>
                                Built for <motion.span
                                    style={{ color: mode ? "#B6A2F5" : "#6e4cff" }}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Deep Reasoning.
                                </motion.span> Deployed Across Industries.
                            </Typography>
                        </motion.div>

                        {/* Subtitle */}
                        <motion.div variants={itemVariants}>
                            <Typography variant="h6" component="p" sx={styles(mode).subtitle}>
                                CoreThink powers explainable, multi-step AI workflows—from diagnostics to supply chains. Below are just a few ways enterprises are using CoreThink to replace brittle heuristics with scalable logic.
                            </Typography>
                        </motion.div>

                        {/* Call to Action Buttons */}
                        <Box sx={styles(mode).bottomButtons}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button to="/signin" component={Link} variant="contained" sx={styles(mode).leftButton}>
                                    Get Started <ArrowOutwardIcon sx={styles(mode).buttonIcon} />
                                </Button>
                            </motion.div>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button variant="outlined" sx={styles(mode).rightButton}>
                                    Learn More
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default HeroBanner;