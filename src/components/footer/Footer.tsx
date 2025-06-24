import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
    Box, 
    Container, 
    Typography, 
    IconButton, 
    Link as MuiLink,
    Divider,
    Button,
    useTheme,
    useMediaQuery
} from '@mui/material';
import { styles } from './Styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import DescriptionIcon from '@mui/icons-material/Description';

interface FooterProps {
    mode: boolean;
}

const Footer: React.FC<FooterProps> = ({ mode }) => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));
    
    const footerVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                staggerChildren: 0.15,
                when: "beforeChildren"
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { 
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    const handleEmailClick = () => window.location.href = 'mailto:contact@corethink.ai';

    const navigationLinks = [
        { label: "Company", path: "#Company" },
        { label: "Solutions", path: "#Solutions" },
        { label: "Documentation", path: "/documentation" }
    ];

    const resourceLinks = [
        { label: "API Reference", path: "/api" },
        { label: "Tutorials", path: "/tutorials" },
        { label: "Case Studies", path: "/case-studies" },
        { label: "Support", path: "#", action: handleEmailClick }
    ];

    const socialLinks = [
        { icon: <GitHubIcon />, url: "https://github.com/corethink" },
        { icon: <TwitterIcon />, url: "https://twitter.com/corethinkai" },
        { icon: <LinkedInIcon />, url: "https://linkedin.com/company/corethink" },
        { icon: <EmailIcon />, action: handleEmailClick }
    ];

    const renderLink = (link: { path: string; label: string; action?: () => void }) => {
        if (link.path.startsWith('#')) {
            return (
                <a 
                    href={link.path} 
                    style={{ textDecoration: 'none' }}
                    onClick={(e) => {
                        if (link.action) {
                            e.preventDefault();
                            link.action();
                        }
                    }}
                >
                    <Typography component="span" sx={styles(mode).footerLink}>
                        {link.label}
                    </Typography>
                </a>
            );
        }
        return (
            <MuiLink
                component={Link}
                to={link.path}
                underline="none"
                sx={styles(mode).footerLink}
            >
                {link.label}
            </MuiLink>
        );
    };

    return (
        <Box component="footer" sx={styles(mode).footer}>
            <Box sx={styles(mode).backgroundGradient} />
            
            {!isMobile && (
                <>
                    <Box sx={styles(mode).decorativeDot1} />
                    <Box sx={styles(mode).decorativeDot2} />
                </>
            )}

            <Container maxWidth="xl" sx={styles(mode).footerContainer}>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                    variants={footerVariants}
                >
                    <Box sx={styles(mode).columnsContainer}>
                        {/* Brand Column */}
                        <Box sx={styles(mode).brandColumn}>
                            <motion.div variants={itemVariants}>
                                <Link to="/" style={{ textDecoration: 'none' }}>
                                    <Typography variant="h5" sx={styles(mode).brandText}>
                                        CoreThink.ai
                                        <AutoAwesomeIcon sx={styles(mode).brandIcon} />
                                    </Typography>
                                </Link>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Typography variant="body2" sx={styles(mode).footerText}>
                                    Advanced reasoning infrastructure for enterprise AI applications.
                                </Typography>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Button
                                    variant="outlined"
                                    endIcon={<ArrowOutwardIcon />}
                                    onClick={handleEmailClick}
                                    sx={styles(mode).contactButton}
                                >
                                    Contact Us
                                </Button>
                            </motion.div>
                        </Box>

                        {/* Navigation Column */}
                        <Box sx={styles(mode).navColumn}>
                            <motion.div variants={itemVariants}>
                                <Typography variant="subtitle1" sx={styles(mode).footerHeading}>
                                    Navigation
                                </Typography>
                            </motion.div>
                            
                            {navigationLinks.map((link, index) => (
                                <motion.div 
                                    key={index} 
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {renderLink(link)}
                                </motion.div>
                            ))}
                        </Box>

                        {/* Resources Column */}
                        <Box sx={styles(mode).navColumn}>
                            <motion.div variants={itemVariants}>
                                <Typography variant="subtitle1" sx={styles(mode).footerHeading}>
                                    Resources
                                </Typography>
                            </motion.div>
                            
                            {resourceLinks.map((link, index) => (
                                <motion.div 
                                    key={index} 
                                    variants={itemVariants}
                                    whileHover={{ x: 5 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {renderLink(link)}
                                </motion.div>
                            ))}
                        </Box>

                        {/* Connect Column */}
                        <Box sx={styles(mode).connectColumn}>
                            <motion.div variants={itemVariants}>
                                <Typography variant="subtitle1" sx={styles(mode).footerHeading}>
                                    Connect With Us
                                </Typography>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Box sx={styles(mode).socialContainer}>
                                    {socialLinks.map((social, index) => (
                                        <motion.div
                                            key={index}
                                            whileHover={{ y: -4, scale: 1.1 }}
                                            whileTap={{ scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <IconButton
                                                href={`${social.url}`}
                                                onClick={social.action}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={styles(mode).footerIcon}
                                                aria-label={social.url ? social.url.split('.com/')[1] : 'Email'}
                                            >
                                                {social.icon}
                                            </IconButton>
                                        </motion.div>
                                    ))}
                                </Box>
                            </motion.div>
                            
                            <motion.div variants={itemVariants}>
                                <Button
                                    variant="contained"
                                    startIcon={<DescriptionIcon />}
                                    sx={styles(mode).docsButton}
                                    onClick={() => window.open('/documentation', '_blank')}
                                    fullWidth={isMobile}
                                >
                                    View Documentation
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </motion.div>
            </Container>

            {/* Divider and Copyright */}
            <Container maxWidth="xl">
                <motion.div variants={itemVariants}>
                    <Divider sx={styles(mode).divider} />
                    <Box sx={styles(mode).copyrightContainer}>
                        <Typography variant="body2" sx={styles(mode).copyright}>
                            © {new Date().getFullYear()} CoreThink AI, Inc. All rights reserved.
                        </Typography>
                        <Box sx={styles(mode).legalLinks}>
                            <MuiLink href="#" underline="hover" sx={styles(mode).legalLink}>
                                Privacy Policy
                            </MuiLink>
                            <MuiLink href="#" underline="hover" sx={styles(mode).legalLink}>
                                Terms of Service
                            </MuiLink>
                            <MuiLink href="#" underline="hover" sx={styles(mode).legalLink}>
                                Cookies
                            </MuiLink>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Footer;