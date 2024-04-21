import styled from "@emotion/styled";

export const Content = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  padding: 10px;
  background-color: ${p => p.theme.color.bgDark};
  box-shadow: 0px 14px 80px rgba(33, 34, 39, 0.2);
  border-radius: 10px;  
  overflow: hidden;
  font-size: ${p => p.theme.fs.m};
  color: ${p => p.theme.color.textPrimaryLight};
`;

export const LocalDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
`;

export const Label = styled.span`
  color: ${p => p.theme.color.textSecondary};
  font-size: ${p => p.theme.fs.s};
`;

export const Forecast = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;  
  padding: 5px;
  background-color: ${p => p.theme.color.bgDark};
  border-radius: 10px;
  font-size: ${p => p.theme.fs.xxl};
  font-weight: ${p => p.theme.fw.bold};

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


`;

export const Weather = styled.div`
  display: flex;  
  align-items: center;
  justify-content: center;
  column-gap: 15px;
`;

export const WeatherDescriotion = styled.span`
  font-size: ${p => p.theme.fs.l};
`;

export const SunriseSunsetInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  row-gap: 5px;
`;

export const Info = styled.div`
  display: flex;
  justify-content: center;  
  column-gap: 15px;

  & > span {
    display: flex;
    align-items: center;
    column-gap: 5px;
  }



`
