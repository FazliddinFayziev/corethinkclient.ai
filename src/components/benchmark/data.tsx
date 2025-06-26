import type { BenchmarkRow } from "./type/type";

export const tableInfo = ['Benchmark Name', 'CoreThink Score', 'Current SOTA Score', 'Current SOTA Model', 'Scoring Date', 'Comments']

export const rows: BenchmarkRow[] = [
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