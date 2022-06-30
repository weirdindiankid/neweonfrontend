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

      const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let labelIndex = 0;

      // mutiple locations
      const iconBase =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/";

      const icons: Record<string, { icon: string }> = {
        parking: {
          icon: iconBase + "parking_lot_maps.png",
        },
        library: {
          icon: iconBase + "library_maps.png",
        },
        info: {
          icon: iconBase + "info-i_maps.png",
        },
      };

      const features = [
        {
          position: new google.maps.LatLng(center),
          label: labels[labelIndex++ % labels.length],
          // type: "info",
          map: map,
        },
        {
          position: new google.maps.LatLng(41.510395, -87.644287),
          label: labels[labelIndex++ % labels.length],
          // type: "parking",
          map: map,
        },
        {
          position: new google.maps.LatLng(39.742043, -104.991531),
          label: labels[labelIndex++ % labels.length],
          // type: "library",
          map: map,
        },
        {
          position: new google.maps.LatLng(34.052235, -118.243683),
          label: labels[labelIndex++ % labels.length],
          // type: "library",
          map: map,
        },
        {
          position: new google.maps.LatLng(25.761681, -80.191788),
          label: labels[labelIndex++ % labels.length],
          // type: "library",
          map: map,
        },
        {
          position: new google.maps.LatLng(40.73061, -73.935242),
          label: labels[labelIndex++ % labels.length],
          // type: "library",
          map: map,
        },
        {
          position: new google.maps.LatLng(35.481918, -97.508469),
          label: labels[labelIndex++ % labels.length],
          // type: "library",
          map: map,
        },
        {
          position: new google.maps.LatLng(43.071568, -70.762245),
          label: labels[labelIndex++ % labels.length],
          // type: "library",
          map: map,
        },
      ];

      // Create markers.
      for (let i = 0; i < features.length; i++) {
        const marker = new window.google.maps.Marker({
          position: features[i].position,
          // icon: icons[features[i].type].icon,
          map: map,
        });
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
