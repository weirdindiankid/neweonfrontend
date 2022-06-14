import React, { useState } from "react";
import SuggestedLocation from "./SuggestedLocation";
import Map from "./Map";

const LocationMainPage = () => {
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
          <SuggestedLocation />
        </div>
        <div>
          <Map />
        </div>
      </div>
    </>
  );
};

export default LocationMainPage;
