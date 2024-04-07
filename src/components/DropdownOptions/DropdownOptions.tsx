import React from 'react';
import { Btn, Item, List } from './DropdownOptions.styled';

import { ITheme, cityType } from 'types';
import { useTheme } from '@emotion/react';

type Props = {  
  options: [] 
  handleOptionSelect: (option: cityType) => void
}

const DropdownOptions: React.FC<Props> = ({ options, handleOptionSelect }) => {
  const theme = useTheme() as ITheme;
  return (
    <List theme={theme}>
      {options.map((option: cityType, index: number) => {
        const optionName = (option.local_names && option.local_names.uk) ? option.local_names.uk : option.name;
        const optionArray: string[] = [
          optionName,
          option.country,
          option.state || ''
        ].filter(Boolean);
        return (
          <Item theme={theme}
            key={`option.name-${index}`}>
            <Btn
              type="button"
              theme={theme}
              onClick={() => handleOptionSelect(option)}
            >
              {optionArray.join(", ")}
            </Btn>
          </Item>
        )
      })}
    </List>
  );
};

export default DropdownOptions;
