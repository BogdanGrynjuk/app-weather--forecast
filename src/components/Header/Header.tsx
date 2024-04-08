import React from 'react'
import { Wrapper, Content } from './Header.styled';
import { cityType } from 'types';
import { ChangeEvent, FormEvent } from 'react';
import DropdownOptions from 'components/Header/DropdownOptions';
import Location from './Location';
import Search from './Search';
import DecorationStripe from './DecorationStripe';

type Props = {
  city: cityType
  term: string
  options: []
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleOptionSelect: (option: cityType) => void
}

const Header: React.FC<Props> = (
  { city,
    term,
    options,
    handleInputChange,
    handleSubmit,
    handleOptionSelect
  }) => {  

  return (
    <Wrapper>
      <Content>
        <Location city={city} />
        <Search
          term={term}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
        />
      </Content>
      
      <DecorationStripe />
      
      {options.length > 0 && term &&
        <DropdownOptions
          options={options}
          handleOptionSelect={handleOptionSelect}
        />
      }

     
       
    </Wrapper>
  );
};

export default Header;


