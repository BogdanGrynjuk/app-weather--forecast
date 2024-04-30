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
  margin-bottom: 5px;
  font-size: ${p => p.theme.fs.m};
  font-weight: ${p => p.theme.fw.semiBold};
  letter-spacing: -1px;

 @media screen and (${p => p.theme.mq.desktop}) {
  font-size: ${p => p.theme.fs.l};
  letter-spacing: 0;
 }
`;



export const TempItem = styled.div`
  display: flex;
  flex-direction: column;  
  width: 40px;
  text-align: center;

  @media screen  and (${p => p.theme.mq.tablet}){
    width: 50px;
  }

  @media screen  and (${p => p.theme.mq.desktop}){
    width: 60px;
  }
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: ${p => p.theme.fs.s};
   
  & :nth-child(2){
    font-size: ${p => p.theme.fs.l};
    font-weight: ${p => p.theme.fw.bold};
  }

  @media screen and (${p => p.theme.mq.tablet}) {
    font-size: ${p => p.theme.fs.m};

    & :nth-child(2){
      font-size: ${p => p.theme.fs.xl};      
  }
  }
`
