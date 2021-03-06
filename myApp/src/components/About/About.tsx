import React from "react";
import { YMaps, Map } from "react-yandex-maps";
import { Placemark } from "react-yandex-maps";

import "./About.css";

const About:React.FC = () => (
  <YMaps>
    <div className="mt-4">
      <Map
        defaultState={{ center: [43.264165, 76.92991], zoom: 12 }}
        className="map"
      >
        <Placemark
          geometry={[43.264165, 76.92991]}
          modules={["geoObject.addon.balloon"]}
          defaultProperties={{
            balloonContent: "MegaPark Almaty",
          }}
        />
        <Placemark
          geometry={[43.2371891, 76.9515006]}
          modules={["geoObject.addon.balloon"]}
          defaultProperties={{
            balloonContent: "БЦ Нурлы Тау",
          }}
          options={{
            preset: "islands#dotIcon",
            iconColor: "red",
          }}
        />
      </Map>
    </div>
  </YMaps>
);

export default About;
