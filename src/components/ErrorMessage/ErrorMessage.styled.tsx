import styled from "@emotion/styled";

type Props = {
  isVisible: boolean;
}

export const TextMessage = styled.p<Props>`
  color: ${p => p.theme.color.error};
  font-size: ${p => p.theme.fs.m};
  font-weight: ${p => p.theme.fw.semiBold};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  opacity: ${p => p.isVisible ? 1 : 0};
  transition: opacity 0.5s ease;   

  @media screen and (${p => p.theme.mq.desktop}) {
    font-size: ${p => p.theme.fs.l};
  }   
`;