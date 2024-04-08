import React from 'react';
import { Btn, Item, List } from './DropdownOptions.styled';

import { cityType } from 'types';

type Props = {  
  options: [] 
  handleOptionSelect: (option: cityType) => void
}

const DropdownOptions: React.FC<Props> = ({ options, handleOptionSelect }) => {
  
  return (
    <List>
      {options.map((option: cityType, index: number) => {
        const optionName = (option.local_names && option.local_names.uk) ? option.local_names.uk : option.name;
        const optionArray: string[] = [
          optionName,
          option.country,
          option.state || ''
        ].filter(Boolean);
        return (
          <Item
            key={`option.name-${index}`}>
            <Btn
              type="button"              
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
