export interface Attachment {
    id: string;
    name: string;
    type: 'image' | 'video' | 'audio' | 'document' | 'other';
    url: string;
    size: string;
};