import styled from "@emotion/styled";

type Props = {
  isVisible?: boolean;
  isLight?: boolean;
}

export const Wrapper = styled.div<Props>`
  opacity: ${p => p.isVisible ? 1 : 0};
  transition: opacity 0.5s ease;
`;

export const MainMessage = styled.p`
  color: ${p => p.theme.color.error};
  font-size: ${p => p.theme.fs.m};
  font-weight: ${p => p.theme.fw.semiBold};
  text-overflow: ellipsis;
  overflow: hidden;

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.l};
  }  

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.xl};
  }   
`;

export const ActionMessage = styled.p<Props>`   
  font-size: ${p => p.theme.fs.s}; 
  color: ${p => p.isLight
    ? p.theme.color.textSecondary
    : p.theme.color.textPrimaryDark
  };

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.m};    
  } 
`;