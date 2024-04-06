import React, { ReactNode } from 'react'
import { Content, VideoBG } from './Layout.styled';
import { useTheme } from '@emotion/react';
import { ITheme } from 'types';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const videoSrc: string = `${process.env.PUBLIC_URL}/assets/videos/hero-bg.mp4`;
  const theme = useTheme() as ITheme;

  return (
    <>
      <VideoBG
        autoPlay
        loop
        muted
        preload="auto"
      >
        <source src={videoSrc} type="video/mp4" />
      </VideoBG>
      <Content theme={theme}>
        {children}
      </Content>
    </>
  );
};

export default Layout;
