import React, { useState } from "react";
import arrowIcon from "../assets/arrow_back_ios.svg";
import carImg from "../assets/car_img.png";
import cartoonIcon from "../assets/smart_toy.svg";
import spaeedIcon from "../assets/speed.svg";
import mileIcon from "../assets/battery_4_bar.svg";
import seatIcon from "../assets/airline_seat_recline_extra.svg";
import intrImg from "../assets/white.png";

interface Types {
  themeMode: String;
  data: any;
}

export const CarList: React.FC<Types> = ({ themeMode, data }: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  return (
    <>
      <div style={{ width: "480px" }}>
        <div className="p-3 border-end d-flex justify-content-between">
          <div
            className="btn-group border rounded-pill"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              checked
            />
            <label
              className="btn btn-outline-dark border-0 m-1 rounded-pill"
              htmlFor="btnradio1"
            >
              Pick up
            </label>

            <input
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className="btn btn-outline-dark border-0 m-1 rounded-pill"
              htmlFor="btnradio2"
            >
              Delivery
            </label>
          </div>

          <div className="position-relative">
            <label
              htmlFor="dates"
              className="form-label position-absolute small"
              style={{ top: "5px", left: "25px" }}
            >
              Dates
            </label>
            <input
              data-start="16/11/2018"
              data-end="16/12/2018"
              type="text"
              name="dates"
              placeholder="May 23 - May 25"
              className="pt-4 ps-4 rounded-pill form-control"
              id="dates"
            />
          </div>
        </div>

        <div className="mt-5">
          <div className="d-flex">
            <div
              style={mystyle}
              className="d-flex justify-content-center align-items-center rounded-circle mx-3"
            >
              <img className="px-3 img-fluid" src={arrowIcon} alt="" />
            </div>
            <div>
              <span className="fs-2 fw-bold">Choose a car</span>
            </div>
          </div>
          <div className="m-4">
            <div
              className="card border-0 p-4 position-relative"
              style={mystyle}
            >
              <div className="m-3">
                <img src={carImg} className="card-img img-fluid" alt="..." />
              </div>
              <div className="d-flex flex-column ps-3 pt-2 position-absolute start-0 top-0">
                <span className="fs-4 fw-bold">Model 3</span>
                <small>Performance</small>
              </div>
              <div className="d-flex flex-column align-items-end pe-3 pt-2 position-absolute end-0 top-0">
                <span className="fs-6 fw-bold">169 / day</span>
                <small>338 / total</small>
              </div>

              <div className="mt-4">
                <div className="d-flex justify-content-between">
                  <div className="w-100">
                    <div
                      className="py-2 m-1 px-3 shadow rounded d-flex"
                      style={{ background: "rgba(0, 0, 0, 0.04)" }}
                    >
                      <div className="me-3">
                        <img src={cartoonIcon} alt="" />
                      </div>
                      <div>
                        <small style={{ fontSize: "12px" }}>
                          Enhanced autopilot
                        </small>
                      </div>
                    </div>
                  </div>

                  <div className="w-100">
                    <div
                      className="py-2 m-1 px-3 shadow rounded d-flex"
                      style={{ background: "rgba(0, 0, 0, 0.04)" }}
                    >
                      <div className="me-3">
                        <img src={spaeedIcon} alt="" />
                      </div>
                      <div>
                        <small style={{ fontSize: "12px" }}>0-60 in 4.4s</small>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="d-flex justify-content-between">
                  <div className="w-100">
                    <div
                      className="py-2 px-3 m-1 shadow rounded d-flex"
                      style={{ background: "rgba(0, 0, 0, 0.04)" }}
                    >
                      <div className="me-2">
                        <img src={mileIcon} alt="" />
                      </div>
                      <div>
                        <small style={{ fontSize: "12px" }}>326 miles</small>
                      </div>
                    </div>
                  </div>

                  <div className="w-100">
                    <div
                      className="py-2 px-3 m-1 shadow rounded d-flex"
                      style={{ background: "rgba(0, 0, 0, 0.04)" }}
                    >
                      <div className="me-2">
                        <img src={seatIcon} alt="" />
                      </div>
                      <div>
                        <small style={{ fontSize: "12px" }}>5 seats</small>
                      </div>
                    </div>
                  </div>

                  <div className="w-100">
                    <div
                      className="py-2 px-3 m-1 shadow rounded d-flex"
                      style={{ background: "rgba(0, 0, 0, 0.04)" }}
                    >
                      <div className="me-2">
                        <img src={intrImg} alt="" />
                      </div>
                      <div>
                        <small style={{ fontSize: "12px" }}>Interior</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
