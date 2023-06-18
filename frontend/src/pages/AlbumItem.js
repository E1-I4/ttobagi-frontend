import React from "react";
import { useNavigate, Link } from "react-router-dom";
import styled from "styled-components";

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
    <Link onClick={onClick} id={id}>
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
    </Link>
  );
};

export default AlbumItem;

let ImgCard = styled.img`
  width: 100%;
  height: 100%;
  background: var(--melange);
  border-radius: 25px;

  &:hover {
    cursor: pointer;
  }
`;
