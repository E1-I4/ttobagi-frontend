import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import AppLayout from "../styles/AppLayout";
import { BACKEND_URL } from "../utils/Urls";
import { SillContainer } from "./SilContainer";
import arrowLeft from "../assets/img/arrowLeft.png";

const { kakao } = window;

const Map = () => {
  const [animals, setAnimals] = useState({});
  const navigate = useNavigate();

  const fetchData = async () => {
    const { data } = await axios
      .get(`${BACKEND_URL}/api/animals/`)
      .catch(function (error) {
        if (error.response) {
          console.error(error.response.data);
          console.error(error.response.status);
          console.error(error.response.headers);
        } else if (error.request) {
          console.error(error.request);
        } else {
          console.error("Error", error.message);
        }
      });
    setAnimals(data);
  };

  useEffect(() => {
    fetchData();

    // MARK: 카카오맵 생성
    var mapContainer = document.getElementById("map"),
      mapOption = {
        center: new kakao.maps.LatLng(33.373701, 126.570667),
        level: 11, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption);

    // MARK: 현위치 (geolocation) 구현

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude,
          lon = position.coords.longitude;

        var locPosition = new kakao.maps.LatLng(lat, lon),
          message = '<div style="padding:5px;">여기에 계신가요?</div>';

        displayMarker(locPosition, message);
      });
    } else {
      var locPosition = new kakao.maps.LatLng(33.373701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    // MARK: 인포윈도우 구현

    function displayMarker(locPosition, message) {
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent =
          '<div style="padding:5px;">여기 계신가요?<br><a href="https://map.kakao.com/link/map/현위치,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/현위치,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>',
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      kakao.maps.event.addListener(marker, "click", function () {
        infowindow.open(map, marker);
      });

      map.setCenter(locPosition);
    }

    // MARK: 마커(핀) 여러 개 생성

    var positions = [
      {
        id: 1,
        title: "제주특별자치도 제주시 아라일동 산 66-5",
        content: "<div>붉은박쥐</div>",
        latlng: new kakao.maps.LatLng(33.424496, 126.558734),
      },
      {
        id: 2,
        title: "제주특별자치도 제주시 오등동 산 182",
        content: "<div>제주검독수리</div>",
        latlng: new kakao.maps.LatLng(33.376665, 126.542212),
      },
      {
        id: 3,
        title: "제주특별자치도 서귀포시 상효동 산 1-2",
        content: "<div>비바리뱀</div>",
        latlng: new kakao.maps.LatLng(33.34696, 126.545547),
      },
      {
        id: 4,
        title: "제주특별자치도 서귀포시 성산읍 성산리 78",
        content: "<div>나팔고둥</div>",
        latlng: new kakao.maps.LatLng(33.4587135, 126.9390786),
      },
      {
        id: 5,
        title: "제주특별자치도 서귀포시 대정읍 상모리 2973-8",
        content: "<div>갯게</div>",
        latlng: new kakao.maps.LatLng(33.218044, 126.264616),
      },
    ];

    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      var imageSize = new kakao.maps.Size(24, 35);
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      let markerId = positions[i].id;

      var marker = new kakao.maps.Marker({
        map: map,
        position: positions[i].latlng,
        title: positions[i].title,
        image: markerImage,
        id: markerId,
      });

      var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content,
      });

      kakao.maps.event.addListener(
        marker,
        "mouseover",
        makeOverListener(map, marker, infowindow)
      );
      kakao.maps.event.addListener(
        marker,
        "mouseout",
        makeOutListener(infowindow)
      );

      kakao.maps.event.addListener(marker, "click", function navi() {
        navigate("/discover", {
          state: {
            id: markerId,
          },
        });
      });
    }

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
        <div></div>;
      };
    }

    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
        <div></div>;
      };
    }
  }, []);

  return (
    <div className="Map">
      <AppLayout>
        <Background>
          <Content>
            <Link href="/" style={{ marginTop: 50, marginBottom: 10 }}>
              <img src={arrowLeft} alt="arrow-left" />
            </Link>
            <div
              style={{
                fontWeight: 800,
                fontSize: 26,
                color: "var(--darkgray)",
                margin: "10px 0 10px 0",
                lineHeight: "140%",
              }}
            >
              제주도에서
              <br></br>
              멸종위기 동물을 찾아봐요
            </div>
            <span style={{ fontSize: 12, color: "var(--lightgray)" }}>
              내 위치가 표시될 때까지 잠시만 기다려주세요
            </span>
            <br></br>
          </Content>
          <MapContainer id="map"></MapContainer>
          <SillContainer animals={animals}></SillContainer>
        </Background>
      </AppLayout>
    </div>
  );
};

export default Map;

let Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 100vh;
  background: white;
  letter-spacing: -0.03em;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0 20px;
`;

let MapContainer = styled.div`
  width: 310px;
  height: 380px;
  margin: 0 20px;
  border-radius: 20px;
`;
