import React from "react";
import arrowLeftLight from "../assets/arrow_back_light.svg";
import arrowLeftDark from "../assets/arrow_back_dark.svg";
import { MobileFilters } from "./filters/MobileFilters";

interface Types {
  darkMode: boolean;
  data: any;
  onChangeSection: any;
  onChangeCarDetails: any;
  carDetails: any;
}

export const CarList: React.FC<Types> = ({
  darkMode,
  data,
  onChangeSection,
  onChangeCarDetails,
  carDetails,
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };
  const nestedCards = {
    backgroundColor: !darkMode ? "rgba(0, 0, 0, 0.04)" : "#2F2F2F",
  };

  return (
    <div className="mt-5">
      <div className="d-flex align-items-center">
        <div className="mx-3">
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
          <span className="fs-2 fw-bold">Choose a car</span>
        </div>
      </div>
      <div className="d-sm-none mx-2">
        <MobileFilters darkMode={darkMode} />
      </div>
      <div>
        {data.map((item: any) => {
          return (
            <div
              className={carDetails?.id !== item.id ? "m-4 cursor in-active" : "m-4 cursor"}
              onClick={() => {
                onChangeSection("section3");
                onChangeCarDetails(item);
              }}
            >
              <div
                className="card border-0 p-2 position-relative"
                style={mystyle}
              >
                <div className="m-3">
                  <img
                    src={item.img}
                    className="card-img img-fluid"
                    alt="..."
                  />
                </div>
                <div className="d-flex flex-column ps-3 pt-2 position-absolute start-0 top-0">
                  <span className="fs-4 fw-bold">{item.model}</span>
                  <small>{item.disc}</small>
                </div>
                <div className="d-flex flex-column align-items-end pe-3 pt-2 position-absolute end-0 top-0">
                  <span className="fs-6 fw-bold">{item.numDays}</span>
                  <small>{item.numHours}</small>
                </div>

                <div className="mt-4">
                  <div className="d-flex flex-wrap justify-content-between">
                    {item.features.map((feature: any, i: number) => {
                      return (
                        <div className={i < 2 ? "col-6" : "col-4"}>
                          <div
                            className="py-2 m-2 px-3 shadow-sm rounded d-flex"
                            style={nestedCards}
                          >
                            <div className="me-3">
                              <img
                                src={
                                  !darkMode
                                    ? feature.iconLight
                                    : feature.iconDark
                                }
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
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
