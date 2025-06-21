import React from 'react';
import { expandStyle, styles } from './Styles';
import { useGlobalContext } from '../../context/context';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { TextField, IconButton, InputAdornment } from '@mui/material';

interface SystemPrompts {
    expanded: boolean;
    systemPrompt: string;
    toggleExpand: () => void;
    setSystemPrompt: (systemPrompt: string) => void;
};

const SystemPromptInput: React.FC<SystemPrompts> = ({ systemPrompt, setSystemPrompt, expanded, toggleExpand }) => {
    const { mode } = useGlobalContext();
    return (
        <TextField
            fullWidth
            multiline
            size="small"
            label="System prompt"
            value={systemPrompt}
            onChange={(e) => setSystemPrompt(e.target.value)}
            minRows={expanded ? 4 : 1}
            InputProps={{
                sx: styles(mode).systemPS,
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton onClick={toggleExpand} size="small" sx={styles(mode).expandBS}>
                            <ExpandMoreIcon sx={expandStyle(expanded)} />
                        </IconButton>
                    </InputAdornment>
                ),
            }}
            InputLabelProps={styles(mode).inputlabel}
        />
    )
};

export default SystemPromptInput;

