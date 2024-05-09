import styled from "@emotion/styled";


export const VideoBG = styled.video`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;  
`;

export const Content = styled.div`
  margin: 0 auto;  
  padding: 10px;  
  width: 100%;
  width: 320px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  
  @media screen and (${ p => p.theme.mq.tablet }) {
    padding: 20px;
    width: 768px;
    row-gap: 20px;
  }

  @media screen and (${ p => p.theme.mq.desktop }) {
    width: 1280px;    
  }
`;

