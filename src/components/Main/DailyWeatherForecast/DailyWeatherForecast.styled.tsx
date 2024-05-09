import styled from "@emotion/styled";

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column; 
`;

export const Section = styled.section`
  color: ${p => p.theme.color.textPrimaryDark};
  width: 100%; 
  height: calc(100% - 16px);
`;

export const SectionTitle = styled.h2`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden; 
`;

export const List = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  @media screen and (${p => p.theme.mq.desktop}) {
    flex-direction: row;
  }
`;

export const Item = styled.li`
   @media screen and (${p => p.theme.mq.desktop}) {
    height: 100%;
    width: calc(100% / 5 - 5px);
  }
`;