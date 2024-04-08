import styled from "@emotion/styled";

export const Wrapper = styled.header`  
  position: relative; 
  padding: 10px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgDark};

  @media screen and (${p => p.theme.mq.tablet}) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;  
  align-items: center;
  height: 60px;
`;