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
    padding: 20px;
    padding-left: 290px;
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

  /* .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
  } */

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
    background: ${p => p.theme.color.bgBtnClose}; 
    opacity: 0.5;
    transition: all .5s;

    &-active {
      opacity: 1;
      background: ${p => p.theme.color.bgBtnSearch};
      height: 11px;
      width: 30px;
      border-radius: 10px;
    }
  }       
`;