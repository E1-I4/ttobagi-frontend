import React from "react";
import styled from "styled-components";
import "../styles/theme.css";

const AppLayout = ({ children }) => {
  return <Box>{children}</Box>;
};

export default AppLayout;

let Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: 370px;
  height: 100vh;
  background: white;
  box-shadow: 0 0 2rem 0.1rem rgba(0, 0, 0, 0.2);
`;
