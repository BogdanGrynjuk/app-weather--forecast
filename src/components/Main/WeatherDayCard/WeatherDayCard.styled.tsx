import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgLight};
  font-size: ${p => p.theme.fs.s};
`;

export const Date = styled.span`
  font-size: 16px;
  font-weight: ${p => p.theme.fw.bold}; 
  
  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.m};
  }
`;

export const Forecast = styled.div`
  height: 45px;
  display: flex;
  flex-basis: 70%;
  align-items: center;
  gap: 5px;
  padding: 5px;  
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgDropdownOptions};
  color: ${p => p.theme.color.textPrimaryLight};

  @media screen and (${p => p.theme.mq.tablet}) {
    height: 50px;
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    height: 60px;
  }
`;

export const WeatherIcon = styled.div`
  height: 100%;
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
`;

export const Temp = styled.div`
  display: flex;
  gap: 10px;
  font-size: ${p => p.theme.fs.s};
  font-weight: ${p => p.theme.fw.bold};

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.m};
  }
`;

export const Marker = styled.span`
  font-size: ${p => p.theme.fs.s};
  font-weight: ${p => p.theme.fw.regular};  
  color: ${p => p.theme.color.textSecondary};  
`;
