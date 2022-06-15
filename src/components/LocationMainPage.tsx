import React, { useState, useEffect } from "react";
import { SuggestedLocation } from "./SuggestedLocation";
import Map from "./Map";
import { CarList } from "./CarList";

const data1 = [{}];
const data2 = [{}];

const LocationMainPage = () => {
  const [themeMode, setThemeMode] = useState<String>("");

  useEffect(() => {
    setThemeMode(localStorage.getItem("themeMode") || "light");
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <div>
          {/* <SuggestedLocation themeMode={themeMode} data={data1} /> */}
          <CarList themeMode={themeMode} data={data2} />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default LocationMainPage;
