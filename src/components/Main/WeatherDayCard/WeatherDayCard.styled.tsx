import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgLight};
  font-size: ${p => p.theme.fs.s};

  @media screen and (${p => p.theme.mq.desktop}) {
    flex-direction: column;
    height: 100%;    
    padding-left: 0;
  }
`;

export const ShortDate = styled.span`  
  font-size: 16px;
  font-weight: ${p => p.theme.fw.bold}; 
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.m};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    display: none;
  }
`;

export const LongDate = styled.div`
  display: none;
  
  & > span:nth-of-type(2) {
    font-size: ${p => p.theme.fs.xl};
    font-weight: ${p => p.theme.fw.bold};
  }

  @media screen and (${p => p.theme.mq.desktop}) {    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
    font-size: ${p => p.theme.fs.m};
    font-weight: ${p => p.theme.fw.semiBold};
    text-align: center;
  }

`;

export const Forecast = styled.div`
  height: 45px;
  display: flex;
  flex-basis: 70%;
  align-items: center;
  
  padding: 5px;  
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgDropdownOptions};
  color: ${p => p.theme.color.textPrimaryLight};

  @media screen and (${p => p.theme.mq.tablet}) {
    height: 50px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    height: 100%;
    width: 100%;
    flex-basis: auto;
    flex-direction: column;    
  }
`;

export const WeatherIcon = styled.div`
  height: 100%;

  @media screen and (${p => p.theme.mq.desktop}) {
    height: 60px;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`  

export const WeatherDescription = styled.span`
  font-size: 16px;
  font-weight: ${p => p.theme.fw.bold};
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.m};
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    text-align: center;
  }
`;

export const Temp = styled.div`
  display: flex;
  gap: 10px;
  font-size: ${p => p.theme.fs.s};

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: 16px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    justify-content: center;
  }
`;

export const Marker = styled.span`
  font-size: ${p => p.theme.fs.s};
  font-weight: ${p => p.theme.fw.regular};  
  color: ${p => p.theme.color.textSecondary};  
`;

export const WeatherCharacteristics = styled.div`
  display: none;

  @media screen and (${p => p.theme.mq.desktop}) {
    display: flex;
    flex-direction: column;
    row-gap: 5px;

    &::after, &::before{
      content: "";
      height: 1px;
      width: 100%;
      background-color: ${p => p.theme.color.textPrimaryLight};
    }
  }  
`;

export const Characteristic = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

export const Value = styled.span`
  flex-basis: 75%;
  font-size: 16px;
  text-align: right;
`;
