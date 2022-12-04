import React from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";

const AlbumItem = ({ animal, userAnimals }) => {
  const navigate = useNavigate();
  const { id, name, image, sil, animal_name, description } = animal || {};

  let userAnimalsIdArr = [];

  userAnimals.map((user) => {
    userAnimalsIdArr.push(user.id);
  });

  const onClick = () => {
    if (!userAnimalsIdArr.includes(animal.id)) return null;
    navigate("/info", {
      state: {
        id,
        name,
        image,
        animal_name,
        description,
      },
    });
  };

  return (
    <a onClick={onClick} id={id}>
      {userAnimalsIdArr.includes(animal.id) ? (
        <ImgCard
          src={image}
          alt={name}
          description={description}
          id={id}
        ></ImgCard>
      ) : (
        <ImgCard src={sil} alt={name} id={id}></ImgCard>
      )}
    </a>
  );
};

export default AlbumItem;

let ImgCard = styled.img`
  border-radius: 25px;
  width: 100%;
  height: 100%;
  background: var(--melange);
  &:hover {
    cursor: pointer;
  }
`;
