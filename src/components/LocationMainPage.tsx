import React, { useState, useEffect } from "react";
import { SuggestedLocation } from "./SuggestedLocation";
import carImg from "../assets/car_img.png";
import cartoonIcon from "../assets/smart_toy.svg";
import spaeedIcon from "../assets/speed.svg";
import mileIcon from "../assets/battery_4_bar.svg";
import seatIcon from "../assets/airline_seat_recline_extra.svg";
import intrImg from "../assets/white.png";
import Map from "./Map";
import { CarList } from "./CarList";

const data1 = [{}];
const data2 = [
  {
    img: carImg,
    model: "Model 3",
    disc: "Performance",
    numDays: "169 / day",
    numHours: "338 / total",
    features: [
      {
        icon: cartoonIcon,
        title: "Enhanced autopilot",
      },
      {
        icon: spaeedIcon,
        title: "0-60 in 4.4s",
      },
      {
        icon: mileIcon,
        title: "326 miles",
      },
      {
        icon: seatIcon,
        title: "5 seats",
      },
      {
        icon: intrImg,
        title: "Interior",
      },
    ],
  },
];

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
