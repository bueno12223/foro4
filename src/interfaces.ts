export interface Message {
    userAvatar: string;
    userName: string;
    userEmail: string;
    date: string;
    message: string;
    messageId: string;
    subMessage?: Array<Message>;
}