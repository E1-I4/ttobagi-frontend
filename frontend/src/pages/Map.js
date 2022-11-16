/* global kakao */

import React, { useEffect } from "react";

const { kakao } = window;

const Map = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.385221, 126.524237),
      level: 10,
    };
    let map = new window.kakao.maps.Map(container, options);
    console.log("loading kakaomap");
  }, []);

  return (
    <div className="Map">
      <span>서식지 지도</span>
      <div
        className="MapContainer"
        id="map"
        style={{ width: 300, height: 400 }}
      ></div>
    </div>
  );
};

export default Map;
