import styled from "@emotion/styled";

export const Wrapper = styled.div`  
  margin-top: 50px; 
  height: 500px;
  background: ${p => p.theme.color.bgLight};    
  padding: 10px;
  padding-top: 220px;
  border-radius: 10px;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 
                    calc(50% - 125px - 10px) calc(0% - 250px - 50px - 10px), 
                    calc(50% - 125px - 10px) calc(0% + 250px - 50px + 10px), 
                    calc(50% + 125px + 10px) calc(0% + 250px - 50px + 10px), 
                    calc(50% + 125px + 10px) calc(0% - 250px - 50px - 10px), 
                    calc(50% - 125px - 10px) calc(0% - 250px - 50px - 10px));

  @media screen and (${p => p.theme.mq.tablet}) {
    margin-top: 0;
    margin-left: 50px;
    height: 320px;
    padding-top: 10px;
    padding-left: 220px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 
                    calc(0% - 250px - 50px - 10px) calc(50% - 125px - 10px), 
                    calc(0% - 250px - 50px - 10px) calc(50% + 125px + 10px), 
                    calc(0% + 250px - 50px + 10px) calc(50% + 125px + 10px), 
                    calc(0% + 250px - 50px + 10px) calc(50% - 125px - 10px), 
                    calc(0% - 250px - 50px - 10px) calc(50% - 125px - 10px));   
  }

  @media screen and (${p => p.theme.mq.desktop}) {    
    height: 400px;
    padding-left: 280px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 
                    calc(0% - 300px - 50px - 20px) calc(50% - 150px - 20px), 
                    calc(0% - 300px - 50px - 20px) calc(50% + 150px + 20px), 
                    calc(0% + 300px - 50px + 20px) calc(50% + 150px + 20px), 
                    calc(0% + 300px - 50px + 20px) calc(50% - 150px - 20px), 
                    calc(0% - 300px - 50px - 20px) calc(50% - 150px - 20px));   
  }

  .swiper {
    width: 100%;
    height: 100%;
  }

  .swiper-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic, 
  .swiper-pagination-horizontal.swiper-pagination-bullets.swiper-pagination-bullets-dynamic {
    display: flex;
    bottom: 0;
    align-items: center;
    justify-content: center;
  }

 .swiper-pagination-bullet {
    width: 11px;
    height: 11px;    
    border-radius: 10px;
    background: ${p => p.theme.color.bgDark};
    opacity: 1;    

    &-active {      
      background: ${p => p.theme.color.bgBtnSearch};      
    }
  }       
`;