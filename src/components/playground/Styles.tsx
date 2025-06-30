import { FONTS } from "../../styles/GlobalStyles";

export const getMessageBackgroundColor = (role: string, mode: boolean): string => {
    return role === 'user'
        ? (mode ? '#1e1e1e' : '#f0f0f0')
        : (mode ? '#1e1e1e' : '#f8f8f8');
};

export const getMessageBorderColor = (mode: boolean): string => {
    return mode ? '#333' : '#e0e0e0';
};

export const getTextColor = (mode: boolean): string => {
    return mode ? '#e0e0e0' : '#333333';
};

export const getIconColor = (mode: boolean): string => {
    return mode ? '#AAAABB' : '#888888';
};

export const getSendButtonColor = (mode: boolean, disabled: boolean): string => {
    if (disabled) return mode ? '#666' : '#999';
    return mode ? '#939BF9' : '#4E3C91';
};

export const styles = (mode: boolean) => {
    return {

        // ====================== INPUT AREA ========================>

        inputCon: {
            p: 2,
            borderTop: `1px solid ${getMessageBorderColor(mode)}`,
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
        },
        inputBox: {
            display: 'flex',
            alignItems: 'center',
            borderRadius: '8px',
            backgroundColor: mode ? '#1e1e1e' : '#f8f8f8',
            border: `1px solid ${getMessageBorderColor(mode)}`,
            p: '4px 12px'
        },
        inputS: {
            '& .MuiOutlinedInput-root': {
                border: 'none',
                '& fieldset': { border: 'none' },
                '&:hover fieldset': { border: 'none' },
                '&.Mui-focused fieldset': { border: 'none' },
                fontFamily: FONTS.third,
                color: getTextColor(mode)
            },
        },

        // ================= SETTHINGS PANEL ==================>

        settingsText: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            fontWeight: 500,
            mb: 2,
            fontSize: '1.2rem'
        },
        modelS: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mb: 1,
        },
        modelField: {
            mb: 2,
            '& .MuiOutlinedInput-root': {
                color: getTextColor(mode),
                fontFamily: FONTS.third,
            }
        },
        outputCon: { mb: 2 },
        outputBox: { 
            mb: 1,
            display: 'flex', 
            alignItems: 'center', 
        },
        outputText: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mr: 1
        },
        outputLengthS: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            textAlign: 'right',
            fontSize: '0.8rem',
        },
        tempCon: { mb: 2 },
        tempBox: { 
            display: 'flex', 
            alignItems: 'center', 
            mb: 1,
        },
        tempText: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mr: 1
        },
        tempS: {
            fontFamily: FONTS.third,
            color: getIconColor(mode),
            textAlign: 'right',
            fontSize: '0.8rem'
        },
        safetyMS: {
            fontFamily: FONTS.third,
            color: getTextColor(mode),
            mb: 1,
        },
        selectSafety: {
            mb: 2,
            '& .MuiOutlinedInput-root': {
                color: getTextColor(mode),
                fontFamily: FONTS.third,
            }
        },

    }
}