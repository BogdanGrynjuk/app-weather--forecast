import React, { useCallback, useEffect, useRef } from 'react';
import { Btn, Item, List } from './DropdownOptions.styled';

import { cityType } from 'types';

type Props = {  
  options: [] 
  handleOptionSelect: (option: cityType) => void
  handleClearOptionSelect: () => void
}

const DropdownOptions: React.FC<Props> = ({ options, handleOptionSelect, handleClearOptionSelect }) => {
  
  const ulRef = useRef<HTMLUListElement>(null);

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape" && ulRef.current) {
      handleClearOptionSelect();
    };
  }, [handleClearOptionSelect]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ulRef.current && !ulRef.current.contains(event.target as Node)) {
      handleClearOptionSelect();
    }
  }, [handleClearOptionSelect]);

  useEffect(() => {    
    window.addEventListener('keydown', handleKeyDown);
    document.addEventListener('click', handleClickOutside);
    return () => {      
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    }
  }, [handleClickOutside, handleKeyDown]);
  
  return (
    <List ref={ulRef}>
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

 