import { Logo, Wrapper, Line, Text, Container } from './Header.styled';
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

  return (
    <Wrapper theme={theme}>

      <Logo theme={theme}>
        <Text theme={theme}>
          Погодний Навігатор
        </Text>
        <Line/>
      </Logo>

      {/* <form onSubmit={handleSubmit}>
          
        <input
          type="text"
          value={term}
          onChange={handleInputChange}
          placeholder="Назва населеного пункту"
        />
        <button type="submit" style={{ color: "black" }}>Search</button>
      </form> */}

      <Container onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={handleInputChange}
          placeholder="Назва населеного пункту"
        />
  <div ></div>
</Container>
    </Wrapper>
  );
};

export default Header;


