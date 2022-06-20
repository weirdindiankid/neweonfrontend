import React, { useState } from "react";
import { SuggestedLocation } from "./SuggestedLocation";
import carImg from "../assets/car_img.png";
import blackCar from "../assets/black-car.png";
import grayCar from "../assets/gray_car.png";
import whiteCar from "../assets/white_car.png";
import smartTotLight from "../assets/smart_toy_light.svg";
import smartTotDark from "../assets/smart_toy_dark.svg";
import speedLight from "../assets/speed_light.svg";
import speedDark from "../assets/speed_dark.svg";
import mileLight from "../assets/battery_4_bar_light.svg";
import mileDark from "../assets/battery_4_bar_dark.svg";
import seatLight from "../assets/airline_seat_recline_extra_light.svg";
import seatDark from "../assets/airline_seat_recline_extra_dark.svg";
import interiorLight from "../assets/interior_light.svg";
import interiorDark from "../assets/interior_dark.svg";
import { Map } from "./Map";
import { LeftSectionTwo } from "./leftSectionTwo";
import DetailView from "./DetailView";
import { CheckoutStepOne } from "./CheckoutStepOne";
import { CheckoutStepTwo } from "./CheckoutStepTwo";
import { BookingComplete } from "./BookingComplete";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";

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
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Enhanced autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.4s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "310 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
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
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Full self driving",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.4s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "326 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
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
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Enhanced autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.9s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "295 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
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
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Standard autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 3.1s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "405 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
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
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Enhanced autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.4s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "326 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
        title: "Interior",
      },
    ],
  },
];
const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const LocationMainPage = () => {
  const { darkMode } = useSelector((state: RootState) => state.themeReducer);
  const [activeSection, setActiveSection] = useState<String>("section1");
  const [zoom, setZoom] = React.useState(10); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 42.407211,
    lng: -71.382439,
  });

  return (
    <>
      <div className="row flex-column-reverse flex-sm-row">
        <div className="col-12 col-sm-4 col-md-6 col-lg-4">
          {activeSection === "section1" ? (
            <SuggestedLocation
              darkMode={darkMode}
              data={data1}
              onChangeSection={() => setActiveSection("section2")}
            />
          ) : activeSection === "section2" ? (
            <LeftSectionTwo
              darkMode={darkMode}
              data={data2}
              onChangeSection={(e: String) => setActiveSection(e)}
            />
          ) : activeSection === "section3" ? (
            <>
              <LeftSectionTwo
                darkMode={darkMode}
                data={data2}
                onChangeSection={(e: String) => setActiveSection(e)}
              />
              <DetailView
                darkMode={darkMode}
                onChangeSection={(e: String) => setActiveSection(e)}
              />
            </>
          ) : activeSection === "section4" ? (
            <CheckoutStepOne
              darkMode={darkMode}
              onChangeSection={(e: String) => setActiveSection(e)}
            />
          ) : activeSection === "section5" ? (
            <CheckoutStepTwo
              darkMode={darkMode}
              onChangeSection={(e: String) => setActiveSection(e)}
            />
          ) : (
            <BookingComplete darkMode={darkMode} />
          )}
        </div>
        <div className="col-12 col-sm-8 col-md-6 col-lg-8">
          <Wrapper
            apiKey={process.env.REACT_APP_GOOGLE_API_KEY || ""}
            render={render}
          >
            <Map
              darkMode={darkMode}
              activeSection={activeSection}
              center={center}
              zoom={zoom}
            />
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default LocationMainPage;
