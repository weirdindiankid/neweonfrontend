import React from "react";
import arrowLeft from "../assets/arrow_back_ios.svg";
import lockIcon from "../assets/lock.svg";
import carIcon from "../assets/directions_car.svg";
import arrowDown from "../assets/arrow_back_ios_new.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface Types {
  themeMode: String;
  onChangeSection: any;
}

export const CheckoutStepOne: React.FC<Types> = ({
  themeMode,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  return (
    <>
      <div style={{ minWidth: "480px", width: "480px" }}>
        <div className="mt-5">
          <div className="d-flex justify-content-between mx-4">
            <div className="d-flex">
              <div
                onClick={() => onChangeSection("section3")}
                style={mystyle}
                className="d-flex justify-content-center align-items-center rounded-circle me-3"
              >
                <img className="px-3 img-fluid" src={arrowLeft} alt="" />
              </div>
              <div>
                <span className="fs-2 fw-bold">Model X</span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <small>Secure</small>

              <img className="img-fluid ms-3" src={lockIcon} alt="" />
            </div>
          </div>

          <div className="mx-4">
            <div
              className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
              style={{ background: "rgba(0, 0, 0, 0.04)" }}
            >
              <div className="me-2 d-flex align-items-center">
                <img className="me-3" src={carIcon} alt="" />
                <span>Model X</span>
              </div>
              <div>
                <span className="fs-6 fw-bold me-3">430 -</span>
                <img src={arrowDown} alt="" />
              </div>
            </div>
          </div>

          <div className="container mt-5 px-4">
            <div className="d-flex flex-column">
              <span className="fs-4 fw-bold">Enter phone number</span>
              <p>Your phone will function as your car keys.</p>
            </div>
            <FloatingLabel controlId="floatingInputGrid" label="Phone number">
              <Form.Control type="tel" placeholder="+1 (805) 34" />
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
      </div>
    </>
  );
};

export default CheckoutStepOne;
