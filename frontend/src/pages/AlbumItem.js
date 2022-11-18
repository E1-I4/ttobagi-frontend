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
    <ImgCard>
      <div className="eachAnimal">
        <a onClick={onClick} id={id}>
          {name}
          <img src={`../assets/img/index${id}`} alt={name} />
        </a>
      </div>
    </ImgCard>
  );
};

export default AlbumItem;

let ImgCard = styled.div`
  background: lightgray;
  border-radius: 25px;
  &:hover {
    cursor: pointer;
  }
`;
