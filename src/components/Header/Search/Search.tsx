import React from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Btn, Form, Input } from './Search.styled';

type Props = {
  term: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
};

const Search: React.FC<Props> = ({ term, handleInputChange, handleSubmit }) => {
  return (
    <Form
      onSubmit={handleSubmit}>
      <Input
        type="text"
        value={term}
        onChange={handleInputChange}
        placeholder="Назва населеного пункту"
      />
      <Btn />
    </Form>
  );
}

export default Search;
