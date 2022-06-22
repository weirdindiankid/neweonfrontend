import React from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import arrowRightLight from "../assets/arrow_right_light.svg";
import arrowRightDark from "../assets/arrow_right_dark.svg";
import lockLight from "../assets/lock_light.svg";
import lockDark from "../assets/lock_dark.svg";
import modelLight from "../assets/directions_car_light.svg";
import modelDark from "../assets/directions_car_dark.svg";
import arrowDownLight from "../assets/arrow_down_light.svg";
import arrowDownDark from "../assets/arrow_down_dark.svg";
import personLight from "../assets/person_filled_light.svg";
import personDark from "../assets/person_filled_dark.svg";
import savingLight from "../assets/savings_light.svg";
import savingDark from "../assets/savings_dark.svg";
import milePinLight from "../assets/mode_of_travel_light.svg";
import milePinDark from "../assets/mode_of_travel_dark.svg";
import calanderLight from "../assets/event_busy_light.svg";
import calanderDark from "../assets/event_busy_dark.svg";
import assingLight from "../assets/assignment_light.svg";
import assingDark from "../assets/assignment_dark.svg";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Accordion from "react-bootstrap/Accordion";

interface Types {
  darkMode: boolean;
  onChangeSection: any;
}

export const CheckoutStepTwo: React.FC<Types> = ({
  darkMode,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
  };

  return (
    <div
      style={{
        maxWidth: "480px",
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <div className="mt-5 mx-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <button
                type="button"
                onClick={() => onChangeSection("section4")}
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
              <span className="fs-2 fw-bold">Checkout</span>
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

        <div className="my-3">
          <Accordion defaultActiveKey="0" style={mystyle}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="d-flex justify-content-between w-100">
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
              <Accordion.Body>
                <div>
                  <div className="my-4">
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
                    <a href="!#" className="text-decoration-none">
                      Alter options.
                    </a>
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div>
          <Accordion defaultActiveKey="0" style={mystyle}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <div className="me-2 d-flex align-items-center">
                  {!darkMode ? (
                    <img className="img-fluid" src={personLight} alt="" />
                  ) : (
                    <img className="img-fluid" src={personDark} alt="" />
                  )}
                  <span className="ms-3">Jhon Doe</span>
                </div>
              </Accordion.Header>
              <Accordion.Body>
                <div className="w-100 my-3">
                  <Form.Floating>
                    <Form.Control
                      style={mystyle}
                      id="floatingNameOnCard"
                      type="text"
                      placeholder="Jhon"
                      className={
                        !darkMode ? "border-0 text-dark" : "border-0 text-white"
                      }
                    />
                    <label htmlFor="floatingNameOnCard">Fisrt name</label>
                  </Form.Floating>
                </div>

                <div className="w-100 my-3">
                  <Form.Floating>
                    <Form.Control
                      style={mystyle}
                      id="floatingNameOnCard"
                      type="text"
                      placeholder="Doe"
                      className={
                        !darkMode ? "border-0 text-dark" : "border-0 text-white"
                      }
                    />
                    <label htmlFor="floatingNameOnCard">Last name</label>
                  </Form.Floating>
                </div>

                <div className="w-100 my-3">
                  <Form.Floating>
                    <Form.Control
                      style={mystyle}
                      id="floatingNameOnCard"
                      type="email"
                      placeholder="john@doe.com"
                      className={
                        !darkMode ? "border-0 text-dark" : "border-0 text-white"
                      }
                    />
                    <label htmlFor="floatingNameOnCard">E-mail address</label>
                  </Form.Floating>
                </div>

                <div className="w-100 my-3">
                  <Form.Floating>
                    <Form.Control
                      style={mystyle}
                      id="floatingNameOnCard"
                      type="text"
                      placeholder="+1 (805) 346 123"
                      className={
                        !darkMode ? "border-0 text-dark" : "border-0 text-white"
                      }
                    />
                    <label htmlFor="floatingNameOnCard">Phone number</label>
                  </Form.Floating>
                </div>

                <div className="w-100 my-3">
                  <Form.Floating>
                    <Form.Control
                      style={mystyle}
                      id="floatingNameOnCard"
                      type="text"
                      placeholder="04 - 20 - 1990"
                      className={
                        !darkMode ? "border-0 text-dark" : "border-0 text-white"
                      }
                    />
                    <label htmlFor="floatingNameOnCard">Date of birth</label>
                  </Form.Floating>
                </div>
                <div>
                  <span>
                    Not you?{" "}
                    <a href="!#" className="text-decoration-none">
                      Continue as guest.
                    </a>
                  </span>
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>

        <div className="mt-5">
          <div>
            <span className="fs-4 fw-bold">Important information</span>
          </div>
          <div className="mt-3 d-flex">
            <div className="me-4">
              {!darkMode ? (
                <img src={savingLight} alt="" />
              ) : (
                <img src={savingDark} alt="" />
              )}
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
              {!darkMode ? (
                <img src={milePinLight} alt="" />
              ) : (
                <img src={milePinDark} alt="" />
              )}
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
              {!darkMode ? (
                <img src={calanderLight} alt="" />
              ) : (
                <img src={calanderDark} alt="" />
              )}
            </div>
            <div>
              <span className="fs-6 fw-bold">Cancelation</span>
              <p>
                You may cancel the reservation for a full refund up to 48 hours
                before the start of the trip. Within 48 hours of the trip will
                incur a 50% cancellation fee.
              </p>
            </div>
          </div>
        </div>

        <div>
          <div
            className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
            style={mystyle}
          >
            <div className="me-2 d-flex align-items-center">
              {!darkMode ? (
                <img src={assingLight} alt="" />
              ) : (
                <img src={assingDark} alt="" />
              )}
              <span className="ms-3">All terms & conditions</span>
            </div>
            <div>
              {!darkMode ? (
                <img src={arrowRightLight} alt="" />
              ) : (
                <img src={arrowRightDark} alt="" />
              )}
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
                <p className="text-dark">
                  Sign above to agree with the terms & conditions.
                </p>
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
                  className={
                    !darkMode ? "border-0 text-dark" : "border-0 text-white"
                  }
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
                  className={
                    !darkMode ? "border-0 text-dark" : "border-0 text-white"
                  }
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
                  className={
                    !darkMode ? "border-0 text-dark" : "border-0 text-white"
                  }
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
                  className={
                    !darkMode ? "border-0 text-dark" : "border-0 text-white"
                  }
                  maxLength={7}
                />
                <label htmlFor="floatingCVV">CVV</label>
              </Form.Floating>
            </div>
          </div>
          <div>
            <button
              className="btn btn-primary ms-2"
              onClick={() => onChangeSection("section6")}
            >
              Pay and book
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutStepTwo;
