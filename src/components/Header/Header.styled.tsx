import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { ITheme } from 'types';

const progress1 = keyframes`
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

const progress2 = keyframes`
  0% {
    transform: translateX(0);
    opacity: 0;
  }  
  40% {
    transform: translateX(300px);
    opacity: 1;
  }
  50%, 100% {
    transform: translateX(300px);
    opacity: 0;
  }
`;

export const Wrapper = styled.header<{ theme: ITheme }>`  
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 10px;
  background-color: ${p => p.theme.color.bgPrimary};

`;
export const Logo = styled.span<{ theme: ITheme }>`
  position: relative;
  
`;

export const Text = styled.h1<{ theme: ITheme }>`
  margin-bottom: 10px;
  font-size: ${p => p.theme.fs.xl};
  font-weight: ${p => p.theme.fw.semiBold};
  color: ${p => p.theme.color.textPrimary};
`;

export const Line = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 100%;
  margin-left: -50%;
  height: 3px;
  border-radius: 50%;
  
  &:before {
    animation: ${progress1} 8s infinite linear;   
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
  }
  
  &:after {
    content: "";
    position: absolute;
    animation: ${progress2} 8s infinite linear;    
    transform-origin: 90% 50%;
    margin-left: -24px;
    top: 0;
    width: 10%;
    height: 5px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.55);
    filter: blur(5px);
    box-shadow: 0 0 5px 3px rgba(255, 255, 255, 0.4),
                -10px 0 5px 2px rgba(255, 255, 255, 0.3),
                -20px 0 5px 1px rgba(255, 255, 255, 0.2),
                -30px 0 3px 1px rgba(255, 255, 255, 0.1),
                -40px 0 3px 1px rgba(255, 255, 255, 0.05);
  }
`;

export const Container = styled.form`
  position: absolute;  
  right: 20px;
  bottom: 50%;
  width: 300px;


  & div {
    position: absolute;
    margin: auto;
    margin-right: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 70px;
    height: 70px;
    background: rgb(220, 20, 60);
    border-radius: 50%;
    transition: all 1s;
    z-index: 4;
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.4);
    // box-shadow: 0 0 25px 0 crimson;
    &:hover {
      cursor: pointer;
    }
    &::before {
      content: "";
      position: absolute;
      margin: auto;
      top: 24px;
      right: 0;
      bottom: 0;
      left: 24px;
      width: 12px;
      height: 3px;
      background-color: white;
      transform: rotate(45deg);
      transition: all .5s;
    }
    &::after {
      content: "";
      position: absolute;
      margin: auto;
      top: -5px;
      right: 0;
      bottom: 0;
      left: -5px;
      width: 25px;
      height: 25px;
      border-radius: 50%;
      border: 3px solid #ffffff;
      transition: all 0.5s;
    }
  }
  input {
    
    position: absolute;
    margin: auto;
    margin-right: 5px;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    outline: none;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background: rgb(220, 20, 60);
    color: white;
    text-shadow: 0 0 10px crimson;
    padding: 0 80px 0 20px;
    border-radius: 10px;
    box-shadow: 0 0 25px 0 crimson,
                0 20px 25px 0 rgba(0, 0, 0, 0.2);
  
    transition: all 1s;
    opacity: 0;
    z-index: 5;
    font-weight: bolder;    
    &:hover {
      cursor: pointer;
    }
    &:focus {
      width: 300px;
      opacity: 1;
      cursor: text;
    }
    &:focus ~ div {
      /* right: -250px; */
      background: #151515;
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
        background: white;
        border-radius: 0%;
        transform: rotate(-45deg);
      }
    }
    &::placeholder {
      color: white;
      opacity: 0.5;
      font-weight: bolder;
    }
  }
`