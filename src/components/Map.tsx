import React, { useEffect } from "react";
import { MapActionButtons } from "./MapActionButtons";

interface Types {
  themeMode?: String;
  activeSection?: String;
  center: any;
  zoom: number;
}

export const Map: React.FC<Types> = ({
  themeMode,
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
      <div ref={ref} style={{ width: "100%", height: "100vh" }}>
        {activeSection !== "section1" ? (
          <MapActionButtons themeMode={themeMode || "light"} />
        ) : null}
      </div>
    </>
  );
};
