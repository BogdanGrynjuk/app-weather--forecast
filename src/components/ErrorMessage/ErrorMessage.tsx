import React from 'react';
import { TextMessage } from './ErrorMessage.styled';

type Props = {
  children: React.ReactNode
  isVisible: boolean
}

const ErrorMessage: React.FC<Props> = ({children, isVisible}) => {
  return (
    <TextMessage isVisible={isVisible}>
      {children}
    </TextMessage>
  );
}

export default ErrorMessage;