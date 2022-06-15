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
      <div className="d-flex">
        <div>
          {/* <SuggestedLocation themeMode={themeMode} data={data1} /> */}
          <CarList themeMode={themeMode} data={data2} />
        </div>
        <div className="w-100">
          <Map />
        </div>
      </div>
    </>
  );
};

export default LocationMainPage;
