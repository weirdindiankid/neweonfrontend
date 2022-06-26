import React from "react";
import attachMoneyLight from "../assets/attach_money_light.svg";
import attachMoneyDark from "../assets/attach_money_dark.svg";
import smartToyLight from "../assets/smart_toy_light.svg";
import smartToyDark from "../assets/smart_toy_dark.svg";
import speedLight from "../assets/speed_light.svg";
import speedDark from "../assets/speed_dark.svg";
import mileLight from "../assets/battery_4_bar_light.svg";
import mileDark from "../assets/battery_4_bar_dark.svg";
import modelLight from "../assets/directions_car_light.svg";
import modelDark from "../assets/directions_car_dark.svg";
import arrowDownLight from "../assets/arrow_down_light.svg";
import arrowDownDark from "../assets/arrow_down_dark.svg";
import restartAltIcon from "../assets/restart_alt.svg";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import arrowRightLight from "../assets/arrow_right_light.svg";
import arrowRightDark from "../assets/arrow_right_dark.svg";
import whiteCar from "../assets/filters_assets/white_car.png";
import blueCar from "../assets/filters_assets/blue_car.png";
import grayCar from "../assets/filters_assets/gray_car.png";
import blackCar from "../assets/filters_assets/black_car.png";
import "./style.scss";

interface Types {
  darkMode: boolean;
}

export const MapActionButtons: React.FC<Types> = ({ darkMode }: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
  };

  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex position-absolute top-0 pt-4">
        {/* <div className="m-1">
          <button
            type="button"
            className={
              !darkMode
                ? "btn btn-light rounded-circle"
                : "btn btn-dark rounded-circle"
            }
          >
            {!darkMode ? (
              <img className="img-fluid" src={arrowLeftLight} alt="" />
            ) : (
              <img className="img-fluid" src={arrowLeftDark} alt="" />
            )}
          </button>
        </div> */}
        <div>
          <ul className="pricing-menu">
            <li className="parent">
              <a
                href="#!"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm d-flex justify-content-center"
                    : "bg-dark text-light shadow-sm d-flex justify-content-center"
                }
              >
                {!darkMode ? (
                  <img src={attachMoneyLight} alt="" />
                ) : (
                  <img src={attachMoneyDark} alt="" />
                )}
                <span className="px-3">Price</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul
                className={!darkMode ? "bg-light children" : "bg-dark children"}
              >
                <hr className="m-0" />
                <div className="container">
                  <div className="row row-cols-2">
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            150 - 200
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            200 - 250
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            250 - 300
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            300 - 350
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <span style={{ color: "#0C72C0" }}>
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <ul className="autopilot-menu">
            <li className="parent">
              <a
                href="#!"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm d-flex justify-content-center"
                    : "bg-dark text-light shadow-sm d-flex justify-content-center"
                }
              >
                {!darkMode ? (
                  <img className="img-fluid" src={smartToyLight} alt="" />
                ) : (
                  <img className="img-fluid" src={smartToyDark} alt="" />
                )}
                <span className="px-2">Autopilot</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul
                className={!darkMode ? "bg-light children" : "bg-dark children"}
              >
                <hr className="m-0" />
                <div className="container">
                  <div className="row">
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="d-flex flex-column lh-sm">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label fw-bold font-size"
                              htmlFor="flexCheckDefault"
                            >
                              Standard autopilot
                            </label>
                          </div>
                          <span className="ps-4" style={{ fontSize: "14px" }}>
                            Automatic emergency braking.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="d-flex flex-column lh-sm">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label fw-bold font-size"
                              htmlFor="flexCheckDefault"
                            >
                              Enhanced autopilot
                            </label>
                          </div>
                          <span className="ps-4" style={{ fontSize: "14px" }}>
                            + Autosteer, auto lane change, traffic aware cruise
                            control, autopark, summon.
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="d-flex flex-column lh-sm">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                            />
                            <label
                              className="form-check-label fw-bold font-size"
                              htmlFor="flexCheckDefault"
                            >
                              Full self driving autopilot
                            </label>
                          </div>
                          <span className="ps-4" style={{ fontSize: "14px" }}>
                            + Navigate on autopilot.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <span style={{ color: "#0C72C0" }}>
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <ul className="speed-menu">
            <li className="parent">
              <a
                href="#!"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm d-flex justify-content-center"
                    : "bg-dark text-light shadow-sm d-flex justify-content-center"
                }
              >
                {!darkMode ? (
                  <img className="img-fluid" src={speedLight} alt="" />
                ) : (
                  <img className="img-fluid" src={speedDark} alt="" />
                )}
                <span className="px-3">Speed</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul
                className={!darkMode ? "bg-light children" : "bg-dark children"}
              >
                <hr className="m-0" />
                <div className="container">
                  <div className="row row-cols-2">
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            1-2 s
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            2-3 s
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            3 -4 s
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-2 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            4 - 5 s
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <span style={{ color: "#0C72C0" }}>
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <ul className="model-menu">
            <li className="parent">
              <a
                href="#!"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm d-flex justify-content-center"
                    : "bg-dark text-light shadow-sm d-flex justify-content-center"
                }
              >
                {!darkMode ? (
                  <img className="img-fluid" src={modelLight} alt="" />
                ) : (
                  <img className="img-fluid" src={modelDark} alt="" />
                )}
                <span className="px-3">Model</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul
                className={!darkMode ? "bg-light children" : "bg-dark children"}
              >
                <hr className="m-0" />
                <div className="container">
                  <div className="row">
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            Model S
                          </label>
                        </div>
                        <div className="text-end">
                          <img className="img-fluid" src={whiteCar} alt="" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            Model 3
                          </label>
                        </div>
                        <div className="text-end">
                          <img className="img-fluid" src={blueCar} alt="" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            Model X
                          </label>
                        </div>
                        <div className="text-end">
                          <img className="img-fluid" src={grayCar} alt="" />
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            Model Y
                          </label>
                        </div>
                        <div className="text-end">
                          <img className="img-fluid" src={blackCar} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <span style={{ color: "#0C72C0" }}>
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        <div>
          <ul className="range-menu">
            <li className="parent">
              <a
                href="#!"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm d-flex justify-content-center"
                    : "bg-dark text-light shadow-sm d-flex justify-content-center"
                }
              >
                {!darkMode ? (
                  <img className="img-fluid" src={mileLight} alt="" />
                ) : (
                  <img className="img-fluid" src={mileDark} alt="" />
                )}
                <span className="px-3">Range</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul
                className={!darkMode ? "bg-light children" : "bg-dark children"}
              >
                <hr className="m-0" />
                <div className="container">
                  <div className="row">
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            180 - 300 miles
                          </label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div
                        className="p-3 rounded cursor m-1 col"
                        style={mystyle}
                      >
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="flexCheckDefault"
                          />
                          <label
                            className="form-check-label font-size"
                            htmlFor="flexCheckDefault"
                          >
                            300 - 420 miles
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <span style={{ color: "#0C72C0" }}>
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </span>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>
        {/* <div className="m-1">
          <button
            type="button"
            className={
              !darkMode
                ? "btn btn-light rounded-circle"
                : "btn btn-dark rounded-circle"
            }
          >
            {!darkMode ? (
              <img className="img-fluid" src={arrowRightLight} alt="" />
            ) : (
              <img className="img-fluid" src={arrowRightDark} alt="" />
            )}
          </button>
        </div> */}
      </div>
    </div>
  );
};
