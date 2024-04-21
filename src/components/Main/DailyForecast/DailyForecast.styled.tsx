import styled from "@emotion/styled";



export const Wrapper = styled.div`
  
  margin-top: 50px;
  width: 100%;
  height:  auto;
  background: ${p => p.theme.color.bgLight};    
  padding: 10px;
  padding-top: 230px;
  border-radius: 10px;

 

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

