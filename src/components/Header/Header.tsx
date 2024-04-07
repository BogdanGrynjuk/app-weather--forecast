import React from 'react'
import { Wrapper, Location, Name, Line, Form, Details, Content, Input, Btn, DropdownOptions } from './Header.styled';
import { ITheme, cityType } from 'types';
import { useTheme } from '@emotion/react';
import { ChangeEvent, FormEvent } from 'react';

type Props = {
  city: cityType
  term: string
  options: []
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
  handleOptionSelect: (option: cityType) => void
}

const Header: React.FC<Props> = (
  { city, term, options, handleInputChange, handleSubmit, handleOptionSelect }) => {
  const theme = useTheme() as ITheme;
  let cityName: string = '';
  let cityDetails: string[] = [city.country];

  if (city && city?.local_names && city.local_names?.uk) {
    cityName = city.local_names.uk;
  } else {
    cityName = city.name;
  }

  if (city && city?.state) {
    cityDetails.unshift(city.state);
  }

  return (
    <Wrapper theme={theme}>

      <Content>
        <Location theme={theme}>
          <Name theme={theme}>
            {cityName}
          </Name>
          <Details theme={theme}>
            {cityDetails.join(' ')}
          </Details>
        </Location>

        <Form
          theme={theme}
          onSubmit={handleSubmit}>
          <Input theme={theme}
            type="text"
            value={term}
            onChange={handleInputChange}
            placeholder="Назва населеного пункту"
          />
          <Btn theme={theme} />
        </Form>
         

        

       
      </Content>
      
      <Line theme={theme} />
      {options.length > 0 && term &&
        <DropdownOptions>
          {options.map((option: cityType, index: number) => (
            <li key={`option.name-${index}`}>
              <button               
                onClick={() => handleOptionSelect(option)}
              >
                {option?.local_names?.uk}  {option.name},  {option.country}, {option.state}
              </button>
            </li>
          ))}
        </DropdownOptions>
      }

     
       
    </Wrapper>
  );
};

export default Header;


