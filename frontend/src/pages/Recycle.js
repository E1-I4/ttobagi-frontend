import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";

const Recycle = () => {
  return (
    <div className="Recycle">
      <AppLayout>
        <BinImg src="#"></BinImg>
        <span>투명한 페트병을 버려 볼까요?</span>
      </AppLayout>
    </div>
  );
};

export default Recycle;

let BinImg = styled.img`
  border-radius: 20px;
  width: 85vw;
  height: 80vh;
  margin-bottom: 20px;
  margin: 20px 0 40px 0;
`;
