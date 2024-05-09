import React from 'react';
import ErrorMessage from 'components/ErrorMessage';

import { IError } from 'types';
import { Wrapper } from './Error.styled';

type Props = {
  error: IError
};

const Error: React.FC<Props> = ({ error }) => {
  return (
    <Wrapper>
      <ErrorMessage error={error} />      
    </Wrapper>
  );
}

export default Error;
