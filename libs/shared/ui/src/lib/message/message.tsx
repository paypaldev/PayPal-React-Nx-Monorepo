import{ ReactNode } from 'react';

export interface MessageProps {
  content: ReactNode;
}

export function Message({ content }: MessageProps) {
  return <p>{content}</p>;
}

export default Message;
