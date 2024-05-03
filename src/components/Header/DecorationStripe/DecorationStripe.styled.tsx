import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';


const progressOne = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }  
  40% {
    transform: translateX(var(--translate-x));
    opacity: 1;
  }
  50%, 100% {
    transform: translateX(var(--translate-x));
    opacity: 0;
  }
`;

const progressTwo = keyframes`
  0% {
    transform: scaleX(0);
    opacity: .5;
  }
  40% {
    transform: scaleX(1);
    opacity: 1;
  } 
  50%, 100% {
    transform: scaleX(1);
    opacity: 0;
  }
`;

export const Stripe = styled.div`
  position: absolute;
  bottom: 8px;
  left: calc(50% + 10px);
  width: calc(100% - 20px);
  margin-left: -50%;
  height: 3px;
  border-radius: 50%;

  @media screen and (${p => p.theme.mq.tablet}) {
    left: calc(50% + 20px);
    bottom: 15px;
    width: calc(100% - 40px);
  }
  
  &:before {
    animation: ${progressTwo} 8s infinite linear;   
    transform-origin: 0 0;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    border-top-left-radius: 50%;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;    
    border-bottom-left-radius: 50%;
    background: linear-gradient(
      to right, 
      rgba(255, 255, 255, 0.1) 10%, 
      rgba(255, 255, 255, 0.4) 80%, 
      rgba(255, 255, 255, 1));

    @media screen and (${p => p.theme.mq.tablet}) {
      animation-duration: 12s;
    }

    @media screen and (${p => p.theme.mq.desktop}) {
      animation-duration: 16s;
    }
  }
  
  &:after {
    --translate-x: calc(320px - 10px - 10px - 40px);
    content: "";
    position: absolute;
    animation: ${progressOne} 8s infinite linear;    
    transform-origin: 90% 50%;
    margin-left: -24px;
    top: -6px;
    width: 40px;
    height: 15px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
    filter: blur(5px);
    box-shadow: 0 0 10px 6px rgba(255, 255, 255, 0.4),
                -20px 0 15px 4px rgba(255, 255, 255, 0.3),
                -40px 0 15px 2px rgba(255, 255, 255, 0.2),
                -60px 0 10px 1px rgba(255, 255, 255, 0.1),
                -80px 0 10px 1px rgba(255, 255, 255, 0.05);
                
    @media screen and (${p => p.theme.mq.tablet}) {
      --translate-x: calc(768px - 20px - 20px - 50px);      
      animation-duration: 12s;
    }

     @media screen and (${p => p.theme.mq.desktop}) {
      --translate-x: calc(1280px - 20px - 20px - 50px);      
      animation-duration: 16s;
    }
  }
`;