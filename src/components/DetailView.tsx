import React from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import grayCarDettail from "../assets/gray_car_detail.png";
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
import Form from "react-bootstrap/Form";

interface Types {
  themeMode: String;
  onChangeSection: any;
}

export const DetailView: React.FC<Types> = ({
  themeMode,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  const nestedCards = {
    backgroundColor: themeMode === "light" ? "rgba(0, 0, 0, 0.04)" : "#2F2F2F",
  };

  return (
    <>
      <div
        style={{
          minWidth: "480px",
          height: "100vh",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <div>
          <div className="d-flex justify-content-between mx-2">
            <div className="d-flex align-items-center">
              <div className="me-3">
                <button
                  type="button"
                  onClick={() => onChangeSection("section2")}
                  className={
                    themeMode === "light"
                      ? "btn btn-light rounded-circle"
                      : "btn btn-dark rounded-circle"
                  }
                >
                  {themeMode === "light" ? (
                    <img className="img-fluid" src={arrowLeftLight} alt="" />
                  ) : (
                    <img className="img-fluid" src={arrowLeftDark} alt="" />
                  )}
                </button>
              </div>
              <div>
                <span className="fs-2 fw-bold">Model X</span>
              </div>
            </div>
            <div className="d-flex flex-column text-end">
              <span className="fs-5 fw-bold">219 / day</span>
              <small>438 / total</small>
            </div>
          </div>

          <div className="m-3">
            <div className="card border-0" style={mystyle}>
              <div className="m-3">
                <img
                  src={grayCarDettail}
                  className="card-img img-fluid"
                  alt="..."
                />
              </div>
            </div>
          </div>

          <div className="m-4">
            <p>
              The Tesla Model X P100D is a battery electric mid-size luxury
              crossover. The vehicle is notable in that it uses falcon-wing
              doors for passenger access.
            </p>

            <div className="mt-4">
              <div className="d-flex justify-content-between">
                <div className="w-100">
                  <div
                    className="py-2 m-1 px-3 shadow-sm rounded d-flex"
                    style={nestedCards}
                  >
                    <div className="me-3">
                      {themeMode === "light" ? (
                        <img className="img-fluid" src={smartTotLight} alt="" />
                      ) : (
                        <img className="img-fluid" src={smartTotDark} alt="" />
                      )}
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
                    className="py-2 m-1 px-3 shadow-sm rounded d-flex"
                    style={nestedCards}
                  >
                    <div className="me-3">
                      {themeMode === "light" ? (
                        <img className="img-fluid" src={speedLight} alt="" />
                      ) : (
                        <img className="img-fluid" src={speedDark} alt="" />
                      )}
                    </div>
                    <div>
                      <small style={{ fontSize: "12px" }}>0-60 in 4.9s</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between">
                <div className="w-100">
                  <div
                    className="py-2 px-3 m-1 shadow-sm rounded d-flex"
                    style={nestedCards}
                  >
                    <div className="me-2">
                      {themeMode === "light" ? (
                        <img className="img-fluid" src={mileLight} alt="" />
                      ) : (
                        <img className="img-fluid" src={mileDark} alt="" />
                      )}
                    </div>
                    <div>
                      <small style={{ fontSize: "12px" }}>295 miles</small>
                    </div>
                  </div>
                </div>

                <div className="w-100">
                  <div
                    className="py-2 px-3 m-1 shadow-sm rounded d-flex"
                    style={nestedCards}
                  >
                    <div className="me-2">
                      {themeMode === "light" ? (
                        <img className="img-fluid" src={seatLight} alt="" />
                      ) : (
                        <img className="img-fluid" src={seatDark} alt="" />
                      )}
                    </div>
                    <div>
                      <small style={{ fontSize: "12px" }}>5 seats</small>
                    </div>
                  </div>
                </div>

                <div className="w-100">
                  <div
                    className="py-2 px-3 m-1 shadow-sm rounded d-flex"
                    style={nestedCards}
                  >
                    <div className="me-2">
                      {themeMode === "light" ? (
                        <img className="img-fluid" src={interiorLight} alt="" />
                      ) : (
                        <img className="img-fluid" src={interiorDark} alt="" />
                      )}
                    </div>
                    <div>
                      <small style={{ fontSize: "12px" }}>Interior</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div>
                <span className="fs-4 fw-bold">Included</span>
              </div>
              <div className="mt-3">
                <div className="border border-secondary rounded p-3 my-3 d-flex justify-content-between">
                  <span className="fs-6 fw-bold">2 days rent</span>
                  <span className="fs-6 fw-bold">219 / day</span>
                </div>
                <div className="border border-secondary rounded p-3 d-flex justify-content-between">
                  <div className="d-flex flex-column lh-sm">
                    <span className="fs-6 fw-bold">Delivery fee</span>
                    <small style={{ fontSize: "12px" }}>
                      To 45 Boston Avenue
                    </small>
                  </div>
                  <span className="fs-6 fw-bold">+150</span>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div>
                <span className="fs-4 fw-bold">Choose insurance</span>
              </div>
              <div className="mt-3">
                <div className="border border-secondary rounded p-3 d-flex justify-content-between">
                  <div className="d-flex flex-column lh-sm">
                    <Form>
                      <Form.Check
                        className="fs-6 fw-bold"
                        inline
                        label="Your insurance"
                        name="group1"
                        type="radio"
                      />
                    </Form>
                    <small className="px-4" style={{ fontSize: "12px" }}>
                      Before you pick up the car, we’ll ask you to upload a copy
                      of your insurance agreement.
                    </small>
                  </div>
                  <span className="fs-6 fw-bold">Free</span>
                </div>
              </div>
              <div className="w-100">
                <div
                  className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
                  style={nestedCards}
                >
                  <div className="me-2">
                    <Form>
                      <Form.Check
                        className="fs-6 fw-bold"
                        inline
                        label="Our insurance"
                        name="group1"
                        type="radio"
                      />
                    </Form>
                  </div>
                  <div>
                    <span
                      className="fs-6 fw-bold"
                      style={{ color: "GrayText" }}
                    >
                      +167.30 / day
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-5">
              <div>
                <span className="fs-4 fw-bold">Anything else?</span>
              </div>

              <div className="w-100">
                <div
                  className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
                  style={nestedCards}
                >
                  <div className="me-2">
                    <Form>
                      <Form.Check
                        className="fs-6 fw-bold"
                        inline
                        label="Unlimited toll usage"
                        name="group1"
                      />
                    </Form>
                  </div>
                  <div>
                    <span
                      className="fs-6 fw-bold"
                      style={{ color: "GrayText" }}
                    >
                      +9 / day
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div
                  className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
                  style={nestedCards}
                >
                  <div className="me-2">
                    <Form>
                      <Form.Check
                        className="fs-6 fw-bold"
                        inline
                        label="Roadside protection"
                        name="group1"
                      />
                    </Form>
                  </div>
                  <div>
                    <span
                      className="fs-6 fw-bold"
                      style={{ color: "GrayText" }}
                    >
                      +13 / day
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-100">
                <div
                  className="py-2 px-3 my-3 shadow-sm rounded"
                  style={nestedCards}
                >
                  <div className="me-2">
                    <Form>
                      <Form.Check
                        className="fs-6 fw-bold"
                        inline
                        label="Add discount code"
                        name="group1"
                      />
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="m-4">
            <button
              className="btn btn-primary"
              onClick={() => onChangeSection("section4")}
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailView;
