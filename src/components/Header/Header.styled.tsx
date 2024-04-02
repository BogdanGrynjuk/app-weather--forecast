import styled from '@emotion/styled';
import { ITheme } from 'types';

export const Wrapper = styled.header<{ theme: ITheme }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${p => p.theme.color.bgPrimary};  
`;

export const Location = styled.p<{ theme: ITheme }>`  
  color: ${p => p.theme.color.textPrimary};  
`;

export const Name = styled.span<{ theme: ITheme }>`
  font-size: ${p => p.theme.fs.xl};
  font-weight: ${p => p.theme.fw.semiBold};  
`;

export const Details = styled.span<{ theme: ITheme }>`
  font-size: ${p => p.theme.fs.m};
`;