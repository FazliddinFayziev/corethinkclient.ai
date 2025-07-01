export interface Message {
    role: string;
    content: string;
    id: string;
    isEditing?: boolean;
}