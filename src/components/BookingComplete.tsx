import React from "react";
import grayCarDettail from "../assets/gray_car_detail.png";

interface Types {
  darkMode: boolean;
}

export const BookingComplete: React.FC<Types> = ({ darkMode }: Types) => {
  return (
    <div
      style={{
        maxWidth: "480px",
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
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
          <div>
            <img src={grayCarDettail} className="img-fluid" alt="..." />
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
              You need our app to unlock the car, you can view your booking and
              add drivers.
            </p>
          </div>
        </div>

        <div className="my-3">
          <button className="btn btn-primary">Download the app</button>
        </div>
      </div>
    </div>
  );
};

export default BookingComplete;
