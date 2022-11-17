import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { useNavigate } from "react-router-dom";

const Discover = () => {
  const navigate = useNavigate();
  const navigateToRecyclePage = () => {
    navigate("/recycle");
  };

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
        <ChaImg></ChaImg>
        <Button onClick={navigateToRecyclePage}>페트병 치워주기</Button>
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
  height: 55vh;
  margin-bottom: 20px;
`;

let Button = styled.button`
  font-size: 20px;
  background: #eFF9900;
  border: none;
  border-radius: 20px;
  margin-top: 10px;
  padding: 10px;
  &:hover {
    cursor: pointer;
  }
  width: 85vw;
  height: 60px;
  font-size: 20px;
  font-weight: 700;
  color: var(--darkgray);
`;
