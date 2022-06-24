import React from "react";
import arrowRightLight from "../assets/arrow_right_light.svg";
import arrowRightDark from "../assets/arrow_right_dark.svg";

interface Types {
  darkMode: boolean;
  data: any;
  onChangeSection: any;
}

export const LocationList: React.FC<Types> = ({
  darkMode,
  data,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
  };

  return (
    <>
      {data.map((item: any) => {
        return (
          <div
            onClick={() => onChangeSection()}
            className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
            style={mystyle}
          >
            <div className="d-flex flex-column">
              <span style={{ fontSize: "13px" }}>{item.title}</span>
              <span style={{ fontSize: "10px" }}>{item.desciption}</span>
            </div>
            <div>
              {!darkMode ? (
                <img src={arrowRightLight} alt="" />
              ) : (
                <img src={arrowRightDark} alt="" />
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};
