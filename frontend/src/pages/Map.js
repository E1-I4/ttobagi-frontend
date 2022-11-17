/* global kakao */
import React, { useEffect } from "react";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    ////////// 카카오맵 생성 ////////////////

    var mapContainer = document.getElementById("map"), // 지도를 표시할 div
      mapOption = {
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 10, // 지도의 확대 레벨
      };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    /////////// 현위치 (geolocation) 구현 ////////////////

    // HTML5의 geolocation으로 사용할 수 있는지 확인합니다
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        var lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        var locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      var locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      var iwContent = message, // 인포윈도우에 표시할 내용
        iwRemoveable = true;

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: iwContent,
        removable: iwRemoveable,
      });

      // 인포윈도우를 마커위에 표시합니다
      infowindow.open(map, marker);

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }

    /////////// 마커(핀) 여러 개 생성 ////////////////

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "붉은박쥐",
        latlng: new kakao.maps.LatLng(33.424496, 126.558734),
      },
      {
        title: "제주검독수리",
        latlng: new kakao.maps.LatLng(33.376665, 126.542212),
      },
      {
        title: "비바리뱀",
        latlng: new kakao.maps.LatLng(33.34696, 126.545547),
      },
      {
        title: "나팔고둥",
        latlng: new kakao.maps.LatLng(126.545547, 126.94076),
      },
      {
        title: "갯게",
        latlng: new kakao.maps.LatLng(33.218044, 126.264616),
      },
      {
        title: "팔색조",
        latlng: new kakao.maps.LatLng(33.452352, 126.917965),
      },
    ];

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (var i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
      });
    }
  }, []);

  return (
    <div className="Map">
      <AppLayout>
        <Content>
          <a href="/" style={{ marginTop: 40, marginBottom: 10 }}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </a>
          <h2 style={{ marginBottom: 30 }}>
            제주도에서
            <br></br>
            멸종위기동물을 찾아봐요
          </h2>
        </Content>
        <MapContainer id="map"></MapContainer>
      </AppLayout>
    </div>
  );
};

export default Map;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: left;
  width: 85vw;
`;

let MapContainer = styled.div`
  border-radius: 20px;
  width: 85vw;
  height: 50vh;
`;

// 고정 핀 찍기
// var markerPosition = new kakao.maps.LatLng(33.385221, 126.524237);
// var marker = new kakao.maps.Marker({
//   position: markerPosition,
// });
// marker.setMap(map);

// 지도 그리기
// useEffect(() => {
//   const container = document.getElementById("map");
//   const options = {
//     center: new window.kakao.maps.LatLng(33.385221, 126.524237),
//     level: 11,
//   };
//   const map = new window.kakao.maps.Map(container, options);
//   console.log("loading kakaomap");
// }, []);
