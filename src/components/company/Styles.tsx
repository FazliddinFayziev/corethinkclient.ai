import { FONTS } from "../../styles/GlobalStyles";

export const styles = (mode: boolean) => ({
  mainContainer: {
    width: '100%',
    minHeight: '100vh',
    backgroundColor: mode ? '#0A0C21' : '#F5F7FF',
    color: mode ? '#FFFFFF' : '#0A0C21',
    fontFamily: FONTS.primary,
    pt: { xs: 8, md: 12 },
    pb: { xs: 8, md: 12 },
    px: { xs: 3, sm: 6, md: 8 },
  },
  heroContainer: {
    textAlign: 'center',
    maxWidth: 800,
    mx: 'auto',
    mb: { xs: 6, md: 10 },
  },
  heroTitle: {
    fontWeight: 700,
    fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4rem' },
    lineHeight: 1.2,
    mb: 3,
    fontFamily: FONTS.primary,
  },
  highlight: {
    color: mode ? '#B6A2F5' : '#7B4FFF',
    fontWeight: 700,
  },
  heroSubtitle: {
    fontSize: { xs: '1.1rem', md: '1.3rem' },
    opacity: 0.9,
    maxWidth: 600,
    mx: 'auto',
    lineHeight: 1.6,
  },
  illustrationContainer: {
    display: 'flex',
    justifyContent: 'center',
    mb: { xs: 8, md: 12 },
    '& svg': {
      filter: mode ? 'drop-shadow(0 10px 30px rgba(123, 79, 255, 0.2))' 
                  : 'drop-shadow(0 10px 30px rgba(0, 0, 0, 0.1))',
    }
  },
  valuesContainer: {
    maxWidth: 1200,
    mx: 'auto',
    textAlign: 'center',
    mb: { xs: 8, md: 12 },
  },
  sectionTitle: {
    fontWeight: 700,
    fontSize: { xs: '1.8rem', md: '2.5rem' },
    mb: 6,
    fontFamily: FONTS.primary,
  },
  valuesStack: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  divider: {
    borderColor: mode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)',
    height: 'auto',
    alignSelf: 'stretch',
  },
  valueCard: {
    p: 3,
    borderRadius: 2,
    height: '100%',
    transition: 'all 0.3s ease',
    '&:hover': {
      backgroundColor: mode ? 'rgba(182, 162, 245, 0.05)' : 'rgba(123, 79, 255, 0.05)',
    }
  },
  valueIcon: {
    fontSize: '2.5rem',
    color: mode ? '#B6A2F5' : '#7B4FFF',
    mb: 2,
  },
  valueTitle: {
    fontWeight: 600,
    mb: 2,
    fontSize: '1.5rem',
    fontFamily: FONTS.primary,
  },
  valueDescription: {
    opacity: 0.8,
    lineHeight: 1.6,
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
    mt: 6,
  },
  ctaButton: {
    background: mode 
      ? 'linear-gradient(135deg, #7B4FFF, #B6A2F5)'
      : 'linear-gradient(135deg, #6e4cff, #a06fff)',
    color: '#FFFFFF',
    px: 6,
    py: 3,
    borderRadius: '50px',
    boxShadow: mode 
      ? '0 8px 32px rgba(123, 79, 255, 0.3)'
      : '0 8px 32px rgba(160, 111, 255, 0.3)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'translateY(-2px)',
      boxShadow: mode 
        ? '0 12px 40px rgba(123, 79, 255, 0.4)'
        : '0 12px 40px rgba(160, 111, 255, 0.4)',
    }
  },
  ctaText: {
    fontWeight: 600,
    fontFamily: FONTS.primary,
  }
});