import React, { useState } from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import lockLight from "../assets/lock_light.svg";
import lockDark from "../assets/lock_dark.svg";
import modelLight from "../assets/directions_car_light.svg";
import modelDark from "../assets/directions_car_dark.svg";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Accordion from "react-bootstrap/Accordion";
import "./style.scss";

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
  const [activeInput, setActiveInput] = useState<string>("phone");

  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
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

        <div className="mx-4 mt-4">
          <Accordion
            defaultActiveKey="0"
            style={mystyle}
            id={!darkMode ? "" : "dark"}
          >
            <Accordion.Item
              eventKey="0"
              className={
                !darkMode
                  ? "bg-light text-dark border border-secondary"
                  : "bg-dark text-white border border-secondary"
              }
            >
              <Accordion.Header>
                <div
                  className={
                    !darkMode
                      ? "d-flex justify-content-between w-100"
                      : "d-flex justify-content-between w-100"
                  }
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
                  </div>
                </div>
              </Accordion.Header>
              <Accordion.Body
                className={!darkMode ? "pt-0 bg-light" : "pt-0 bg-dark"}
              >
                <div>
                  <div className="mb-4 mt-2">
                    <div className="d-flex justify-content-between">
                      <span>Where</span>
                      <span>Boston, MA</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>When</span>
                      <span>23 May - 25 May</span>
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="d-flex justify-content-between">
                      <span>Price</span>
                      <span>199 / day</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Premium CDW insurance</span>
                      <span>76.65 / day</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Unlimited toll usage</span>
                      <span>9 / day</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Roadside protection</span>
                      <span>13 / day</span>
                    </div>
                  </div>
                  <div className="my-4">
                    <div className="d-flex justify-content-between">
                      <span>Delivery fee</span>
                      <span>150</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span>Discount code</span>
                      <span>-25</span>
                    </div>
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold">Total for 2 days</span>
                      <span className="fw-bold">720.30</span>
                    </div>
                  </div>
                </div>
                <div>
                  <span>
                    Changed your mind?{" "}
                    <a href="#!" className="text-decoration-none">
                      Alter options.
                    </a>
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="container mt-5 px-4">
          {activeInput === "phone" ? (
            <>
              <div className="d-flex flex-column">
                <span className="fs-4 fw-bold">Enter phone number</span>
                <p>Your phone will function as your car key.</p>
              </div>
              <FloatingLabel controlId="floatingInputGrid" label="Phone number">
                <Form.Control
                  type="tel"
                  style={mystyle}
                  className={
                    !darkMode ? "border-0 text-dark" : "border-0 text-white"
                  }
                  placeholder="+1 (805) 34"
                />
              </FloatingLabel>
              <div className="my-3">
                <button
                  className="btn btn-primary"
                  onClick={() => setActiveInput("verifyCode")}
                >
                  Next
                </button>
              </div>
            </>
          ) : (
            <div>
              <div className="d-flex flex-column">
                <span className="fs-4 fw-bold">Enter Verification Code</span>
                <p>Your phone will function as your car keys.</p>
              </div>
              <FloatingLabel controlId="floatingInputGrid" label="Verification code">
                <Form.Control
                  type="tel"
                  style={mystyle}
                  className={
                    !darkMode ? "border-0 text-dark" : "border-0 text-white"
                  }
                  placeholder="2234"
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
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepOne;
