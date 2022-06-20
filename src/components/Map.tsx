import React, { useEffect } from "react";
import { MapActionButtons } from "./MapActionButtons";
import "./style.css"

interface Types {
  darkMode: boolean;
  activeSection?: String;
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
      <div ref={ref} className="map-responsive">
        {/* {activeSection !== "section1" ? (
          <MapActionButtons darkMode={darkMode} />
        ) : null} */}
      </div>
    </>
  );
};
