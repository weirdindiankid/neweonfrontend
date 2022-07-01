import React, { useEffect } from "react";
import arrowRightLight from "../assets/arrow_right_light.svg";
import arrowRightDark from "../assets/arrow_right_dark.svg";
import { LocationList } from "./LocationList";
import List from "./../data/LocationList.json";
import { retrieveCities } from "../api/API";

interface Types {
  darkMode: boolean;
  data: any;
  onChangeSection: any;
}

export const SuggestedLocation: React.FC<Types> = ({
  darkMode,
  data,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
  };

  const [cities, setCities] = React.useState<any[]>(List);

  useEffect(() => {
    retrieveCities().then((res) => {
      setCities(res.cities);
      console.log(res.cities);
    }).catch((err) => {
      console.log(err);
    }
    );
  }, []);

  return (
    <>
      <div
        style={{
          height: "100vh",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <div className="p-3">
          <div>
            <span className="fs-2 fw-bold">Location</span>
          </div>
          <div className="mt-4">
            <span className="fs-6 fw-bold">Suggested</span>
            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>{cities[0].city}</span>
                <span style={{ fontSize: "10px" }}>{cities[0].geo_state}</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>
          </div>

          <div className="mt-4">
            <span className="fs-6 fw-bold">Other</span>
            <LocationList
              darkMode={darkMode}
              onChangeSection={onChangeSection}
              data={cities.slice(1, cities.length)}
            />
          </div>
        </div>
      </div>
    </>
  );
};
