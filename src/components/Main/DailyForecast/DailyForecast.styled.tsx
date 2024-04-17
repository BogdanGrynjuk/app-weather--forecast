import styled from "@emotion/styled";



export const Wrapper = styled.div`
  width: 95%;
  
  max-width: 800px;
  margin-left: auto;
  background: ${p => p.theme.color.bgLight};
    
  padding: 10px;
    border-radius: 10px;
    height: 400px;
  transition: all .3s;
  
   
  @media screen and (max-width: 992px) {
    max-width: 680px;
        height: 400px;
  }
  
  @media screen and (max-width: 768px) {
    min-height: 500px;
    height: auto;
    margin: 180px auto;
  }
  
  
  @media screen and (max-height: 500px) and (min-width: 992px) {
        height: 350px;
  }

  .swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`

