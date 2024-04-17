import styled from "@emotion/styled";

export const Content = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 250px;
  height: 250px;
  padding: 10px;
  background-color: ${p => p.theme.color.bgDark};
  box-shadow: 0px 14px 80px rgba(33, 34, 39, 0.2);
  border-radius: 10px;  
  overflow: hidden;
`;