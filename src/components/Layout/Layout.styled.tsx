import styled from "@emotion/styled";
import { ITheme } from 'types';

export const VideoBG = styled.video`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  object-fit: cover;
  z-index: -1;  
`;

export const Content = styled.div<{ theme: ITheme }>`
  margin: 0 auto;  
  padding: 10px;  
  width: 100%;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (${ p => p.theme.mq.tablet }) {
    padding: 20px;
    max-width: 834px;    
  }

  @media screen and (${ p => p.theme.mq.desktop }) {
    max-width: 1440px;    
  }
`;

