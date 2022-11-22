import React from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { useLocation } from "react-router-dom";

const Info = () => {
  const location = useLocation();

  const { name, image, description } = location.state;

  return (
    <div className="Info">
      <AppLayout>
        <Content>
          <a href="/album" style={{ marginTop: 40, marginBottom: 20 }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
        </Content>
        <ChaImg>
          <img src={image} alt={name} />
        </ChaImg>
        <h2 style={{ marginTop: 20, marginBottom: 20 }}>{name}</h2>
        <InfoBox>
          {description.split("\\").map((item) => (
            <Li>{item}</Li>
          ))}
          {/* {description.map((item) => (
            <li>{item.split("\\")}</li>
          ))} */}
        </InfoBox>
      </AppLayout>
    </div>
  );
};

export default Info;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: left;
  width: 85vw;
`;

let ChaImg = styled.div`
  border-radius: 25px;
  width: 60vw;
  height: 40vh;
  margin-bottom: 20px;
`;

let InfoBox = styled.div`
  font-size: 20px;
  background: transparent;
  background: lightgray;
  border-radius: 25px;
  margin-top: 10px;
  padding: 10px;
  width: 80vw;
  height: 25vh;
`;

let Li = styled.ol``;
