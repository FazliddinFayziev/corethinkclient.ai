import React from 'react';
import { styles } from './Styles';
import { FONTS } from '../../styles/GlobalStyles';
import { InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { Box, Typography, TextField, Select, MenuItem, Slider } from '@mui/material';

interface SettingsPanelProps {
    mode: boolean;
    model: string;
    safety: string;
    temperature: number;
    outputLength: number;
    setModel: (value: string) => void;
    setSafety: (value: string) => void;
    setTemperature: (value: number) => void;
    setOutputLength: (value: number) => void;
}

const MODELS = [
    'gpt-4o',
    'openchat/openchat-3.5',
    'deepseek-ai/DeepSeek-R1',
];
const SAFETY_MODELS = ['None', 'OpenAI', 'Anthropic'];

const SettingsPanel: React.FC<SettingsPanelProps> = ({
    mode,
    model,
    safety,
    setModel,
    setSafety,
    temperature,
    outputLength,
    setTemperature,
    setOutputLength,
}) => {
    const getIconColor = (mode: boolean): string => mode ? '#AAAABB' : '#888888';

    return (
        <Box>
            <Typography sx={styles(mode).settingsText}>Model Settings</Typography>
            <Typography sx={styles(mode).modelS}>Model</Typography>
            <TextField
                select
                fullWidth
                size="small"
                value={model}
                variant="outlined"
                sx={styles(mode).modelField}
                onChange={(e) => setModel(e.target.value)}
            >
                {MODELS.map((modelOption) => (
                    <MenuItem
                        key={modelOption}
                        value={modelOption}
                        sx={{ fontFamily: FONTS.third }}
                    >
                        {modelOption}
                    </MenuItem>
                ))}
            </TextField>

            <Box sx={styles(mode).outputCon}>
                <Box sx={styles(mode).outputBox}>
                    <Typography sx={styles(mode).outputText}>Output Length</Typography>
                    <InfoOutlinedIcon fontSize="small" sx={{ color: getIconColor(mode) }} />
                </Box>
                <Slider
                    min={1}
                    max={100}
                    value={outputLength}
                    sx={{ color: '#4E3C91' }}
                    onChange={(_, val) => setOutputLength(val as number)}
                />
                <Typography sx={styles(mode).outputLengthS}>{outputLength}</Typography>
            </Box>

            <Box sx={styles(mode).tempCon}>
                <Box sx={styles(mode).tempBox}>
                    <Typography sx={styles(mode).tempText}>Temperature</Typography>
                    <InfoOutlinedIcon fontSize="small" sx={{ color: getIconColor(mode) }} />
                </Box>
                <Slider
                    min={0}
                    max={1}
                    step={0.01}
                    value={temperature}
                    sx={{ color: '#4E3C91' }}
                    onChange={(_, val) => setTemperature(val as number)}
                />
                <Typography sx={styles(mode).tempS}>{temperature.toFixed(2)}</Typography>
            </Box>

            <Typography sx={styles(mode).safetyMS}>Safety Model</Typography>
            <Select
                value={safety}
                fullWidth
                size="small"
                variant="outlined"
                sx={styles(mode).selectSafety}
                onChange={(e) => setSafety(e.target.value)}
            >
                {SAFETY_MODELS.map((safetyOption) => (
                    <MenuItem
                        key={safetyOption}
                        value={safetyOption}
                        sx={{ fontFamily: FONTS.third }}
                    >
                        {safetyOption}
                    </MenuItem>
                ))}
            </Select>
        </Box>
    );
};

export default SettingsPanel;