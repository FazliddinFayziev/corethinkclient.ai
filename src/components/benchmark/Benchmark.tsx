import React from 'react';
import { FONTS } from '../../styles/GlobalStyles';
import StarsIcon from '@mui/icons-material/Stars';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { Box, Typography, TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

interface BenchmarkProps {
  mode: boolean;
}

interface BenchmarkRow {
  name: string;
  score: string;
  sota: string;
  model: string;
  date: string;
  comments: string;
  highlight?: boolean;
}

const Benchmark: React.FC<BenchmarkProps> = ({ mode }) => {
  const rows: BenchmarkRow[] = [
    {
      name: 'BFCL',
      score: '81',
      sota: '78',
      model: 'xLam',
      date: '06/16',
      comments: 'Multi-turn-base category',
      highlight: true
    },
    {
      name: 'LCB',
      score: '78.33*',
      sota: '80',
      model: 'o3',
      date: '06/20',
      comments: 'On our internal subset',
      highlight: true
    },
    {
      name: 'IF-evals',
      score: '89',
      sota: '87.73',
      model: 'Qwen3-235B',
      date: '05/24',
      comments: '',
    },
    {
      name: 'BIRD',
      score: '',
      sota: '75.36',
      model: 'AskData+GPT-4o',
      date: '',
      comments: 'Text-to-SQL. In development',
    },
    {
      name: 'SWE-bench',
      score: '',
      sota: '34.78',
      model: 'Claude-3.7-sonnet + SWE-Agent',
      date: '',
      comments: 'On lite-dev currently. By 06/22',
    },
    {
      name: 'ARC-AGI',
      score: '15',
      sota: '',
      model: 'MindsAI',
      date: '',
      comments: 'In development',
    },
  ];

  const HeaderBadge: React.FC<{ mode: boolean }> = ({ mode }) => {
    return (
      <Box 
        sx={{
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
        }}
      >
        <Typography sx={{
          fontWeight: 400,
          fontSize: { xs: '0.75rem', sm: '0.8rem', md: '0.85rem' },
          color: mode ? '#FFFFFF' : '#0A0C21',
          fontFamily: FONTS.primary,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 0.5,
        }}>
          Measured. Verified. Trusted
          <AutoAwesomeIcon sx={{ 
            fontSize: { xs: 16, sm: 18 },
            color: mode ? '#7B4FFF' : '#B6A2F5' 
          }} />
        </Typography>
      </Box>
    );
  };

  const ScorePill: React.FC<{ score: string; highlight?: boolean }> = ({ score, highlight }) => {
    if (!score) return <Typography>-</Typography>;
    
    return (
      <Box
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          px: 1.5,
          py: 0.5,
          borderRadius: '12px',
          backgroundColor: highlight 
            ? (mode ? 'rgba(123, 79, 255, 0.2)' : 'rgba(182, 162, 245, 0.2)')
            : 'transparent',
          border: highlight 
            ? `1px solid ${mode ? '#7B4FFF' : '#B6A2F5'}` 
            : 'none',
          color: highlight 
            ? (mode ? '#B6A2F5' : '#7B4FFF')
            : (mode ? '#FFFFFF' : '#333333'),
          fontWeight: highlight ? 600 : 400,
          gap: 0.5,
          fontSize: { xs: '0.8rem', sm: '0.9rem' }
        }}
      >
        {highlight && <StarsIcon sx={{ fontSize: { xs: 14, sm: 16 } }} />}
        {score}
      </Box>
    );
  };

  return (
    <Box
      sx={{
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
      }}
    >
      {mode ? (
        <>
          <Box sx={{
            position: 'absolute',
            top: -100,
            right: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(123, 79, 255, 0.15) 0%, rgba(123, 79, 255, 0) 70%)',
            zIndex: 0,
          }} />
          <Box sx={{
            position: 'absolute',
            bottom: -150,
            left: -150,
            width: 500,
            height: 500,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(182, 162, 245, 0.1) 0%, rgba(182, 162, 245, 0) 70%)',
            zIndex: 0,
          }} />
        </>
      ) : (
        <>
          <Box sx={{
            position: 'absolute',
            top: -50,
            right: -50,
            width: 300,
            height: 300,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(182, 162, 245, 0.1) 0%, rgba(182, 162, 245, 0) 70%)',
            zIndex: 0,
          }} />
          <Box sx={{
            position: 'absolute',
            bottom: -100,
            left: -100,
            width: 400,
            height: 400,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(123, 79, 255, 0.08) 0%, rgba(123, 79, 255, 0) 70%)',
            zIndex: 0,
          }} />
        </>
      )}

      <Box sx={{ 
        position: 'relative',
        zIndex: 1,
        width: '100%',
        maxWidth: '1400px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <div id='Benchmarks' />
        <HeaderBadge mode={mode} />

        <Typography 
          variant="h2" 
          sx={{
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
          }}
        >
          <span style={{ color: mode ? "#B6A2F5" : "#7B4FFF" }}>
            Real-World Benchmarks.
          </span>{' '}
          <span>
            Real-Time Reasoning.
          </span>
        </Typography>

        <Typography 
          variant="body1" 
          textAlign="center" 
          mb={{ xs: 3, sm: 4 }}
          sx={{
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
            lineHeight: 1.6
          }}
        >
          Evaluating CoreThink's performance across cutting-edge benchmarks that push the boundaries of AI capabilities.
        </Typography>

        <TableContainer
          sx={{
            mt: { xs: 2, sm: 4 },
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
            overflowX: 'auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Table sx={{
            minWidth: 650,
            '& .MuiTableCell-root': {
              borderBottom: mode 
                ? '1px solid rgba(255, 255, 255, 0.05)' 
                : '1px solid rgba(0, 0, 0, 0.05)',
              py: { xs: 1, sm: 1.5, md: 2 },
              px: { xs: 1, sm: 1.5, md: 2 },
            },
          }}>
            <TableHead>
              <TableRow sx={{
                backgroundColor: mode ? 'rgba(123, 79, 255, 0.1)' : 'rgba(182, 162, 245, 0.1)',
              }}>
                {['Benchmark Name', 'CoreThink Score', 'Current SOTA Score', 'Current SOTA Model', 'Scoring Date', 'Comments'].map((header) => (
                  <TableCell 
                    key={header}
                    sx={{
                      fontWeight: 600,
                      color: mode ? '#B6A2F5' : '#7B4FFF',
                      fontSize: {
                        xs: '0.8rem',
                        sm: '0.85rem',
                        md: '0.9rem'
                      },
                      fontFamily: FONTS.primary,
                      whiteSpace: 'nowrap'
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow 
                  key={index}
                  sx={{
                    backgroundColor: row.highlight 
                      ? (mode ? 'rgba(123, 79, 255, 0.05)' : 'rgba(182, 162, 245, 0.05)')
                      : 'transparent',
                    '&:hover': {
                      backgroundColor: mode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.02)',
                    }
                  }}
                >
                  <TableCell sx={{
                    fontWeight: row.highlight ? 600 : 400,
                    fontFamily: FONTS.primary,
                    color: mode ? (row.highlight ? '#FFFFFF' : 'rgba(255, 255, 255, 0.9)') : (row.highlight ? '#0A0C21' : 'rgba(10, 12, 33, 0.8)'),
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    }
                  }}>
                    {row.name}
                  </TableCell>
                  <TableCell sx={{ fontFamily: FONTS.primary }}>
                    <ScorePill score={row.score} highlight={row.highlight} />
                  </TableCell>
                  <TableCell sx={{
                    color: mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 12, 33, 0.8)',
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    fontFamily: FONTS.primary
                  }}>
                    {row.sota || '-'}
                  </TableCell>
                  <TableCell sx={{
                    color: mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 12, 33, 0.8)',
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    fontFamily: FONTS.primary
                  }}>
                    {row.model || '-'}
                  </TableCell>
                  <TableCell sx={{
                    color: mode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(10, 12, 33, 0.8)',
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    fontFamily: FONTS.primary
                  }}>
                    {row.date || '-'}
                  </TableCell>
                  <TableCell sx={{
                    color: mode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 12, 33, 0.7)',
                    fontStyle: row.comments ? 'normal' : 'italic',
                    opacity: row.comments ? 0.9 : 0.6,
                    fontSize: {
                      xs: '0.8rem',
                      sm: '0.85rem',
                      md: '0.9rem'
                    },
                    fontFamily: FONTS.primary
                  }}>
                    {row.comments || 'No comments'}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Box
          sx={{
            mt: { xs: 2, sm: 3, md: 4 },
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: mode ? 'rgba(255, 255, 255, 0.6)' : 'rgba(10, 12, 33, 0.6)',
            fontSize: { xs: '0.8rem', sm: '0.85rem' },
          }}
        >
          <TrendingUpIcon sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }} />
          <Typography variant="body2" sx={{ fontStyle: 'italic' }}>
            *Evals ongoing. Scores updated weekly.
          </Typography>
        </Box>

        <Box
          sx={{
            mt: { xs: 3, sm: 4, md: 6 },
            maxWidth: '800px',
            textAlign: 'center',
            color: mode ? 'rgba(255, 255, 255, 0.7)' : 'rgba(10, 12, 33, 0.7)',
            fontSize: { xs: '0.85rem', sm: '0.9rem', md: '0.95rem' },
            lineHeight: 1.6,
            px: { xs: 2, sm: 0 },
          }}
        >
          <TimelineIcon sx={{ 
            fontSize: { xs: '1rem', sm: '1.2rem' },
            verticalAlign: 'middle',
            mr: 1,
            color: mode ? '#B6A2F5' : '#7B4FFF'
          }} />
          Note: Livebench Reasoning scores will be incorporated into our upcoming R&P SRM framework after we surpass current benchmark thresholds.
        </Box>
      </Box>
    </Box>
  );
};

export default Benchmark;