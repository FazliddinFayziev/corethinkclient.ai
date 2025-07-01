import React from 'react';
import { p_styles } from './Styles';
import { Box, Typography, IconButton, TextField } from '@mui/material';
import { Add as AddIcon, Tune as TuneIcon } from '@mui/icons-material';

interface SettingsProp {
    mode: boolean;
    model: string;
    safety: string;
    temperature: number;
    outputLength: number;
    systemMessage: string;
    setSystemMessage: any;
    toggleSettings: () => void;
};

const Settings: React.FC<SettingsProp> = ({
    mode,
    model,
    safety,
    temperature,
    outputLength,
    systemMessage,
    toggleSettings,
    setSystemMessage
}) => {
    return (
        <Box sx={p_styles(mode).settingsCon}>
            {/* Model Configuration */}
            <Box sx={p_styles(mode).modelCon}>
                <Box sx={p_styles(mode).modelBox}>
                    <Typography variant="subtitle2" sx={p_styles(mode).modelTypo}>Model</Typography>
                    <IconButton size="small" onClick={toggleSettings} sx={p_styles(mode).modelIcon}>
                        <TuneIcon fontSize="small" />
                    </IconButton>
                </Box>

                <Box sx={p_styles(mode).modelS}>{model}</Box>

                <Box sx={p_styles(mode).controlCon}>
                    <Typography variant="body2" sx={p_styles(mode).controlTypo}>
                        temp: <span style={{ color: '#00c080' }}>{temperature.toFixed(2)}</span>
                    </Typography>
                    <Typography variant="body2" sx={p_styles(mode).controlTypo}>
                        length: <span style={{ color: '#00c080' }}>{outputLength}</span>
                    </Typography>
                    <Typography variant="body2" sx={p_styles(mode).controlTypo}>
                        safety: <span style={{ color: '#00c080' }}>{safety}</span>
                    </Typography>
                </Box>
            </Box>

            {/* Variables Section */}
            <Box sx={p_styles(mode).variableBox}>
                <Typography variant="subtitle2" sx={p_styles(mode).variableTypo}>Variables</Typography>
                <Box sx={p_styles(mode).createBox}>
                    <Typography sx={p_styles(mode).createTypo}>Create</Typography>
                    <AddIcon sx={p_styles(mode).addIconS} />
                </Box>
            </Box>

            {/* System Message */}
            <Box sx={p_styles(mode).systemBox}>
                <Typography variant="subtitle2" sx={p_styles(mode).systemTypo}>System Message</Typography>
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    size="small"
                    value={systemMessage}
                    sx={p_styles(mode).sysMessage}
                    placeholder='Describe desired model behavior'
                    onChange={(e) => setSystemMessage(e.target.value)}
                />
            </Box>
        </Box>
    );
};

export default Settings;