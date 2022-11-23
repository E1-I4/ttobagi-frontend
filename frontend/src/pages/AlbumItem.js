import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const AlbumItem = ({ animal }) => {
  const navigate = useNavigate();
  const { id, name, image, description } = animal || {};

  const onClick = () => {
    navigate("/info/", {
      state: {
        id,
        name,
        image,
        description,
      },
    });
  };

  return (
    <a onClick={onClick} id={id}>
      <ImgCard
        src={image}
        alt={name}
        description={description}
        id={id}
      ></ImgCard>
    </a>
  );
};

export default AlbumItem;

let ImgCard = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 100%;
  &:hover {
    cursor: pointer;
  }
`;
