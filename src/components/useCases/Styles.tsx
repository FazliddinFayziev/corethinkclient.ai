import { alpha } from '@mui/material';
import { FONTS } from '../../styles/GlobalStyles';

export const styles = (mode: boolean) => {
    return {
        // USE CASE CARDS

        cardS: {
            borderRadius: 3,
            background: mode ? '#1A1C33' : '#F8F7FC',
            color: mode ? '#FFFFFF' : '#0A0C21',
            height: '100%',
            transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
            boxShadow: mode
                ? '0 4px 20px rgba(0, 0, 0, 0.2)'
                : '0 4px 20px rgba(182, 162, 245, 0.1)',
            border: mode
                ? '1px solid rgba(255, 255, 255, 0.06)'
                : '1px solid rgba(10, 12, 33, 0.06)',
            display: 'flex',
            flexDirection: 'column',
            '&:hover': {
                transform: 'translateY(-8px)',
                boxShadow: mode
                    ? '0 12px 32px rgba(123, 79, 255, 0.25)'
                    : '0 12px 32px rgba(182, 162, 245, 0.25)',
                borderColor: mode
                    ? alpha('#7B4FFF', 0.3)
                    : alpha('#B6A2F5', 0.2),
            },
        },
        cardContent: {
            p: 3,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,
        },
        cardIcon: {
            width: 40,
            height: 40,
            mb: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '10px',
            background: mode
                ? alpha('#7B4FFF', 0.1)
                : alpha('#B6A2F5', 0.1),
            color: mode ? '#7B4FFF' : '#B6A2F5',
        },
        cardTitle: {
            fontWeight: 700,
            mb: 1.5,
            fontSize: '1.1rem',
            fontFamily: FONTS.primary,
            color: mode ? '#FFFFFF' : '#0A0C21',
        },
        cardDesc: {
            lineHeight: 1.5,
            mb: 2,
            flexGrow: 1,
            fontSize: '0.9rem',
            color: mode ? '#D3D3D3' : '#4A4B5E',
            fontFamily: FONTS.secodary,
        },
        imgBox: {
            mt: 'auto',
            borderRadius: '12px',
            overflow: 'hidden',
            height: 120,
            position: 'relative',
            '& img': {
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.3s ease',
            },
            '&:hover img': {
                transform: 'scale(1.05)',
            }
        },

        // CATEGORY TABS

        tabsCon: {
            mb: 6,
            display: 'flex',
            justifyContent: "center",
            width: '100%',
            overflowX: 'auto',
            '&::-webkit-scrollbar': {
                height: '6px',
                backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
                borderRadius: '4px',
                backgroundColor: mode
                    ? alpha('#7B4FFF', 0.3)
                    : alpha('#B6A2F5', 0.3),
            },
            py: 1,
        },
        tabsS: {
            minWidth: 'max-content',
            '& .MuiTabs-indicator': {
                display: 'none'
            },
            '& .MuiTabs-scroller': {
                overflow: 'visible !important',
            },
            '& .MuiTabScrollButton-root': {
                color: mode ? '#FFFFFF' : '#0A0C21',
                opacity: 0.7,
                '&.Mui-disabled': {
                    opacity: 0.3
                }
            }
        },
        tabS: {
            color: mode ? '#AAAAAA' : '#888888',
            opacity: 0.9,
            fontSize: '0.85rem',
            fontWeight: 500,
            textTransform: 'none',
            letterSpacing: '0.3px',
            px: 2,
            py: 1,
            mx: 1,
            borderRadius: 50,
            fontFamily: FONTS.primary,
            minHeight: 'auto',
            minWidth: 'unset',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            '&.Mui-selected': {
                color: mode ? '#FFFFFF' : '#0A0C21',
                opacity: 1,
                background: mode
                    ? alpha('#7B4FFF', 0.1)
                    : alpha('#B6A2F5', 0.1),
                border: mode
                    ? `1px solid ${alpha('#7B4FFF', 0.3)}`
                    : `1px solid ${alpha('#B6A2F5', 0.3)}`,
                fontWeight: 600,
                boxShadow: mode
                    ? '0 2px 8px rgba(123, 79, 255, 0.1)'
                    : '0 2px 8px rgba(182, 162, 245, 0.1)'
            },
            '&:hover': {
                color: mode ? '#7B4FFF' : '#B6A2F5',
                opacity: 1,
                background: mode
                    ? alpha('#7B4FFF', 0.05)
                    : alpha('#B6A2F5', 0.05)
            }
        },

        // HEADER BADGE

        headerBox: {
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
            mb: 2,
        },
        headerContext: {
            fontWeight: 400,
            fontSize: '0.8rem',
            color: mode ? '#FFFFFF' : '#0A0C21',
            fontFamily: FONTS.primary,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 0.5,
        },
        headerIcon: { 
          fontSize: 18,
          color: mode ? '#7B4FFF' : '#B6A2F5' 
        },

        // USE CASES

        useCaseCon: {
            px: { xs: 2, md: 8 },
            py: 4,
            backgroundColor: mode ? '#0A0C21' : '#f5f5f5',
            position: 'relative',
            overflow: 'hidden'
        },
        animationBox: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: mode 
              ? 'radial-gradient(circle at 70% 30%, #7B4FFF 0%, transparent 50%)' 
              : 'radial-gradient(circle at 70% 30%, #B6A2F5 0%, transparent 50%)',
            zIndex: 0
        },
        useCaseMainBox: { 
            maxWidth: 1200, 
            mx: 'auto', 
            position: 'relative', 
            zIndex: 2 
        },
        topBox: { display: 'flex', justifyContent: 'center' },
        useCasesContext: {
            fontFamily: FONTS.primary,
            fontWeight: 500,
            textAlign: 'center',
            fontSize: {
              xs: '2.2rem',
              sm: '2.8rem',
              md: '3.8rem',
              lg: '4.5rem',
            },
            color: mode ? '#FFFFFF' : '#333',
            mb: 3,
        },
        useCaseText: {
            opacity: 0.8,
            fontSize: '1.1rem',
            maxWidth: 700,
            mx: 'auto',
            color: mode ? '#D3D3D3' : '#4A4B5E',
            fontFamily: FONTS.primary,
        },
        cardsCon: { 
            px: { xs: 3, md: 6, lg: 8 },
            py: { xs: 6, md: 8 },
            position: 'relative',
            overflow: 'hidden'
        },
        cardsBox: {
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: mode 
              ? alpha('#7B4FFF', 0.05) 
              : alpha('#B6A2F5', 0.05),
            zIndex: 0
        },
        categotyTabsCon: { 
            maxWidth: 1400,
            mx: 'auto',
            position: 'relative',
            zIndex: 1
        },
        gridS: {
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
            gap: 3,
        },
        exploreMore: {
            px: 4,
            py: 1.5,
            borderRadius: 50,
            borderColor: mode ? '#7B4FFF' : '#B6A2F5',
            color: mode ? '#7B4FFF' : '#B6A2F5',
            textTransform: 'none',
            fontFamily: FONTS.primary,
            fontWeight: 500,
            '&:hover': {
              borderColor: mode ? '#7B4FFF' : '#B6A2F5',
              backgroundColor: mode 
                ? alpha('#7B4FFF', 0.08) 
                : alpha('#B6A2F5', 0.08),
            }
        },
        showLess: {
            px: 4,
            py: 1.5,
            borderRadius: 50,
            borderColor: mode ? '#7B4FFF' : '#B6A2F5',
            color: mode ? '#7B4FFF' : '#B6A2F5',
            textTransform: 'none',
            fontFamily: FONTS.primary,
            fontWeight: 500,
            '&:hover': {
              borderColor: mode ? '#7B4FFF' : '#B6A2F5',
              backgroundColor: mode 
                ? alpha('#7B4FFF', 0.08) 
                : alpha('#B6A2F5', 0.08),
            }
        },
    }
}