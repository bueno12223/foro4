declare global {
  interface Window {
    io: any;
  }
}
export interface Message {
  id: string;
  message: string;
  userEmail: string;
  likes: number;
  isChanged: boolean;
  date: number;
  sub_messages?: Message[];
}