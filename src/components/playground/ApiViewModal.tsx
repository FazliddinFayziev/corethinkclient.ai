import React, { useState } from 'react';
import { codeExamples } from './data';
import { modalBoxStyle, styles } from './Styles';
import CloseIcon from '@mui/icons-material/Close';
import { useGlobalContext } from '../../context/context';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Box, Typography, Modal, Tabs, Tab, useTheme, useMediaQuery, IconButton } from '@mui/material';

interface ModalProp {
    openModal: boolean;
    setOpenModal: (openModal: boolean) => void;
}

const ApiViewModal: React.FC<ModalProp> = ({ openModal, setOpenModal }) => {
    const { mode } = useGlobalContext();
    const theme = useTheme();
    const [tab, setTab] = useState(0);
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleModal = () => setOpenModal(false);
    const handleTabChange = (_: any, newValue: number) => setTab(newValue);

    return (
        <Modal open={openModal} onClose={toggleModal} sx={styles(mode).modalContainer}>
            <Box sx={modalBoxStyle(isMobile, mode)}>
                <IconButton onClick={toggleModal} sx={styles(mode).modalIcon}>
                    <CloseIcon />
                </IconButton>

                <Typography sx={styles(mode).modalApiContext}>API Code Examples</Typography>

                <Tabs
                    value={tab}
                    textColor="inherit"
                    variant="scrollable"
                    scrollButtons="auto"
                    sx={styles(mode).modalTabs}
                    indicatorColor="primary"
                    onChange={handleTabChange}
                >
                    {codeExamples.map((ex, idx) => (
                        <Tab sx={styles(mode).modalTab} key={idx} label={ex.label} />
                    ))}
                </Tabs>

                <Box sx={styles(mode).modalCodeBox}>
                    <SyntaxHighlighter
                        language={codeExamples[tab].language}
                        style={atomOneDark}
                        customStyle={{
                            fontSize: 14,
                            padding: '16px',
                            margin: 0,
                            background: 'transparent',
                            overflowX: 'hidden',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                        wrapLongLines
                    >
                        {codeExamples[tab].code.trim()}
                    </SyntaxHighlighter>
                </Box>
            </Box>
        </Modal>

    );
};

export default ApiViewModal;