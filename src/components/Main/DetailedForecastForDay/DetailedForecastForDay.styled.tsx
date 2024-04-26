import styled from "@emotion/styled";

export const Section = styled.section`
  overflow-x: scroll;
  padding-bottom: 10px;

  &::-webkit-scrollbar {
    height: 7px;
    cursor: pointer ;
  }

  &::-webkit-scrollbar-thumb {    
    background-color: ${p => p.theme.color.bgDark};
    border-radius: 6px;        
  }
`;
