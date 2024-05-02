import styled from "@emotion/styled";

export const CardWrapper = styled.article`
  width: calc(50% - 2.5px); 
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 5px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgLight};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;    
    filter: blur(5px);
    z-index: -1;
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    max-width: calc(50% - 50px);
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    max-width: calc(25% - 15px);
    padding: 10px;
    row-gap: 20px;  
  }  
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  column-gap: 5px;

   @media screen and (${p => p.theme.mq.desktop}) {
    column-gap: 10px;
  } 
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fs.m};
  
  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.l};
  }  
`;

export const Value = styled.h4`
  text-align: center;
  font-size: ${p => p.theme.fs.l};

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.xl};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.xxl};
  }  
`;

export const Description = styled.p`
  font-size: ${p => p.theme.fs.s};
   
  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.m};
  }
`;
