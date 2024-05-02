import styled from "@emotion/styled";

export const Section = styled.section`
  color: ${p => p.theme.color.textPrimaryDark};
  width: 100%;  

.swiper-slide {  
  padding-bottom: 15px;
  height: auto; 
}
 
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

export const TempItem = styled.div`
  display: flex;
  flex-direction: column;  
  width: 40px;
  text-align: center;
  font-size: ${p => p.theme.fs.s};
  font-weight: ${p => p.theme.fw.semiBold};


  @media screen  and (${p => p.theme.mq.tablet}) {
    width: 50px;
  }

  @media screen  and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.m};
    width: 60px;
  }
`;

export const Date = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${p => p.theme.fs.s}; 
   
  & :nth-of-type(2){
    font-size: ${p => p.theme.fs.l};
    font-weight: ${p => p.theme.fw.bold};    
  }

   &.isDayOff {
    color: rgba(220, 20, 60, 1);
   }

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.m};

    & :nth-of-type(2) {
      font-size: ${p => p.theme.fs.xl};      
    }
  }
`;

export const WeatherParamList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  flex-wrap: wrap;

  @media screen and (${p => p.theme.mq.tablet}) {
    gap: 10px;
    
  }

  @media screen and (${p => p.theme.mq.desktop}) {
    gap: 20px;
  }
`