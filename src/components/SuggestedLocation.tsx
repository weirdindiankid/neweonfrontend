import React from "react";
import arrowRightLight from "../assets/arrow_right_light.svg";
import arrowRightDark from "../assets/arrow_right_dark.svg";

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

  return (
    <>
      <div
        style={{
          maxWidth: "480px",
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
                <span style={{ fontSize: "13px" }}>Boston</span>
                <span style={{ fontSize: "10px" }}>Massachusetts</span>
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
            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Chicago</span>
                <span style={{ fontSize: "10px" }}>Illinois</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Denver / Boulder</span>
                <span style={{ fontSize: "10px" }}>Colorado</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Las Vegas</span>
                <span style={{ fontSize: "10px" }}>Nevada</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Los Angeles</span>
                <span style={{ fontSize: "10px" }}>California</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Miami</span>
                <span style={{ fontSize: "10px" }}>Florida</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>
                  New York City / Jersey City
                </span>
                <span style={{ fontSize: "10px" }}>New York</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Oklahoma City</span>
                <span style={{ fontSize: "10px" }}>Oklahoma</span>
              </div>
              <div>
                {!darkMode ? (
                  <img src={arrowRightLight} alt="" />
                ) : (
                  <img src={arrowRightDark} alt="" />
                )}
              </div>
            </div>

            <div
              onClick={() => onChangeSection()}
              className="py-2 px-3 mt-2 rounded cursor d-flex justify-content-between"
              style={mystyle}
            >
              <div className="d-flex flex-column">
                <span style={{ fontSize: "13px" }}>Portsmouth</span>
                <span style={{ fontSize: "10px" }}>New Hampshire</span>
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
        </div>
      </div>
    </>
  );
};
