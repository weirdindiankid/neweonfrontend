import React from "react";
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

      <div className="m-3">
        <div className="card border-0" style={mystyle}>
          <div className="m-3">
            <img src={data?.img} className="card-img img-fluid" alt="..." />
          </div>
        </div>
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
            <div className="border border-secondary rounded p-3 d-flex justify-content-between">
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
                  Before you pick up the car, we’ll ask you to upload a copy of
                  your insurance agreement.
                </small>
              </div>
              <span className="fs-6 fw-bold">Free</span>
            </div>
          </div>
          <div className="w-100">
            <div
              className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
              style={nestedCards}
            >
              <div className="me-2">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Our insurance"
                    name="group1"
                    type="radio"
                  />
                </Form>
              </div>
              <div>
                <span className="fs-6 fw-bold" style={{ color: "GrayText" }}>
                  +167.30 / day
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div>
            <span className="fs-4 fw-bold">Anything else?</span>
          </div>

          <div className="w-100">
            <div
              className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
              style={nestedCards}
            >
              <div className="me-2">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Unlimited toll usage"
                    name="group1"
                  />
                </Form>
              </div>
              <div>
                <span className="fs-6 fw-bold" style={{ color: "GrayText" }}>
                  +9 / day
                </span>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div
              className="py-2 px-3 my-3 shadow-sm rounded d-flex justify-content-between"
              style={nestedCards}
            >
              <div className="me-2">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Roadside protection"
                    name="group1"
                  />
                </Form>
              </div>
              <div>
                <span className="fs-6 fw-bold" style={{ color: "GrayText" }}>
                  +13 / day
                </span>
              </div>
            </div>
          </div>
          <div className="w-100">
            <div
              className="py-2 px-3 my-3 shadow-sm rounded"
              style={nestedCards}
            >
              <div className="me-2">
                <Form>
                  <Form.Check
                    className="fs-6 fw-bold"
                    inline
                    label="Add discount code"
                    name="group1"
                  />
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="m-4">
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
