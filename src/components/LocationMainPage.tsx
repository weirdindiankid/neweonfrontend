import React, { useState, useEffect } from "react";
import { SuggestedLocation } from "./SuggestedLocation";
import carImg from "../assets/car_img.png";
import blackCar from "../assets/black-car.png";
import grayCar from "../assets/gray_car.png";
import whiteCar from "../assets/white_car.png";
import cartoonIcon from "../assets/smart_toy.svg";
import spaeedIcon from "../assets/speed.svg";
import mileIcon from "../assets/battery_4_bar.svg";
import seatIcon from "../assets/airline_seat_recline_extra.svg";
import intrImg from "../assets/white.png";
import Map from "./Map";
import { CarList } from "./CarList";
import { DeliverTo } from "./DeliverTo";
import DetailView from "./DetailView";

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
        title: "310 miles",
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
  {
    img: blackCar,
    model: "Model Y",
    disc: "Long range",
    numDays: "199 / day",
    numHours: "398 / total",
    features: [
      {
        icon: cartoonIcon,
        title: "Full self driving",
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
  {
    img: grayCar,
    model: "Model X",
    disc: "P100D",
    numDays: "219 / day",
    numHours: "438 / total",
    features: [
      {
        icon: cartoonIcon,
        title: "Enhanced autopilot",
      },
      {
        icon: spaeedIcon,
        title: "0-60 in 4.9s",
      },
      {
        icon: mileIcon,
        title: "295 miles",
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
  {
    img: whiteCar,
    model: "Model S",
    disc: "Palladium",
    numDays: "299 / day",
    numHours: "598 / total",
    features: [
      {
        icon: cartoonIcon,
        title: "Standard autopilot",
      },
      {
        icon: spaeedIcon,
        title: "0-60 in 3.1s",
      },
      {
        icon: mileIcon,
        title: "405 miles",
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
  const [activeSection, setActiveSection] = useState<String>("section1");

  useEffect(() => {
    setThemeMode(localStorage.getItem("themeMode") || "light");
  }, []);

  return (
    <>
      <div className="d-flex justify-content-between">
        {activeSection === "section1" ? (
          <SuggestedLocation themeMode={themeMode} data={data1} />
        ) : activeSection === "section2" ? (
          <CarList themeMode={themeMode} data={data2} />
        ) : (
          <>
            <DeliverTo themeMode={themeMode} data={[]} />
            <DetailView themeMode={themeMode} data={data2} />
          </>
        )}
        <Map />
      </div>
    </>
  );
};

export default LocationMainPage;
