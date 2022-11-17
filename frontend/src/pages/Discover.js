import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";

const Discover = () => {
  return (
    <div className="Discover">
      <AppLayout>
        <Title>
          <h2 style={{ margin: 0 }}>페트병 때문에 아파하는</h2>
          <br></br>
          <h2 style={{ margin: 0 }}>붉은박쥐를 발견했어요</h2>
        </Title>
        <ChaImg src="#" href="/recycle"></ChaImg>
        <Button>페트병 치워주기</Button>
      </AppLayout>
    </div>
  );
};

export default Discover;

let Title = styled.div`
  text-align: center;
  margin: 50px 0 30px 0;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  width: 80vw;
  height: 45vh;
  margin-bottom: 20px;
`;

let Button = styled.button`
  font-size: 20px;
  background: transparent;
  border: 1px solid gray;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 80vw;
  height: 10vh;
`;
