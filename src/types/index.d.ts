declare global {
  interface Window {
    io: any;
  }
}
export interface Message {
  id: string;
  message: string;
  userEmail: String;
  likes: Number;
  isChanged: Boolean;
  sub_messages?: Message[];
}