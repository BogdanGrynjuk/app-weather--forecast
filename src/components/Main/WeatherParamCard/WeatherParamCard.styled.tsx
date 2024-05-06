import styled from "@emotion/styled";

export const CardWrapper = styled.article`
  position: relative;
  width: calc(50% - 2.5px); 
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-grow: 1;
  row-gap: 5px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgLight};
  overflow: hidden;
  
  &.extra-card {
    display: none;
  }

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

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background-color: ${p => p.theme.color.bgDropdownOptions};
    
    @media screen and (${p => p.theme.mq.desktop}) {
      height: 45px;
    }      
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    max-width: calc(50% - 50px);
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    &.extra-card {
      display: flex;
    }
    max-width: calc((100% / 3) - 50px);
    padding: 10px;
    /* row-gap: 20px;   */
  }  
`;

export const Header = styled.div`  
  width: 100%;  
  color: ${p => p.theme.color.textPrimaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  z-index: 1;

   @media screen and (${p => p.theme.mq.desktop}) {
    column-gap: 10px;
  } 
`;

export const Title = styled.h3`
  font-size: ${p => p.theme.fs.m};
  font-weight: ${p => p.theme.fw.semiBold};
  
  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.l};
  }  
`;

export const Value = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 5px;
  font-size: ${p => p.theme.fs.l};
  font-weight: ${p => p.theme.fw.bold};

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.xl};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.xxl};
  }  
`;

export const Unit = styled.span`
  font-size: ${p => p.theme.fs.m};
  font-weight: ${p => p.theme.fw.regular};
  
  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.l};
  }  
`;

export const Description = styled.p`
  text-align: center;
  font-size: ${p => p.theme.fs.s};
   
  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.m};
  }
`;
