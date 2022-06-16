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
}

export const BookingComplete: React.FC<Types> = ({ themeMode }: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  return (
    <>
      <div
        style={{
          minWidth: "480px",
          width: "480px",
        }}
      >
        <div className="mx-3">
          <div className="m-2">
            <span className="fs-2 fw-bold">Booking complete</span>
          </div>

          <div className="m-2 pt-3">
            <div className="d-flex justify-content-between">
              <div>
                <span className="fs-5 fw-bold lh-1">Model X</span>
                <p style={{ fontSize: "12px" }}>P100D</p>
              </div>
              <div className="text-end">
                <span className="fs-6 fw-bold lh-1">May 23 - 10:00</span>
                <p style={{ fontSize: "12px" }}>Pick up</p>
              </div>
            </div>
            <div className="card border-0">
              <img
                src={grayCarDettail}
                className="card-img img-fluid"
                alt="..."
              />
              <p>
                You’ve payed and booked the Tesla Model X P100D. An e-mail
                confirmation will be sent.
              </p>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <span className="fs-4 fw-bold">Unlock the car</span>
            </div>
            <div className="mt-3">
              <p>
                You need our app to unlock the car, you can view your booking
                and add drivers.
              </p>
            </div>
          </div>

          <div className="my-3">
            <button className="btn btn-primary">Download the app</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingComplete;
