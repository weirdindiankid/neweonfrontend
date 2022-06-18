import React from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

interface Types {
  darkMode: boolean;
  data: any;
  onChangeSection: any;
}

export const DeliverTo: React.FC<Types> = ({
  darkMode,
  data,
  onChangeSection,
}: Types) => {
  return (
    <>
      <div style={{ minWidth: "480px" }}>
        <div className="mt-5">
          <div className="d-flex align-items-center">
            <div className="me-3">
              <button
                type="button"
                onClick={() => onChangeSection("section1")}
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
              <span className="fs-2 fw-bold">Deliver to...</span>
            </div>
          </div>

          <div className="container mt-3 px-4">
            <FloatingLabel controlId="floatingInputGrid" label="Address">
              <Form.Control type="search" placeholder="Type address" />
            </FloatingLabel>
            <div className="ms-2 me-5 lh-1">
              <small
                style={{
                  fontSize: "12px",
                  letterSpacing: "1px",
                }}
              >
                Delivery to airport, hotel or destination of your choice.
                Includes both delivery and pick up.
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeliverTo;
