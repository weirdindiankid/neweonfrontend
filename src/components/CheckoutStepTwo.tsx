import React from "react";
import arrowLeft from "../assets/arrow_back_ios.svg";
import arrowRight from "../assets/arrow_back_ios_new.png";
import lockIcon from "../assets/lock.svg";
import carIcon from "../assets/directions_car.svg";
import arrowDown from "../assets/arrow_back_ios_new.svg";
import userIcon from "../assets/person_filled.svg";
import savingIcon from "../assets/savings.svg";
import milePinIcon from "../assets/mode_of_travel.svg";
import calanderIcon from "../assets/event_busy.svg";
import assingIcon from "../assets/assignment.svg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";

interface Types {
  themeMode: String;
  onChangeSection: any;
}

export const CheckoutStepTwo: React.FC<Types> = ({ themeMode, onChangeSection }: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
  };

  return (
    <>
      <div style={{ minWidth: "480px", width: "480px" }}>
        <div className="mt-5 mx-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <div
                onClick={() => onChangeSection("section4")}
                style={mystyle}
                className="d-flex justify-content-center align-items-center rounded-circle me-3"
              >
                <img className="px-3 img-fluid" src={arrowLeft} alt="" />
              </div>
              <div>
                <span className="fs-2 fw-bold">Checkout</span>
              </div>
            </div>
            <div className="d-flex justify-content-center align-items-center">
              <small>Secure</small>

              <img className="img-fluid ms-3" src={lockIcon} alt="" />
            </div>
          </div>

          <div>
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

          <div>
            <div
              className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
              style={{ background: "rgba(0, 0, 0, 0.04)" }}
            >
              <div className="me-2 d-flex align-items-center">
                <img className="me-3" src={userIcon} alt="" />
                <span>Jhon Doe</span>
              </div>
              <div>
                <img src={arrowDown} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div>
              <span className="fs-4 fw-bold">Important information</span>
            </div>
            <div className="mt-3 d-flex">
              <div className="me-4">
                <img src={savingIcon} alt="" />
              </div>
              <div>
                <span className="fs-6 fw-bold">Security desposit</span>
                <p>
                  An authorization of $500 will be placed 24 hours before pickup
                  and released upon safe return of the vehicle.
                </p>
              </div>
            </div>

            <div className="mt-3 d-flex">
              <div className="me-4">
                <img src={milePinIcon} alt="" />
              </div>
              <div>
                <span className="fs-6 fw-bold">Mileage</span>
                <p>
                  Free 300 miles per day. Excess miles will be charged at a rate
                  of $0.85 per additional mile.
                </p>
              </div>
            </div>

            <div className="mt-3 d-flex">
              <div className="me-4">
                <img src={calanderIcon} alt="" />
              </div>
              <div>
                <span className="fs-6 fw-bold">Cancelation</span>
                <p>
                  You may cancel the reservation for a full refund up to 48
                  hours before the start of the trip. Within 48 hours of the
                  trip will incur a 50% cancellation fee.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div
              className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
              style={{ background: "rgba(0, 0, 0, 0.04)" }}
            >
              <div className="me-2 d-flex align-items-center">
                <img className="me-3" src={assingIcon} alt="" />
                <span>All terms & conditions</span>
              </div>
              <div>
                <img src={arrowRight} alt="" />
              </div>
            </div>
          </div>

          <div className="mt-5 mb-3">
            <div>
              <span className="fs-4 fw-bold">Sign to agree</span>
            </div>
            <div className="mt-3 d-flex">
              <Card className="w-100">
                <Card.Body
                  className="py-5"
                  style={{ backgroundColor: "#E8F0F9" }}
                >
                  <Card.Text className="my-5 py-3"></Card.Text>
                  {/* <Button variant="primary">Go somewhere</Button> */}
                </Card.Body>
                <Card.Footer className="d-flex">
                  <span>Sign above to agree with the terms & conditions.</span>
                  <Button variant="link" className="text-decoration-none">
                    Clear
                  </Button>
                </Card.Footer>
              </Card>
            </div>
          </div>

          <div className="mt-5 mb-3">
            <div>
              <span className="fs-4 fw-bold">Payment</span>
            </div>
            <div className="mt-3 mb-3 d-flex flex-wrap">
              <div className="w-100">
                <Form.Floating className="m-2">
                  <Form.Control
                    style={mystyle}
                    id="floatingCardNumber"
                    type="number"
                    placeholder="Card number"
                    className="border-0"
                  />
                  <label htmlFor="floatingCardNumber">Card number</label>
                </Form.Floating>
              </div>
              <div className="w-100">
                <Form.Floating className="m-2">
                  <Form.Control
                    style={mystyle}
                    id="floatingNameOnCard"
                    type="text"
                    placeholder="Name on card"
                    className="border-0"
                  />
                  <label htmlFor="floatingNameOnCard">Name on card</label>
                </Form.Floating>
              </div>

              <div className="w-50">
                <Form.Floating className="m-2">
                  <Form.Control
                    style={mystyle}
                    id="floatingExpiryDate"
                    type="date"
                    placeholder="Expiry date"
                    className="border-0"
                    maxLength={7}
                  />
                  <label htmlFor="floatingExpiryDate">Expiry date</label>
                </Form.Floating>
              </div>
              <div className="w-50">
                <Form.Floating className="m-2">
                  <Form.Control
                    style={mystyle}
                    id="floatingCVV"
                    type="password"
                    placeholder="CVV"
                    className="border-0"
                    maxLength={7}
                  />
                  <label htmlFor="floatingCVV">CVV</label>
                </Form.Floating>
              </div>
            </div>
            <div>
              <button className="btn btn-primary ms-2" onClick={() => onChangeSection("section6")}>Pay and book</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutStepTwo;
