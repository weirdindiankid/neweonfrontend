import React, { useEffect } from "react";
import { MapActionButtons } from "./MapActionButtons";
import useWindowDimensions from "./../hooks/windowDimension";
import "./style.scss";

interface Types {
  darkMode: boolean;
  activeSection: string;
  center: any;
  zoom: number;
  screenWidth: number;
}

export const Map: React.FC<Types> = ({
  darkMode,
  activeSection,
  center,
  zoom,
  screenWidth,
}: Types) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (ref?.current) {
      const map = new window.google.maps.Map(ref?.current, {
        center,
        zoom,
        zoomControl: true,
        disableDefaultUI: true,
      });

      // mutiple locations
      const features = [
        {
          position: new window.google.maps.LatLng(center),
          label: "BO",
        },
        {
          position: new google.maps.LatLng(41.510395, -87.644287),
          label: "CH",
        },
        {
          position: new google.maps.LatLng(39.742043, -104.991531),
          label: "DE",
        },
        {
          position: new google.maps.LatLng(34.052235, -118.243683),
          label: "LA",
        },
        {
          position: new google.maps.LatLng(25.761681, -80.191788),
          label: "MI",
        },
        {
          position: new google.maps.LatLng(40.73061, -73.935242),
          label: "NY",
        },
        {
          position: new google.maps.LatLng(35.481918, -97.508469),
          label: "OK",
        },
        {
          position: new google.maps.LatLng(43.071568, -70.762245),
          label: "PO",
        },
      ];

      // Create markers.
      for (let i = 0; i < features.length; i++) {
        // const marker = new window.google.maps.Marker({
        //   position: features[i].position,
        //   label: features[i].label,
        //   map: map,
        // });
        new google.maps.Marker({
          position: features[i].position,
          map: map,
          label: {
            text: features[i].label,
            color: "#ffffff",
            fontSize: "12px",
          },
        });
        // console.log("marker", window.google.maps)
      }

      // // The marker, positioned at Boston single marker
      // const marker = new window.google.maps.Marker({
      //   position: center,
      //   map: map,
      // });
    }
  });

  return (
    <>
      <div className="position-relative">
        {activeSection !== "section1" ? (
          width > 575 ? (
            <div className="d-flex justify-content-center">
              <MapActionButtons
                darkMode={darkMode}
                screenWidth={screenWidth}
                activeSection={activeSection}
              />
            </div>
          ) : null
        ) : null}
        <div ref={ref} className="map-responsive"></div>
      </div>
    </>
  );
};
