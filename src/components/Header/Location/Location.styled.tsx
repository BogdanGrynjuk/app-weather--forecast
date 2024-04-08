import styled from '@emotion/styled';

export const Wrapper = styled.div`
  position: relative;
  width: calc(100% - 50px - 10px);  
`;

export const Settlement = styled.h1` 
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

export const Region = styled.p`   
  font-size: ${p => p.theme.fs.s};
  color: ${p => p.theme.color.textSecondary};

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.m};    
  } 
`;