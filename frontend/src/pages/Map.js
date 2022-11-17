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
        center: new kakao.maps.LatLng(33.373701, 126.570667), // 지도의 중심좌표
        level: 11, // 지도의 확대 레벨
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

      var locPosition = new kakao.maps.LatLng(33.373701, 126.570667),
        message = "geolocation을 사용할수 없어요..";

      displayMarker(locPosition, message);
    }

    /////////// 인포윈도우 구현 ////////////////

    // 지도에 마커와 인포윈도우를 표시하는 함수입니다
    function displayMarker(locPosition, message) {
      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map,
        position: locPosition,
      });

      // 마커를 클릭했을 때 마커 위에 표시할 인포윈도우를 생성합니다
      var iwContent = '<div style="padding:5px;">여기 계신가요?</div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        // removeable 속성을 ture 로 설정하면 인포윈도우를 닫을 수 있는 x버튼이 표시됩니다
        iwPosition = new kakao.maps.LatLng(33.450701, 126.570667);

      // 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      // 마커에 클릭이벤트를 등록합니다
      kakao.maps.event.addListener(marker, "click", function () {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);
      });

      // 지도 중심좌표를 접속위치로 변경합니다
      map.setCenter(locPosition);
    }

    /////////// 마커(핀) 여러 개 생성 ////////////////

    // 마커를 표시할 위치와 title 객체 배열입니다
    var positions = [
      {
        title: "제주특별자치도 제주시 아라일동 산 66-5",
        content: "<div>붉은박쥐</div>",
        latlng: new kakao.maps.LatLng(33.424496, 126.558734),
      },
      {
        title: "제주특별자치도 제주시 오등동 산 182",
        content: "<div>제주검독수리</div>",
        latlng: new kakao.maps.LatLng(33.376665, 126.542212),
      },
      {
        title: "제주특별자치도 서귀포시 상효동 산 1-2",
        content: "<div>비바리뱀</div>",
        latlng: new kakao.maps.LatLng(33.34696, 126.545547),
      },
      {
        title: "제주특별자치도 서귀포시 성산읍 성산리 78",
        content: "<div>나팔고둥</div>",
        latlng: new kakao.maps.LatLng(126.545547, 126.94076),
      },
      {
        title: "제주특별자치도 서귀포시 대정읍 상모리 2973-8",
        content: "<div>갯게</div>",
        latlng: new kakao.maps.LatLng(33.218044, 126.264616),
      },
      {
        title: "제주특별자치도 서귀포시 성산읍 성산리 78",
        content: "<div>팔색조</div>",
        latlng: new kakao.maps.LatLng(33.452352, 126.917965),
      },
      {
        title: "제주특별자치도 제주시 용담이동 2002",
        content: "<div>뜸부기</div>",
        latlng: new kakao.maps.LatLng(33.507071, 126.492764),
      },
      {
        title: "제주특별자치도 제주시 조천읍 교래리 385-1",
        content: "<div>검은머리갈매기</div>",
        latlng: new kakao.maps.LatLng(33.44456, 126.6706021),
      },
      {
        title: "제주특별자치도 서귀포시 색달동 1452",
        content: "<div>큰말똥가리</div>",
        latlng: new kakao.maps.LatLng(33.265844, 126.402451),
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
      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: positions[i].content, // 인포윈도우에 표시할 내용
      });
      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
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
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
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
