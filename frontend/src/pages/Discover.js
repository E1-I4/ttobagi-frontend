import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";

const Discover = () => {
  return (
    <div className="Discover">
      <AppLayout>
        <Title>
          <h2>
            페트병 때문에 아파하는
            <br></br>
            붉은박쥐를 발견했어요
          </h2>
        </Title>
        <ChaImg src="#" href="/recycle"></ChaImg>
        <Button>페트병 치워주기</Button>
      </AppLayout>
    </div>
  );
};

export default Discover;

let Title = styled.div`
  display: flex;
  flex-direction: column;
  width: 85vw;
  text-align: left;
  margin: 50px 0 30px 0;
`;

let ChaImg = styled.img`
  border-radius: 20px;
  width: 85vw;
  height: 45vh;
  margin-bottom: 20px;
`;

let Button = styled.button`
  font-size: 20px;
  background: lightgray;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 85vw;
  height: 60px;
`;
