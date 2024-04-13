import React, { useState } from 'react'
import { Wrapper, Content } from './Header.styled';
import { cityType } from 'types';
import { ChangeEvent, FormEvent } from 'react';
import DropdownOptions from 'components/Header/DropdownOptions';
import Location from './Location';
import Search from './Search';
import DecorationStripe from './DecorationStripe';
import ErrorMessage from 'components/ErrorMessage';

type Props = {
  city: cityType | null
  term: string
  options: []
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleOptionSelect: (option: cityType) => void
  handleClearOptionSelect: () => void
}

const Header: React.FC<Props> = (
  { city,
    term,
    options,
    handleInputChange,
    handleSubmit,
    handleOptionSelect,
    handleClearOptionSelect
  }) => { 
  const [isVisible, setIsVisible] = useState<boolean>(true);

  const handleFocus = () => {
    setIsVisible(false);
  };
  const handleBlur = () => {
    setIsVisible(true);
  };

  return (
    <Wrapper>
      <Content>
        {city 
          ? <Location isVisible={isVisible} city={city} />
          : <ErrorMessage isVisible={isVisible}>Локацію не знайдено</ErrorMessage>
        }
        <Search
          term={term}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          handleClearOptionSelect={handleClearOptionSelect}
          handleFocus={handleFocus}
          handleBlur={handleBlur}
        />
      </Content>
      
      <DecorationStripe />
      
      {options.length > 0 && term &&
        <DropdownOptions
          options={options}
          handleOptionSelect={handleOptionSelect}
          handleClearOptionSelect={handleClearOptionSelect}
        />
      }
       
    </Wrapper>
  );
};

export default Header;


