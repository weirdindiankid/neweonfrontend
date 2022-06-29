import React, { useEffect } from "react";
import { MapActionButtons } from "./MapActionButtons";
import useWindowDimensions from "./../hooks/windowDimension";
import "./style.scss";

interface Types {
  darkMode: boolean;
  activeSection?: string;
  center: any;
  zoom: number;
}

export const Map: React.FC<Types> = ({
  darkMode,
  activeSection,
  center,
  zoom,
}: Types) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (ref?.current) {
      new window.google.maps.Map(ref?.current, {
        center,
        zoom,
        zoomControl: true,
        disableDefaultUI: true,
      });
    }
  });

  return (
    <>
      <div className="position-relative">
        {activeSection !== "section1" ? (
          width > 575 ? (
            <div className="d-flex justify-content-center">
              <MapActionButtons darkMode={darkMode} />
            </div>
          ) : null
        ) : null}
        <div ref={ref} className="map-responsive"></div>
      </div>
    </>
  );
};
