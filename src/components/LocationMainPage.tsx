import React, { useEffect, useState } from "react";
import { LocationSelector } from "./LocationSelector";
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
import carsList from "../data/CarsList";
import { retrieveCities } from "../api/API";

const data1 = [{}];
const data2 = carsList;
const render = (status: Status) => {
  return <h1>{status}</h1>;
};

const LocationMainPage = () => {
  const { darkMode } = useSelector((state: RootState) => state.themeReducer);
  const { width } = useWindowDimensions();
  const [activeSection, setActiveSection] = useState<string>("section1");
  const [carDetails, setCarDetails] = useState<any>({});
  const [zoom, setZoom] = useState(4); // initial zoom
  const [center, setCenter] = useState<google.maps.LatLngLiteral>({
    lat: 42.407211,
    lng: -71.382439,
  });
  const [cities, setCities] = useState<any[]>([]);

  useEffect(() => {
    retrieveCities()
      .then((res) => {
        setCities(res.cities);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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
            <LocationSelector
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
              carDetails={carDetails}
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
                    carDetails={carDetails}
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
              screenWidth={width}
              data={cities}
            />
          </Wrapper>
        </div>
      </div>
    </>
  );
};

export default LocationMainPage;
