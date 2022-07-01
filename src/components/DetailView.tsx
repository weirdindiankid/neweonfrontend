import React, { useState } from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import Form from "react-bootstrap/Form";

interface Types {
  darkMode: boolean;
  onChangeSection: any;
  data: any;
}

export const DetailView: React.FC<Types> = ({
  darkMode,
  onChangeSection,
  data,
}: Types) => {
  const [checkBox, setCheckBox] = useState<boolean>(false);
  const [checkBox2, setCheckBox2] = useState<boolean>(false);
  const [anything, setAnything] = React.useState({
    unlimited: false,
    roadside: false,
    discount: false,
  });

  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  const nestedCards = {
    backgroundColor: !darkMode ? "rgba(0, 0, 0, 0.04)" : "#2F2F2F",
  };

  return (
    <div
      style={{
        height: "100vh",
        overflow: "scroll",
        overflowX: "hidden",
      }}
    >
      <div className="d-flex justify-content-between mx-2 my-4">
        <div className="d-flex align-items-center">
          <div className="me-3">
            <button
              type="button"
              onClick={() => onChangeSection("section2")}
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
            <span className="fs-2 fw-bold">{data?.model}</span>
          </div>
        </div>
        <div className="d-flex flex-column text-end">
          <span className="fs-5 fw-bold">{data?.numDays}</span>
          <small>{data?.numHours}</small>
        </div>
      </div>

      <div className="d-flex scroll-inner" style={{ overflowX: "auto" }}>
        <div className="mx-3 py-4" style={mystyle}>
          <img src={data?.img} alt="..." />
        </div>
        <div className="mx-3 py-4" style={mystyle}>
          <img src={data?.img} alt="..." />
        </div>
        <div className="mx-3 py-4" style={mystyle}>
          <img src={data?.img} alt="..." />
        </div>

        <div className="mx-3 py-4" style={mystyle}>
          <img src={data?.img} alt="..." />
        </div>
        <div className="mx-3 py-4" style={mystyle}>
          <img src={data?.img} alt="..." />
        </div>
      </div>
      <div className="mx-3">
        <small>{data?.description}</small>
      </div>

      <div className="m-2">
        <div className="mt-4">
          <div className="row">
            {data.features.map((feature: any, i: number) => {
              return (
                <div className={i < 2 ? "col-6 lh-1" : "col-4 lh-1"}>
                  <div
                    className="p-2 m-2 shadow-sm rounded d-flex"
                    style={nestedCards}
                  >
                    <div className="me-2">
                      <img
                        src={!darkMode ? feature.iconLight : feature.iconDark}
                        alt=""
                      />
                    </div>
                    <div>
                      <small style={{ fontSize: "12px" }}>
                        {feature.title}
                      </small>
                    </div>
                  </div>
                </div>
              );
            })}
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
                <small style={{ fontSize: "12px" }}>To 45 Boston Avenue</small>
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
            <div
              className="border border-secondary rounded p-3 d-flex justify-content-between"
              style={!checkBox ? nestedCards : undefined}
            >
              <div className="d-flex flex-column lh-sm">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Your insurance"
                    name="group1"
                    type="radio"
                    checked={checkBox}
                    onClick={() => {
                      setCheckBox(!checkBox);
                      setCheckBox2(false);
                    }}
                  />
                </Form>
                {checkBox ? (
                  <small className="px-4" style={{ fontSize: "12px" }}>
                    Before you pick up the car, we’ll ask you to upload a copy
                    of your insurance agreement.
                  </small>
                ) : null}
              </div>
              <span className="fs-6 fw-bold">Free</span>
            </div>
          </div>
          <div className="mt-3">
            <div
              className="border border-secondary rounded p-3 d-flex justify-content-between"
              style={!checkBox ? nestedCards : undefined}
            >
              <div className="d-flex flex-column lh-sm">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Our insurance"
                    name="group2"
                    type="radio"
                    checked={checkBox2}
                    onClick={() => {
                      setCheckBox2(!checkBox2);
                      setCheckBox(false);
                    }}
                  />
                </Form>
                {checkBox2 ? (
                  <small className="px-4" style={{ fontSize: "12px" }}>
                    Covers damage up to the full vehicle value with a $500
                    deductible. Liability coverage up to the state minimum.
                  </small>
                ) : null}
              </div>
              <span className="fs-6 fw-bold text-nowrap">+76.65 / day</span>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div>
            <span className="fs-4 fw-bold">Anything else?</span>
          </div>
          <div className="mt-3">
            <div
              className="border border-secondary rounded p-3 d-flex justify-content-between"
              style={!anything.unlimited ? nestedCards : undefined}
            >
              <div className="d-flex flex-column lh-sm">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Unlimited toll usage"
                    name="group1"
                    checked={anything.unlimited}
                    onClick={() => {
                      setAnything({
                        ...anything,
                        unlimited: !anything.unlimited,
                      });
                    }}
                  />
                </Form>
                {anything.unlimited ? (
                  <small className="px-4" style={{ fontSize: "12px" }}>
                    Don’t worry about toll road payments.
                  </small>
                ) : null}
              </div>
              <span className="fs-6 fw-bold text-nowrap">+9 / day</span>
            </div>
          </div>
          <div className="mt-3">
            <div
              className="border border-secondary rounded p-3 d-flex justify-content-between"
              style={!anything.roadside ? nestedCards : undefined}
            >
              <div className="d-flex flex-column lh-sm">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Roadside protection"
                    name="group1"
                    checked={anything.roadside}
                    onClick={() => {
                      setAnything({
                        ...anything,
                        roadside: !anything.roadside,
                      });
                    }}
                  />
                </Form>
                {anything.roadside ? (
                  <small className="px-4" style={{ fontSize: "12px" }}>
                    Covers you for tire or windshield replacement and any
                    related roadside assistance.
                  </small>
                ) : null}
              </div>
              <span className="fs-6 fw-bold text-nowrap">+13 / day</span>
            </div>
          </div>
          <div className="mt-3">
            <div
              className="border border-secondary rounded p-3 d-flex justify-content-between"
              style={!anything.discount ? nestedCards : undefined}
            >
              <div className="d-flex flex-column w-75">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Add discount code"
                    name="group1"
                    checked={anything.discount}
                    onClick={() => {
                      setAnything({
                        ...anything,
                        discount: !anything.discount,
                      });
                    }}
                  />
                </Form>
                {anything.discount ? (
                  <>
                    <div>
                      <Form.Floating>
                        <Form.Control
                          style={nestedCards}
                          id="floatingEnterCode"
                          type="text"
                          placeholder="↑↑↓↓←→←→BA"
                          className={
                            !darkMode
                              ? "border-0 text-dark rounded"
                              : "border-0 rounded text-white"
                          }
                        />
                        <label htmlFor="floatingEnterCode">Enter code</label>
                      </Form.Floating>
                    </div>
                    <div className="my-3">
                      <button type="button" className="btn btn-outline-dark">
                        Redeem code
                      </button>
                    </div>
                    <div>
                      <span>Your code is worth 25.-</span>
                    </div>
                  </>
                ) : null}
              </div>
              <span className="fs-6 fw-bold text-danger text-nowrap">-25</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="m-2 px-2">
        <div className="d-flex justify-content-between align-items-center">
          <span className="fs-6 fw-bold">Total for 2 days</span>
          <span className="fs-6 fw-bold">720.30</span>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <span className="text-danger">Total for 2 days</span>
          <span className="text-danger">720.30</span>
        </div>
      </div>

      <div className="ms-2">
        <button
          className="btn btn-primary"
          onClick={() => onChangeSection("section4")}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default DetailView;
