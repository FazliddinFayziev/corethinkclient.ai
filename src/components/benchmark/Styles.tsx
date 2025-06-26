import { FONTS } from "../../styles/GlobalStyles"

export const styles = (mode: boolean) => {
    return {
        headerS: {
            px: 2,
            py: 1,
            borderRadius: '50px',
            backdropFilter: 'blur(10px)',
            backgroundColor: mode
                ? 'rgba(255, 255, 255, 0.1)'
                : 'rgba(10, 12, 33, 0.1)',
            border: mode
                ? '1px solid rgba(255, 255, 255, 0.2)'
                : '1px solid rgba(10, 12, 33, 0.2)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
            display: 'inline-block',
            cursor: 'default',
            mb: { xs: 1, sm: 2, md: 3 },
        },
        headerContext: {
            fontWeight: 400,
            fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
            color: mode ? '#FFFFFF' : '#0A0C21',
            fontFamily: FONTS.primary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5,
        },
        headerIcon: {
            fontSize: { xs: 16, sm: 18 },
            color: mode ? '#7B4FFF' : '#B6A2F5'
        },
        benchmarkBox: {
            backgroundColor: mode ? '#0A0C21' : '#f5f5f5',
            color: mode ? '#ffffff' : '#111111',
            minHeight: '100vh',
            px: { xs: 2, sm: 4, md: 6, lg: 8 },
            py: { xs: 4, sm: 6, md: 8 },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            fontFamily: FONTS.primary,
            position: 'relative',
            overflow: 'hidden',
        },
        topCircleOne: {
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(123, 79, 255, 0.15) 0%, rgba(123, 79, 255, 0) 70%)',
            zIndex: 0,
        },
        topCircleTwo: {
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(182, 162, 245, 0.1) 0%, rgba(182, 162, 245, 0) 70%)',
            zIndex: 0,
        },
        topCircleThree: {
            position: 'absolute',
            top: -50,
            right: -50,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(182, 162, 245, 0.1) 0%, rgba(182, 162, 245, 0) 70%)',
            zIndex: 0,
        },
        topCircleFour: {
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(123, 79, 255, 0.08) 0%, rgba(123, 79, 255, 0) 70%)',
            zIndex: 0,
        },
        mainBox: {
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: '1400px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        topContext: {
            fontFamily: FONTS.primary,
            fontWeight: 500,
            textAlign: 'center',
            fontSize: {
                xs: '1.8rem',
                sm: '2.5rem',
                md: '3.2rem',
                lg: '4rem',
                xl: '4.5rem'
            },
            lineHeight: {
                xs: 1.2,
                sm: 1.3
            },
            color: mode ? '#FFFFFF' : '#333',
            mb: { xs: 2, sm: 3 },
            px: { xs: 1, sm: 0 },
        },
        topText: {
            opacity: 0.9,
            fontSize: {
                xs: '0.9rem',
                sm: '1rem',
                md: '1.1rem'
            },
            maxWidth: 700,
            mx: 'auto',
            color: mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 12, 33, 0.8)',
            fontFamily: FONTS.primary,
            fontWeight: 300,
            px: { xs: 1, sm: 0 },
            lineHeight: 1.6,
            mb: { xs: 3, sm: 4 },
            textAlign: "center",
        },
        tableBox: {
            width: '100%',
            maxWidth: '1200px',
            bgcolor: mode ? 'rgba(28, 28, 28, 0.7)' : 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(12px)',
            borderRadius: 3,
            border: mode
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.05)',
            boxShadow: mode
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 1,
            p: { xs: 0, md: 3 },
        },
        tableTextBox: {
            px: { xs: 2, md: 0 },
            pt: { xs: 2, md: 0 },
            pb: { xs: 1, md: 2 },
            borderBottom: mode
                ? '1px solid rgba(255, 255, 255, 0.1)'
                : '1px solid rgba(0, 0, 0, 0.05)',
        },
        tableTopText: {
            fontFamily: FONTS.primary,
            fontWeight: 600,
            fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
            color: mode ? '#B6A2F5' : '#7B4FFF',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
        },
        tableContainer: {
            width: '100%',
            overflowX: 'auto',
            p: { xs: 0, md: 1 },
        },
        tableS: {
            minWidth: 650,
            '& .MuiTableCell-root': {
                borderBottom: mode
                    ? '1px solid rgba(255, 255, 255, 0.05)'
                    : '1px solid rgba(0, 0, 0, 0.05)',
                py: { xs: 1, sm: 1.5, md: 2 },
                px: { xs: 1, sm: 1.5, md: 2 },
                borderRight: {
                    md: mode
                        ? '1px solid rgba(255, 255, 255, 0.05)'
                        : '1px solid rgba(0, 0, 0, 0.05)'
                },
                '&:first-of-type': {
                    borderLeft: {
                        md: mode
                            ? '1px solid rgba(255, 255, 255, 0.05)'
                            : '1px solid rgba(0, 0, 0, 0.05)'
                    },
                },
            },
        },
        tableRowS: {
            backgroundColor: mode ? 'rgba(123, 79, 255, 0.1)' : 'rgba(182, 162, 245, 0.1)',
        },
        tableCellS: {
            fontWeight: 600,
            color: mode ? '#B6A2F5' : '#7B4FFF',
            fontSize: {
                xs: '0.8rem',
                sm: '0.85rem',
                md: '0.9rem'
            },
            fontFamily: FONTS.primary,
            whiteSpace: 'nowrap'
        },
        onGoing: {
            mt: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: mode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(10, 12, 33, 0.6)',
            fontSize: { xs: '0.8rem', sm: '0.85rem' },
        },
        trendUp: { fontSize: { xs: '0.9rem', sm: '1rem' } },
        onGoingText: { fontStyle: 'italic' },
        noteBox: {
            mt: { xs: 3, sm: 4, md: 6 },
            maxWidth: '800px',
            textAlign: 'center',
            color: mode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 12, 33, 0.7)',
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
            lineHeight: 1.6,
            px: { xs: 2, sm: 0 },
        },
        timeIconS: {
            fontSize: { xs: '1rem', sm: '1.2rem' },
            verticalAlign: 'middle',
            mr: 1,
            color: mode ? '#B6A2F5' : '#7B4FFF'
        },
    }
};

export const rowStyles = (mode?: boolean, row?: any) => {
    return {
        rowS: {
            backgroundColor: row.highlight
                ? (mode ? 'rgba(123, 79, 255, 0.05)' : 'rgba(182, 162, 245, 0.05)')
                : 'transparent',
            '&:hover': {
                backgroundColor: mode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
            }
        },
        rowCell: {
            fontWeight: row.highlight ? 600 : 400,
            fontFamily: FONTS.primary,
            color: mode ? (row.highlight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)') : (row.highlight ? '#0A0C21' : 'rgba(10, 12, 33, 0.8)'),
            fontSize: {
                xs: '0.8rem',
                sm: '0.85rem',
                md: '0.9rem'
            }
        },
        simpleCell: {
            color: mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 12, 33, 0.8)',
            fontSize: {
                xs: '0.8rem',
                sm: '0.85rem',
                md: '0.9rem'
            },
            fontFamily: FONTS.primary
        }
    }
};