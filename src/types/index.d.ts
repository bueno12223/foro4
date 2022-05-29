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
  date: string;
  sub_messages?: Message[];
}