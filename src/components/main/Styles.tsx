

export const attachment_styles = (mode: boolean) => {

    const colors = {
        background: mode ? '#1f2937' : '#ffffff',
        border: mode ? '#374151' : '#e5e7eb',
        hoverBorder: mode ? '#4b5563' : '#d1d5db',
        textPrimary: mode ? '#f3f4f6' : '#374151',
        textSecondary: mode ? '#9ca3af' : '#6b7280',
        muted: mode ? '#4b5563' : '#f3f4f6',
        closeBg: mode ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
        closeBgHover: mode ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)',
    };

    return {
        iconPropS: { fontSize: 16, color: colors.textSecondary },
        imageCon: {
            position: 'relative',
            width: '100%',
            height: 100,
            borderRadius: 1,
            overflow: 'hidden',
            backgroundColor: colors.background,
            border: `1px solid ${colors.border}`,
            cursor: 'pointer',
            '&:hover': {
                borderColor: colors.hoverBorder,
                boxShadow: mode
                    ? '0 1px 3px rgba(0,0,0,0.4)'
                    : '0 1px 3px rgba(0,0,0,0.1)',
            },
        },
        closeIconCon: {
            position: 'absolute',
            top: 4,
            right: 4,
            backgroundColor: 'rgba(0,0,0,0.5)',
            color: '#fff',
            width: 20,
            height: 20,
            '&:hover': {
                backgroundColor: 'rgba(0,0,0,0.7)',
            },
        },
        closeIconS: { fontSize: 12 },
        attachmentCon: {
            position: 'relative',
            width: '100%',
            height: 100,
            backgroundColor: colors.background,
            border: `1px solid ${colors.border}`,
            borderRadius: 1,
            display: 'flex',
            flexDirection: 'column',
            cursor: 'pointer',
            transition: 'all 0.15s ease',
            '&:hover': {
                borderColor: colors.hoverBorder,
                boxShadow: mode
                    ? '0 1px 3px rgba(0,0,0,0.4)'
                    : '0 1px 3px rgba(0,0,0,0.1)',
            },
        },
        attachmentBox: {
            p: 1,
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
        },
        attachmentSBox: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
        },
        nameS: {
            fontSize: '0.75rem',
            fontWeight: 500,
            color: colors.textPrimary,
            lineHeight: 1.2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            mb: 0.5,
        },
        sizeS: {
            fontSize: '0.625rem',
            color: colors.textSecondary,
            fontWeight: 400,
        },
        fileCloseIconB: {
            color: colors.textSecondary,
            width: 18,
            height: 18,
            ml: 0.5,
            '&:hover': {
                color: colors.textPrimary,
                backgroundColor: colors.closeBgHover,
            },
        },
        fileCon: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            mt: 1,
        },
        fileBox: {
            display: 'flex',
            alignItems: 'center',
            gap: 0.5,
            backgroundColor: colors.muted,
            px: 0.75,
            py: 0.25,
            borderRadius: 0.5,
        },
        fileNameS: {
            fontSize: '0.625rem',
            fontWeight: 600,
            color: colors.textSecondary,
            textTransform: 'uppercase',
            letterSpacing: '0.025em',
        },
        messageAttachemenBox: {
            borderRadius: 1,
            overflow: 'hidden',
            border: `1px solid ${colors.border}`
        },
    }
}