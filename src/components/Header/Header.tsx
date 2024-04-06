import { Wrapper, Location, Name, Line, Form, Details, Content, Input, Btn } from './Header.styled';
import { ITheme, cityType } from 'types';
import { useTheme } from '@emotion/react';
import { ChangeEvent, FormEvent } from 'react';

type Props = {
  city: cityType
  term: string
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

const Header = ({city, term, handleInputChange, handleSubmit}: Props) => {
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
        <Btn theme={theme}/>
      </Form>
      </Content>
      <Line theme={theme} />
    </Wrapper>
  );
};

export default Header;


