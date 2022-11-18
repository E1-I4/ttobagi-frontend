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
          <img
            src="https://post-phinf.pstatic.net/MjAyMDAyMjlfMjY4/MDAxNTgyOTU0Nzg3MjQ4.PBMFV4WrSJmeSUJ56c4C7Vkz_SsQlJ1SByKU18kkJh0g.T7mQnadCWVtEZ448AGk_9kG1HFBAzdztXZcBjvSbduwg.JPEG/%EA%B3%A0%EC%96%91%EC%9D%B4_%EB%82%98%EC%9D%B41.jpg?type=w1200"
            alt={name}
          />
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
