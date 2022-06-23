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
      });
    }
  });

  return (
    <>
      <div className="position-relative">
        <div ref={ref} className="map-responsive"></div>
        {activeSection !== "section1" ? (
          width > 575 ? (
            <MapActionButtons darkMode={darkMode} />
          ) : null
        ) : null}
      </div>
    </>
  );
};
