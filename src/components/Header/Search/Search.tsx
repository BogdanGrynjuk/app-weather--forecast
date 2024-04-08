import React, { useEffect, useRef } from 'react';
import { ChangeEvent, FormEvent } from 'react';
import { Btn, Form, Input } from './Search.styled';

type Props = {
  term: string
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void
  handleClearOptionSelect: () => void
  handleFocus: () => void
  handleBlur: () => void
};

const Search: React.FC<Props> = (
  { term, handleInputChange, handleSubmit, handleFocus, handleBlur, handleClearOptionSelect }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleSubmit(event);
   
    if (inputRef.current) {
      inputRef.current.blur();
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.code === "Escape" && inputRef.current) {
      inputRef.current.blur();
      inputRef.current.value = "";
    };
  };
  
  const handleClearForm = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    handleClearOptionSelect();
  };

  useEffect(() => {    
    window.addEventListener('keydown', handleKeyDown);
    return () => {      
      window.removeEventListener('keydown', handleKeyDown);
    }
  }, []);

  return (
    <Form
      onSubmit={handleFormSubmit}>
      <Input
        ref={inputRef}
        type="text"
        value={term}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder="Назва населеного пункту"
      />
      <Btn onClick={handleClearForm}/>
    </Form>
  );
}

export default Search;
