import { ReactNode } from 'react';

/* eslint-disable-next-line */
export interface MessageProps {
  content: ReactNode
}

export function Message({content} : MessageProps) {
  return <p>{content}</p>;
}

export default Message;
