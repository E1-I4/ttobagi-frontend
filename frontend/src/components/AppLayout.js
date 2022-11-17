import React from "react";
import styled from "styled-components";
import "../styles/theme.css";

const AppLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AppLayout;

let Box = styled.div`
  font-family: "Pretendard-Regular";
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  color: var(--darkgray);
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
