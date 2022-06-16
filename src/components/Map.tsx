import React from "react";
import { MapActionButtons } from "./MapActionButtons";

interface Types {
  themeMode: String;
  activeSection: String;
}

export const Map: React.FC<Types> = ({ themeMode, activeSection }: Types) => {
  return (
    <>
      <div style={{ width: "100%" }}>
        {activeSection !== "section1" ? (
          <MapActionButtons themeMode={themeMode} />
        ) : null}
      </div>
    </>
  );
};
