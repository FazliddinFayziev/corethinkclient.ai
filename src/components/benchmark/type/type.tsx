export interface BenchmarkRow {
  name: string;
  score: string;
  sota: string;
  model: string;
  date: string;
  comments: string;
  highlight?: boolean;
}