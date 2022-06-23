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
import Dropdown from "react-bootstrap/Dropdown";
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
      <div className="d-flex justify-content-center position-absolute top-0 pt-4">
        <div>
          <ul className="pricing-menu">
            <li className="parent">
              <a
                href="!#"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm"
                    : "bg-dark text-light shadow-sm"
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
              <ul className="children">
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
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <a href="!#">
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </a>
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
                href="!#"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm"
                    : "bg-dark text-light shadow-sm"
                }
              >
                {!darkMode ? (
                  <img className="img-fluid" src={smartToyLight} alt="" />
                ) : (
                  <img className="img-fluid" src={smartToyDark} alt="" />
                )}
                <span className="px-3">Autopilot</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul className="children">
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
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <a href="!#">
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </a>
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
                href="!#"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow-sm"
                    : "bg-dark text-light shadow-sm"
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
              <ul className="children">
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
                  <div className="d-flex justify-content-between mt-2">
                    <div>
                      <button className="btn btn-primary">
                        Show 8 results
                      </button>
                    </div>
                    <div>
                      <a href="!#">
                        Clear
                        <img
                          className="img-fluid ms-2"
                          src={restartAltIcon}
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </ul>
            </li>
          </ul>
        </div>

        {/*
        <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={modelLight} alt="" />
            ) : (
              <img className="img-fluid" src={modelDark} alt="" />
            )}
            <span className="me-2 ms-2">Model</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={mileLight} alt="" />
            ) : (
              <img className="img-fluid" src={mileDark} alt="" />
            )}
            <span className="me-2 ms-2">Range</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  );
};
