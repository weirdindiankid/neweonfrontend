import React from "react";
import arrowLeft from "../assets/arrow_back_ios.svg";
import grayCarDettail from "../assets/gray_car_detail.png";
import cartoonIcon from "../assets/smart_toy.svg";
import speedIcon from "../assets/speed.svg";
import mileIcon from "../assets/battery_4_bar.svg";
import seatIcon from "../assets/airline_seat_recline_extra.svg";
import intrImg from "../assets/white.png";
import Form from "react-bootstrap/Form";

interface Types {
  themeMode: String;
  data: any;
  onChangeSection: any;
}

export const DetailView: React.FC<Types> = ({
  themeMode,
  data,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  return (
    <>
      <div style={{ minWidth: "480px" }}>
        <div>
          <div className="d-flex justify-content-between m-2">
            <div className="d-flex">
              <div
                onClick={() => onChangeSection()}
                style={mystyle}
                className="d-flex justify-content-center align-items-center rounded-circle mx-3"
              >
                <img className="px-3 img-fluid" src={arrowLeft} alt="" />
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
                    className="py-2 m-1 px-3 shadow-sm rounded d-flex"
                    style={{ background: "rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="me-3">
                      <img src={speedIcon} alt="" />
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
                    style={{ background: "rgba(0, 0, 0, 0.04)" }}
                  >
                    <div className="me-2">
                      <img src={mileIcon} alt="" />
                    </div>
                    <div>
                      <small style={{ fontSize: "12px" }}>295 miles</small>
                    </div>
                  </div>
                </div>

                <div className="w-100">
                  <div
                    className="py-2 px-3 m-1 shadow-sm rounded d-flex"
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
                    className="py-2 px-3 m-1 shadow-sm rounded d-flex"
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

            <div className="mt-4">
              <div>
                <span className="fs-4 fw-bold">Included</span>
              </div>
              <div className="mt-3">
                <div className="border rounded p-3 my-3 d-flex justify-content-between">
                  <span className="fs-6 fw-bold">2 days rent</span>
                  <span className="fs-6 fw-bold">219 / day</span>
                </div>
                <div className="border rounded p-3 d-flex justify-content-between">
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

            <div className="mt-4">
              <div>
                <span className="fs-4 fw-bold">Choose insurance</span>
              </div>
              <div className="mt-3">
                <div className="border rounded p-3 d-flex justify-content-between">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailView;
