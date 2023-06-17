import React from "react";
import styled from "styled-components";
import { ReactComponent as MapSil } from "../assets/svg/mapSil.svg";

export function SillContainer({ animals }) {
  return (
    <Container>
      <Content>
        이곳에는
        <br />
        이런 동물이 서식해요
      </Content>
      <MapSil />
    </Container>
  );
}

const Container = styled.div`
  margin: auto 0 auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 20vh;
`;

const Content = styled.div`
  color: var(--gray);
  margin: auto 20px;
  font-size: 18px;
  font-weight: 700;
  line-height: 27px;
  letter-spacing: -0.03em;
  text-align: left;
  align-items: center;
`;
