import React, { useState } from 'react';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark, atomOneLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {
    Box,
    Tab,
    Card,
    Tabs,
    Stack,
    Button,
    IconButton,
    Typography,
    CardContent,
} from '@mui/material';
import { styles } from './Styles';
import { motion } from 'framer-motion';
import KeyIcon from '@mui/icons-material/Key';
import { codeExamples, languageMap } from './data';
import SettingsIcon from '@mui/icons-material/Settings';
import { useGlobalContext } from '../../context/context';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const DashboardTab: React.FC = () => {
    const { mode } = useGlobalContext();
    const [tab, setTab] = useState(0);
    const currentLang = ['python', 'typescript', 'curl'][tab];
    const code: any = codeExamples[currentLang];
    const language = languageMap[currentLang];
    
    return (
        <Box
            component={motion.div}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            sx={styles(mode).dashboardContainer}
        >
            <Box sx={styles(mode).contextOneCon}>
                <Typography variant="h5" sx={styles(mode).contextManage}>
                    Manage account
                </Typography>
                <Button startIcon={<SettingsIcon />} sx={styles(mode).buttonOne}>
                    Settings
                </Button>
            </Box>

            <Typography variant="body2" sx={styles(mode).textOne}>
                Quick access to view and manage your account.
            </Typography>

            <Stack
                direction={{ xs: 'column', md: 'row' }}
                spacing={5}
                sx={{ mb: 10 }}
            >
                {/* API Keys Card */}
                <Card elevation={0} sx={styles(mode).cardOneS}>
                    <CardContent sx={{ p: 0 }}>
                        <Typography variant="h6" sx={styles(mode).cardOneContext}>
                            API Keys
                        </Typography>
                        <Typography variant="body2" sx={styles(mode).cardOneText}>
                            Manage your API keys
                        </Typography>

                        <Box sx={styles(mode).apiKeyS}>
                            <Typography variant="body2" sx={styles(mode).apiKeyCopyS}>
                                dgeta•••••67a
                            </Typography>
                            <IconButton sx={styles(mode).copyIcon}>
                                <ContentCopyIcon />
                            </IconButton>
                        </Box>

                        <Button fullWidth sx={styles(mode).managekeys}>
                            <KeyIcon sx={{ mx: 1 }} />
                            Manage Keys
                        </Button>
                    </CardContent>
                </Card>

                {/* Balance Card */}
                <Card elevation={0} sx={styles(mode).cardTwoS}>
                    <CardContent sx={{ p: 0 }}>
                        <Typography variant="h6" sx={styles(mode).cardTwoContext}>
                            Balance
                        </Typography>
                        <Typography variant="body2" sx={styles(mode).cardTwoText}>
                            Your current balance is
                        </Typography>
                        <Typography variant="h3" sx={styles(mode).priceS}>
                            $100.00
                        </Typography>
                        <Typography variant="caption" sx={styles(mode).remainS}>
                            Credits remaining
                        </Typography>

                        <Button fullWidth sx={styles(mode).addCredit}>
                            <AttachMoneyIcon />
                            Add Credits
                        </Button>
                    </CardContent>
                </Card>
            </Stack>

            {/* Developer Quickstart */}
            <Box sx={styles(mode).contextTwoCon}>
                <Typography variant="h5" sx={styles(mode).contextQuick}>
                    Developer Quickstart
                </Typography>
                <Button startIcon={<AutoAwesomeIcon />} sx={styles(mode).buttonTwo}>
                    Quickstart Docs
                </Button>
            </Box>

            <Typography variant="body2" sx={styles(mode).setupS}>
                Set up your environment and make your first API request in minutes.
            </Typography>

            <Tabs
                value={tab}
                sx={styles(mode).tabsS}
                onChange={(_e: React.SyntheticEvent, newValue) => setTab(newValue)}
            >
                <Tab label="Python" sx={styles(mode).tabS} />
                <Tab label="TypeScript" sx={styles(mode).tabS} />
                <Tab label="cURL" sx={styles(mode).tabS} />
            </Tabs>

            <Box sx={styles(mode).codeCon}>
                <IconButton
                    size="small"
                    sx={styles(mode).copyCode}
                    onClick={() => navigator.clipboard.writeText(code)}
                >
                    <ContentCopyIcon />
                </IconButton>

                <SyntaxHighlighter
                    language={language}
                    style={mode ? atomOneDark : atomOneLight}
                    customStyle={styles(mode).codebg}
                >
                    {code}
                </SyntaxHighlighter>
            </Box>
        </Box>
    )
};

export default DashboardTab;