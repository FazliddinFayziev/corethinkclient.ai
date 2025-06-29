import React, { useState } from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Select,
  MenuItem,
  IconButton,
  Tooltip,
  useMediaQuery
} from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';
import DescriptionIcon from '@mui/icons-material/Description';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark, prism } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useGlobalContext } from '../../context/context';
import { FONTS } from '../../styles/GlobalStyles';

// --- Code Snippets ---
const codeSnippets = {
  python: `import openai

openai.api_key = "YOUR_API_KEY"
response = openai.ChatCompletion.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Hello!"}]
)
print(response.choices[0].message.content)`,
  typescript: `import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "YOUR_API_KEY",
});

const response = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [{ role: "user", content: "Hello!" }],
});

console.log(response.choices[0].message.content);`,
  curl: `curl https://api.openai.com/v1/chat/completions \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "model": "gpt-4",
    "messages": [{"role": "user", "content": "Hello!"}]
}'`,
};

const StartCard: React.FC = () => {
  const { mode } = useGlobalContext();
  const isDark = mode === true;
  const isMobile = useMediaQuery('(max-width:768px)');

  const [lang, setLang] = useState<'python' | 'typescript' | 'curl'>('python');
  const [copied, setCopied] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(codeSnippets[lang]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const colors = {
    background: isDark ? '#121212' : '#f5f5f5',
    card: isDark ? '#1e1e1e' : '#ffffff',
    text: isDark ? '#e0e0e0' : '#333333',
    muted: isDark ? '#AAAABB' : '#888888',
    icon: isDark ? '#AAAABB' : '#888888',
    accent: isDark ? '#939BF9' : '#4E3C91',
    codeBg: isDark ? '#1e1e1e' : '#f8f8f8',
  };

  return (
    <Box>
      <Typography
        variant="h6"
        sx={{
          color: colors.text,
          mb: 3,
          fontFamily: FONTS.primary,
          fontWeight: 500,
          fontSize: '1.125rem',
        }}
      >
        Corethink.ai Developer Platform
      </Typography>

      <Card
        sx={{
          display: 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          backgroundColor: colors.card,
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: 'none',
        }}
      >
        {/* Left: Quick Start */}
        <CardContent
          sx={{
            flex: isMobile ? 1 : 0.6,
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            position: 'relative',
            transition: 'all 0.3s ease',
          }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <Typography
            sx={{
              color: colors.text,
              fontWeight: 500,
              mb: 1,
              fontFamily: FONTS.third,
              fontSize: '0.95rem',
            }}
          >
            Developer Quick Start
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: colors.muted,
              mb: 2,
              fontFamily: FONTS.third,
              fontSize: '0.85rem',
            }}
          >
            Make your first API request in minutes. Learn the basics of the Corethink AI platform.
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AccessTimeIcon sx={{ fontSize: 16, color: colors.icon }} />
            <Typography
              sx={{
                fontSize: '0.8rem',
                color: colors.icon,
                fontFamily: FONTS.third,
              }}
            >
              5 min
            </Typography>
          </Box>

          {/* Docs Icon on Hover */}
          <Box
            sx={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              opacity: hovered ? 1 : 0,
              transition: 'opacity 0.3s ease',
            }}
          >
            <Tooltip title="Quickstart Docs" arrow>
              <IconButton
                size="small"
                sx={{
                  color: colors.accent,
                  backgroundColor: isDark ? '#292929' : '#eeeeee',
                  '&:hover': {
                    backgroundColor: isDark ? '#333333' : '#dddddd',
                  },
                }}
              >
                <DescriptionIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>
        </CardContent>

        {/* Right: Code Block */}
        <Box
          sx={{
            flex: isMobile ? 1 : 1.4,
            padding: '2rem',
            backgroundColor: colors.codeBg,
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          {/* Language Selector and Copy */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Select
              value={lang}
              onChange={(e) => setLang(e.target.value as any)}
              variant="outlined"
              size="small"
              sx={{
                minWidth: 120,
                height: 30,
                color: colors.text,
                fontSize: '0.85rem',
                fontFamily: FONTS.third,
                '& .MuiOutlinedInput-notchedOutline': { border: 'none' },
              }}
              MenuProps={{
                PaperProps: {
                  sx: {
                    backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
                    fontFamily: FONTS.third,
                    fontSize: '0.85rem',
                  },
                },
              }}
            >
              <MenuItem value="python" sx={{ fontFamily: FONTS.third }}>Python</MenuItem>
              <MenuItem value="typescript" sx={{ fontFamily: FONTS.third }}>TypeScript</MenuItem>
              <MenuItem value="curl" sx={{ fontFamily: FONTS.third }}>cURL</MenuItem>
            </Select>

            <Tooltip title={copied ? 'Copied!' : 'Copy to clipboard'} arrow>
              <IconButton
                onClick={handleCopy}
                size="small"
                sx={{
                  color: colors.icon,
                  '&:hover': {
                    color: colors.accent,
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {copied ? (
                  <CheckIcon fontSize="small" sx={{ color: '#00c080' }} />
                ) : (
                  <ContentCopyIcon fontSize="small" />
                )}
              </IconButton>
            </Tooltip>
          </Box>

          {/* Code Display */}
          <Box
            sx={{
              fontFamily: FONTS.primary,
              '& pre, & code': {
                fontFamily: `${FONTS.primary} !important`,
              },
            }}
          >
            <SyntaxHighlighter
              language={lang}
              style={isDark ? atomDark : prism}
              customStyle={{
                backgroundColor: 'transparent',
                padding: 0,
                margin: 0,
                fontSize: '0.8rem',
                borderRadius: '6px',
              }}
              showLineNumbers
              lineNumberStyle={{
                color: colors.muted,
                minWidth: '2.5em',
                paddingRight: '1em',
                userSelect: 'none',
                fontFamily: FONTS.primary,
              }}
              wrapLines
            >
              {codeSnippets[lang]}
            </SyntaxHighlighter>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default StartCard;
