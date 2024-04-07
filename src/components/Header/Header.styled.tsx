import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ITheme } from 'types';

const progress = keyframes`
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

const progress2 = keyframes`
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

export const Wrapper = styled.header<{ theme: ITheme }>`  
  position: relative; 
  padding: 10px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgDark};

  @media screen and (${p => p.theme.mq.tablet}) {
    padding: 20px;
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;  
  align-items: center;
  height: 60px;
`;

export const Location = styled.div <{ theme: ITheme }>`
  position: relative;
  width: calc(100% - 50px - 10px)  
  
`;

export const Name = styled.h1<{ theme: ITheme }>` 
  font-size: ${p => p.theme.fs.l};
  font-weight: ${p => p.theme.fw.semiBold};
  color: ${p => p.theme.color.textPrimaryLight};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;  

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.xl};
  } 
`;

export const Details = styled.p<{ theme: ITheme }>`   
  font-size: ${p => p.theme.fs.s};
  color: ${p => p.theme.color.textSecondary};

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.m};    
  } 
`;

export const Line = styled.div<{ theme: ITheme }>`
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
    animation: ${progress2} 8s infinite linear;   
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
    animation: ${progress} 8s infinite linear;    
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

export const Form = styled.form< { theme: ITheme }>`
  position: absolute;  
  bottom: 50%;  
  right: 0;
  width: 100%;
`;

export const Btn = styled.div<{ theme: ITheme }>`
  position: absolute;
  margin: auto;
  margin-right: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 50px;
  height: 50px;
  background-color: ${p => p.theme.color.bgBtnSearch};
  border-radius: 50%;
  transition: all 1s;
  z-index: 4;

  &:hover {
    cursor: pointer;
  }

  &::before {
    content: "";
    position: absolute;
    margin: auto;
    top: 18px;
    right: 0;
    bottom: 0;
    left: 18px;
    width: 10px;
    height: 3px;
    background-color: ${p => p.theme.color.textPrimaryLight};
    transform: rotate(45deg);
    transition: all 0.5s;
  }

  &::after {
    content: "";
    position: absolute;
    margin: auto;
    top: -5px;
    right: 0;
    bottom: 0;
    left: -5px;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    border: 3px solid ${p => p.theme.color.textPrimaryLight};
    transition: all 0.5s;
  }
`;

export const Input = styled.input<{ theme: ITheme }>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 40px;
  margin: auto;
  margin-right: 5px;
  padding: 0 50px 0 10px;
  outline: none;
  border: none;
  border-radius: 10px;
  font-size: ${p => p.theme.fs.s};
  font-weight: ${p => p.theme.fw.bold};
  color: ${p => p.theme.color.textSecondary};
  background-color: ${p => p.theme.color.bgInputSearch};
  box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  z-index: 5;
  transition: all 1s;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    width: calc(100% - 5px);
    opacity: 1;
    cursor: text;
  }

  &:focus ~ div {
    background-color: ${p => p.theme.color.bgBtnClose};
    z-index: 6;

    &::before {
      top: 0;
      left: 0;
      width: 25px;
    }
    &::after {
      top: 0;
      left: 0;
      width: 25px;
      height: 3px;
      border: none;
      background-color: ${p => p.theme.color.textPrimaryLight};
      border-radius: 0%;
      transform: rotate(-45deg);
    }
  }

  &::placeholder {
    color: ${p => p.theme.color.textSecondary};
    font-size: ${p => p.theme.fs.s};
    font-weight: ${p => p.theme.fw.bold};
   
  }
`;

export const DropdownOptions = styled.ul`
  position: absolute;
  top: 0;  
  left: 0;  
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;

  padding: 70px 10px 10px;
  
   & li {
    

    & button {
      text-align: left;
      width: 100%;
      overflow: hidden;
      background-color: transparent;         
      color: rgba(168, 203, 255, 1);
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;

      &:hover{        
        color: rgba(255, 255, 255, 1);
      }
    }
   }
  
`