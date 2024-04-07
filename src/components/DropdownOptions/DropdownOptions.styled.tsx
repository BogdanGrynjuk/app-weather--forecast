import styled from "@emotion/styled";

import { ITheme } from 'types';

export const List = styled.ul<{theme: ITheme}>`
  position: absolute;
  top: 0;  
  left: 0;  
  width: 100%;
  background-color: ${p => p.theme.color.bgDropdownOptions};
  border-radius: 10px;
  padding: 70px 10px 10px;  
`;

export const Item = styled.li<{theme: ITheme}>`
  &:not(:first-child)::before {
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    margin: 5px 0;
    background-color: ${p => p.theme.color.bgBtnSearch};    
  }  
`;

export const Btn = styled.button<{ theme: ITheme }>`
  width: 100%;
  overflow: hidden;
  text-align: left;
  font-size: ${p => p.theme.fs.s};
  font-weight: ${p => p.theme.fw.semiBold};
  white-space: nowrap;
  background-color: transparent;         
  color: ${p => p.theme.color.textSecondary};
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (${p => p.theme.mq.tablet}){
    font-size: ${p => p.theme.fs.m};
  }

  &:hover{        
    color: ${p => p.theme.color.textPrimaryLight};
  }
`;