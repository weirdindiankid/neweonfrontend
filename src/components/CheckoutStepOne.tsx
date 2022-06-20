import React from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import lockLight from "../assets/lock_light.svg";
import lockDark from "../assets/lock_dark.svg";
import modelLight from "../assets/directions_car_light.svg";
import modelDark from "../assets/directions_car_dark.svg";
import arrowDownLight from "../assets/arrow_down_light.svg";
import arrowDownDark from "../assets/arrow_down_dark.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface Types {
  darkMode: boolean;
  onChangeSection: any;
}

export const CheckoutStepOne: React.FC<Types> = ({
  darkMode,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
  };

  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between mx-4">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <button
              type="button"
              onClick={() => onChangeSection("section3")}
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
          <div>
            <span className="fs-2 fw-bold">Model X</span>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <small>Secure</small>
          {!darkMode ? (
            <img className="img-fluid ms-3" src={lockLight} alt="" />
          ) : (
            <img className="img-fluid ms-3" src={lockDark} alt="" />
          )}
        </div>
      </div>

      <div className="mx-4">
        <div
          className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
          style={mystyle}
        >
          <div className="me-2 d-flex align-items-center">
            {!darkMode ? (
              <img className="img-fluid" src={modelLight} alt="" />
            ) : (
              <img className="img-fluid" src={modelDark} alt="" />
            )}
            <span className="ms-3">Model X</span>
          </div>
          <div>
            <span className="fs-6 fw-bold me-3">430 -</span>
            {!darkMode ? (
              <img className="img-fluid" src={arrowDownLight} alt="" />
            ) : (
              <img className="img-fluid" src={arrowDownDark} alt="" />
            )}
          </div>
        </div>
      </div>

      <div className="container mt-5 px-4">
        <div className="d-flex flex-column">
          <span className="fs-4 fw-bold">Enter phone number</span>
          <p>Your phone will function as your car keys.</p>
        </div>
        <FloatingLabel controlId="floatingInputGrid" label="Phone number">
          <Form.Control
            type="tel"
            style={mystyle}
            className={!darkMode ? "border-0 text-dark" : "border-0 text-white"}
            placeholder="+1 (805) 34"
          />
        </FloatingLabel>
        <div className="my-3">
          <button
            className="btn btn-primary"
            onClick={() => onChangeSection("section5")}
          >
            Proceed checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepOne;
