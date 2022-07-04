import React, { useEffect, useState } from "react";
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
  screenWidth: number;
  activeSection: string;
}

export const MapActionButtons: React.FC<Types> = ({
  darkMode,
  screenWidth,
  activeSection
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
  };
  const [leftScroll, setLeftScroll] = useState(0);
  const [rightScroll, setRightScroll] = useState(0);
  const slide = (direction: string) => {
    let container: HTMLElement | null = document.getElementById(
      "map-action-buttons-container"
    );
    let scrollCompleted = 0;
    const slideVar = setInterval(function () {
      if (container) {
        if (direction === "left") {
          container.scrollLeft -= 10;
          setLeftScroll(container.scrollLeft -= 10)
          setRightScroll(container.scrollLeft -= 10)
        } else {
          container.scrollLeft += 10;
          setLeftScroll(container.scrollLeft += 10)
          setRightScroll(container.scrollLeft += 10)
        }
        scrollCompleted += 10;
        // setRightScroll(scrollCompleted) 
        if (scrollCompleted >= 100) {
          window.clearInterval(slideVar);
        }
      }
    }, 50);
  };
  useEffect(()=>{
  },[])
  return (
    <>
      <div className="d-flex justify-content-center position-absolute top-0 updateHeight mt-4 w-100 px-2">
        {
          (screenWidth < 997 || activeSection !== "section2") && leftScroll > 0 &&
          <div className="me-1 web-filter-scrolling-arrow rounded-circle" style={{position: 'absolute', top: '0', left: '8px', zIndex: '1',boxShadow: '0px 0px 5px rgba(0,0,0,0.5)'}}>
            <button
              type="button"
              onClick={() => slide("left")}
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
          </div>
        }
        <section
          id="map-action-buttons-container"
          style={{ width: screenWidth < 997 || activeSection !== "section2" ? "100%" : "100%" }}
        >
          <div id="filters-section" style={{width: '100%', maxWidth: '100%', justifyContent: screenWidth < 997 || activeSection !== "section2" ? "start" :'center'}}>
            <div className="ml-5">
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
                    className={
                      !darkMode ? "bg-light children" : "bg-dark children"
                    }
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
                    className={
                      !darkMode ? "bg-light children" : "bg-dark children"
                    }
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
                              <span
                                className="ps-4"
                                style={{ fontSize: "14px" }}
                              >
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
                              <div>
                                <span
                                  className="ps-4 text-wrap"
                                  style={{ fontSize: "14px" }}
                                >
                                  + Autosteer, auto lane change, traffic aware
                                  cruise control, autopark, summon.
                                </span>
                              </div>
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
                              <span
                                className="ps-4"
                                style={{ fontSize: "14px" }}
                              >
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
                    className={
                      !darkMode ? "bg-light children" : "bg-dark children"
                    }
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
                    className={
                      !darkMode ? "bg-light children" : "bg-dark children"
                    }
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
                              <img
                                className="img-fluid"
                                src={whiteCar}
                                alt=""
                              />
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
                              <img
                                className="img-fluid"
                                src={blackCar}
                                alt=""
                              />
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
                    className={
                      !darkMode ? "bg-light children" : "bg-dark children"
                    }
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
          </div>
        </section>
        {
          (screenWidth < 997 || activeSection !== "section2") && rightScroll < 100 &&
          <div className=" ms-1 web-filter-scrolling-arrow rounded-circle" style={{position: 'absolute', top: '0', right: '8px', boxShadow: '0px 0px 5px rgba(0,0,0,0.5)'}}>
            <button
              type="button"
              onClick={() => slide("right")}
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
          </div>
        }
      </div>
    </>
  );
};
