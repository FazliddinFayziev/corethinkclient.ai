import React from 'react';
import TopCircles from './TopCircles';
import HeaderBadge from './HeaderBadge';
import { rows, tableInfo } from './data';
import { rowStyles, styles } from './Styles';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import {
  Box,
  Table,
  TableRow,
  TableBody,
  TableHead,
  TableCell,
  Typography,
  TableContainer,
} from '@mui/material';

interface BenchmarkProps {
  mode: boolean;
};

const Benchmark: React.FC<BenchmarkProps> = ({ mode }) => {
  return (
    <Box sx={styles(mode).benchmarkBox}>
      <TopCircles mode={mode} />
      {/* ======================= TOP CONTEXT ================================= */}
      <Box sx={styles(mode).mainBox}>
        <div id='Benchmarks' />
        <HeaderBadge mode={mode} />

        <Typography variant="h2" sx={styles(mode).topContext}>
          <span style={{ color: mode ? "#B6A2F5" : "#7B4FFF" }}>
            Real-World Benchmarks.
          </span>{' '}
          <span> Real-Time Reasoning.</span>
        </Typography>

        <Typography variant="body1" sx={styles(mode).topText}>
          Evaluating CoreThink's performance across cutting-edge
          benchmarks that push the boundaries of AI capabilities.
        </Typography>

        <Box sx={styles(mode).tableBox}>
          <Box sx={styles(mode).tableTextBox}>
            <Typography variant="h3" sx={styles(mode).tableTopText}>
              <TrendingUpIcon sx={{ fontSize: 'inherit' }} />
              Benchmarks
            </Typography>
          </Box>

          <TableContainer sx={styles(mode).tableContainer}>
            <Table sx={styles(mode).tableS}>
              {/* ======================= TABLE HEAD ================================= */}
              <TableHead>
                <TableRow sx={styles(mode).tableRowS}>
                  {tableInfo.map((header) => (
                    <TableCell key={header} sx={styles(mode).tableCellS}>
                      {header}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              {/* ======================= TABLE BODY ================================= */}
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow key={index} sx={rowStyles(mode, row).rowS}>
                    <TableCell sx={rowStyles(mode, row).rowCell}>
                      {row.name}
                    </TableCell>
                    <TableCell sx={rowStyles(mode, row).simpleCell}>
                      {row.sota || '-'}
                    </TableCell>
                    <TableCell sx={rowStyles(mode, row).simpleCell}>
                      {row.sota || '-'}
                    </TableCell>
                    <TableCell sx={rowStyles(mode, row).simpleCell}>
                      {row.model || '-'}
                    </TableCell>
                    <TableCell sx={rowStyles(mode, row).simpleCell}>
                      {row.date || '-'}
                    </TableCell>
                    <TableCell sx={rowStyles(mode, row).simpleCell}>
                      {row.comments || 'No comments'}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
        {/* ======================= UNDER COMMENT ================================= */}
        <Box sx={styles(mode).onGoing}>
          <TrendingUpIcon sx={styles(mode).trendUp} />
          <Typography variant="body2" sx={styles(mode).onGoingText}>
            *Evals ongoing. Scores updated weekly.
          </Typography>
        </Box>

        <Box sx={styles(mode).noteBox}>
          <TimelineIcon sx={styles(mode).timeIconS} />
          Note: Livebench Reasoning scores will be incorporated into our upcoming
          R&P SRM framework after we surpass current benchmark thresholds.
        </Box>
      </Box>
    </Box>
  );
};

export default Benchmark;