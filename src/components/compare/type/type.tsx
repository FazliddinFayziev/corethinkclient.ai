export interface Message {
  sender: 'user' | 'bot';
  message: string;
};

export interface ModelConfig {
    name: string;
    temperature: number;
    outputLength: number;
    safety: null | string
}