import React, { useState } from "react";
import { SuggestedLocation } from "./SuggestedLocation";
import blueCar from "../assets/blue_car.png";
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
import DetailView from "./DetailView";
import { Map } from "./Map";
import { LeftSectionTwo } from "./leftSectionTwo";
import { CheckoutStepOne } from "./CheckoutStepOne";
import { CheckoutStepTwo } from "./CheckoutStepTwo";
import { BookingComplete } from "./BookingComplete";
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers/rootReducer";
import useWindowDimensions from "./../hooks/windowDimension";

const data1 = [{}];
const data2 = [
  {
    img: blueCar,
    model: "Model 3",
    disc: "Performance",
    numDays: "169 / day",
    numHours: "338 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
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
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
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
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
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
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
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
    img: blueCar,
    model: "Model 3",
    disc: "Performance",
    numDays: "169 / day",
    numHours: "338 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
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
  const { height, width } = useWindowDimensions();
  const [activeSection, setActiveSection] = useState<string>("section1");
  const [carDetails, setCarDetails] = useState<any>({});
  const [zoom, setZoom] = React.useState(10); // initial zoom
  const [center, setCenter] = React.useState<google.maps.LatLngLiteral>({
    lat: 42.407211,
    lng: -71.382439,
  });

  return (
    <>
      <div className="row flex-column-reverse flex-sm-row">
        <div
          className={
            activeSection === "section3"
              ? "col-12 col-sm-6 col-md-6 col-lg-8"
              : "col-12 col-sm-6 col-md-6 col-lg-4"
          }
        >
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
              onChangeSection={(e: string) => setActiveSection(e)}
              onChangeCarDetails={setCarDetails}
            />
          ) : activeSection === "section3" ? (
            width > 996 ? (
              <div className="row">
                <div className="col-lg-6">
                  <LeftSectionTwo
                    darkMode={darkMode}
                    data={data2}
                    onChangeSection={(e: string) => setActiveSection(e)}
                    onChangeCarDetails={setCarDetails}
                  />
                </div>
                <div className="col-lg-6">
                  <DetailView
                    darkMode={darkMode}
                    onChangeSection={(e: string) => setActiveSection(e)}
                    data={carDetails}
                  />
                </div>
              </div>
            ) : (
              <DetailView
                darkMode={darkMode}
                onChangeSection={(e: string) => setActiveSection(e)}
                data={carDetails}
              />
            )
          ) : activeSection === "section4" ? (
            <CheckoutStepOne
              darkMode={darkMode}
              onChangeSection={(e: string) => setActiveSection(e)}
            />
          ) : activeSection === "section5" ? (
            <CheckoutStepTwo
              darkMode={darkMode}
              onChangeSection={(e: string) => setActiveSection(e)}
            />
          ) : (
            <BookingComplete darkMode={darkMode} />
          )}
        </div>
        <div
          className={
            activeSection === "section3"
              ? "col-12 col-sm-6 col-md-6 col-lg-4"
              : "col-12 col-sm-6 col-md-6 col-lg-8"
          }
        >
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
