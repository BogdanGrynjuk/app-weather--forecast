import React from 'react';
import { ActionMessage, MainMessage, Wrapper } from './ErrorMessage.styled';
import { IError } from 'types';

type Props = {
  error: IError   
  isVisible?: boolean
  isLight?: boolean
};

const ErrorMessage: React.FC<Props> = ({ error, isVisible, isLight }) => {
  const { errorMessage, actionMessage } = error;
  return (
    <Wrapper isVisible={isVisible ?? true}>
      <MainMessage>
        {errorMessage}
      </MainMessage>
      <ActionMessage isLight={isLight ?? false}>
        {actionMessage}
      </ActionMessage>    
    </Wrapper>
  );
}

export default ErrorMessage;