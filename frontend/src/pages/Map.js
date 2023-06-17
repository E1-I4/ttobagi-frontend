import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
import AppLayout from "../components/AppLayout";
import { BACKEND_URL } from "../utils/Urls";
import { SillContainer } from "./SilContainer";
import arrowLeft from "../assets/img/arrowLeft.png";

const { kakao } = window;

const Map = () => {
  const navigate = useNavigate();

  const [animals, setAnimals] = useState({});
  const fetchData = async () => {
    const { data } = await axios
      .get(`${BACKEND_URL}/api/animals/`)
      .catch(function (error) {
        // error 확인 함수
        if (error.response) {
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log(error.request);
        } else {
          console.log("Error", error.message);
        }
      });
    setAnimals(data);
  };

  useEffect(() => {
    fetchData();

    console.log(animals);

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
      var iwContent =
          '<div style="padding:5px;">여기 계신가요?<br><a href="https://map.kakao.com/link/map/현위치,33.450701,126.570667" style="color:blue" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/현위치,33.450701,126.570667" style="color:blue" target="_blank">길찾기</a></div>',
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

    // 마커 이미지의 이미지 주소입니다
    var imageSrc =
      "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";

    for (let i = 0; i < positions.length; i++) {
      // 마커 이미지의 이미지 크기 입니다
      var imageSize = new kakao.maps.Size(24, 35);

      // let Id = animals[i].id;
      // console.log(Id);

      // 마커 이미지를 생성합니다
      var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      // 마커를 생성할 때 필요한 position 을 미리 설정해놓습니다
      // var latlng = new kakao.maps.LatLng(animal.latitude, animal.longtitude);

      let markerId = positions[i].id;

      // 마커를 생성합니다
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: positions[i].latlng, // 마커를 표시할 위치
        title: positions[i].title, // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        image: markerImage, // 마커 이미지
        id: markerId,
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

      kakao.maps.event.addListener(marker, "click", function navi() {
        navigate("/discover", {
          state: {
            id: markerId,
          },
        });
      });
    }

    // 인포윈도우를 표시하는 클로저를 만드는 함수입니다
    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
        <div></div>;
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수입니다
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
        // 여기에 이곳에는 이런동물이 서식해요 html 태그 다시 아무내용도 없이 만들어줌.
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
  width: 350px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  // align-items: center;
  background: white;
  letter-spacing: -0.03em;
`;

let Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-contents: left;
  width: 100%;
  margin: 0 20px;
`;

let MapContainer = styled.div`
  border-radius: 20px;
  width: 310px;
  height: 380px;
  margin: 0 20px;
`;
