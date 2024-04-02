import { Details, Location, Name, Wrapper } from './Header.styled';
import { ITheme, cityType } from 'types';
import { useTheme } from '@emotion/react';

type Props = {
  city: cityType
   
}


const Header = ({city}: Props) => {
  const theme = useTheme() as ITheme;
  return (
    <Wrapper theme={theme}>
      <Location theme={theme}>
        <Name theme={theme}>
          {(city && city?.local_names && city.local_names?.uk)
            ? city.local_names.uk
            : city.name
          }
        </Name>
        <Details theme={theme}> ({city.state} {city.country})</Details>        
      </Location>
    </Wrapper>
  );
};

export default Header;


