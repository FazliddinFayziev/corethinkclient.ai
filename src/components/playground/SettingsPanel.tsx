import React from 'react';
import { styles } from './Styles';
import { useGlobalContext } from '../../context/context';
import { InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { Box, FormControl, MenuItem, Select, Slider, TextField, Typography } from '@mui/material';

interface SliderControlProp {
    min?: number;
    max?: number;
    value: number;
    label: string;
    step?: number;
    displayValue: number;
    onChange: (value: number) => void;
};

export interface SettingsPanelProp {
    model: string;
    safety: string;
    temperature: number;
    outputLength: number;
    setModel: (value: string) => void;
    setSafety: (value: string) => void;
    setTemperature: (value: number) => void;
    setOutputLength: (value: number) => void;
};

const SliderControl: React.FC<SliderControlProp> = ({
    label, value, onChange, min = 0, max = 100, step = 1, displayValue,
}) => {
    const { mode } = useGlobalContext();
    const currentStyles = styles(mode);
    
    return (
        <>
            <Box sx={currentStyles.sliderConS}>
                <Typography sx={currentStyles.sliderLabel}>
                    {label} <InfoOutlinedIcon fontSize="inherit" />
                </Typography>
                <Typography sx={currentStyles.displayS}>{displayValue}</Typography>
            </Box>
            <Slider
                min={min}
                max={max}
                step={step}
                value={value}
                sx={currentStyles.sliderS}
                onChange={(_, val) => onChange(val as number)}
            />
        </>
    );
};

const SettingsPanel: React.FC<SettingsPanelProp> = ({
    model,
    safety,
    setModel,
    setSafety,
    temperature,
    outputLength,
    setTemperature,
    setOutputLength,
}) => {
    const { mode } = useGlobalContext();
    const currentStyles = styles(mode);

    return (
        <Box sx={currentStyles.settingsPanelS}>
            <Typography sx={currentStyles.settingsPModelS}>Model</Typography>
            <FormControl fullWidth size="small">
                <TextField
                    select
                    fullWidth
                    size="small"
                    value={model}
                    sx={currentStyles.chooseModelS}
                    onChange={(e) => setModel(e.target.value)}
                    variant="outlined"
                >
                    <MenuItem value="deepseek-ai/DeepSeek-R1">deepseek-ai/DeepSeek-R1</MenuItem>
                    <MenuItem value="openchat/openchat-3.5">openchat/openchat-3.5</MenuItem>
                    <MenuItem value="gpt-4o">gpt-4o</MenuItem>
                </TextField>
            </FormControl>

            <Typography sx={currentStyles.settingsContextS}>Settings</Typography>

            <SliderControl
                max={100}
                value={outputLength}
                label="Output Length"
                onChange={setOutputLength}
                displayValue={outputLength}
            />

            <SliderControl
                min={0}
                max={1}
                step={0.01}
                label="Temperature"
                value={temperature}
                onChange={setTemperature}
                displayValue={temperature}
            />

            <Typography sx={currentStyles.safetyModelS}>
                Safety Model <InfoOutlinedIcon fontSize="inherit" />
            </Typography>
            <FormControl fullWidth size="small">
                <Select
                    value={safety}
                    sx={currentStyles.safetySelectS}
                    onChange={(e) => setSafety(e.target.value)}
                    variant="outlined"
                >
                    <MenuItem value="None">None</MenuItem>
                    <MenuItem value="OpenAI">OpenAI</MenuItem>
                    <MenuItem value="Anthropic">Anthropic</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
};

export default SettingsPanel;