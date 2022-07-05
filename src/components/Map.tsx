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

      for (let i = 0; i < features.length; i++) {
        new google.maps.Marker({
          position: features[i].position,
          map: map,
          label: {
            text: features[i].label,
            color: "#000",
            fontSize: "12px",
          },
          icon: {
            url: "https://res.cloudinary.com/dlfodca0a/image/upload/v1656954491/icons8-white-circle-48_powrzi.png",
            //the size of the image is 32x32,
            //when you want to add a border you must add 2*borderWidth to the size
            // size: new google.maps.Size(100, 100),
          },
          //define the shape

          //set optimized to false otherwise the marker  will be rendered via canvas
          //and is not accessible via CSS
          optimized: false,
        });
      }
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
