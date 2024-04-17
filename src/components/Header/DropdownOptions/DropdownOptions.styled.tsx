import styled from "@emotion/styled";


export const List = styled.ul`
  position: absolute;
  top: 0;  
  left: 0;  
  width: 100%;
  background-color: ${p => p.theme.color.bgDropdownOptions};
  border-radius: 10px;
  padding: 70px 10px 10px; 
  z-index: 1;
`;

export const Item = styled.li`
  &:not(:first-of-type)::before {
    display: block;
    content: '';
    width: 100%;
    height: 2px;
    margin: 5px 0;
    background-color: ${p => p.theme.color.bgBtnSearch};    
  }  
`;

export const Btn = styled.button`
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