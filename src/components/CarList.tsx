import React from "react";
import arrowLeft from "../assets/arrow_back_ios.svg";

interface Types {
  themeMode: String;
  data: any;
  onChangeSection: any;
}

export const CarList: React.FC<Types> = ({
  themeMode,
  data,
  onChangeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  return (
    <>
      <div style={{ minWidth: "480px" }}>
        <div className="mt-5">
          <div className="d-flex">
            <div
              onClick={() => onChangeSection("section1")}
              style={mystyle}
              className="d-flex justify-content-center align-items-center rounded-circle mx-3"
            >
              <img className="px-3 img-fluid" src={arrowLeft} alt="" />
            </div>
            <div>
              <span className="fs-2 fw-bold">Choose a car</span>
            </div>
          </div>
          {data.map((item: any) => {
            return (
              <div className="m-4" onClick={() => onChangeSection("section3")}>
                <div
                  className="card border-0 p-4 position-relative"
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
                          <div className={i < 2 ? "w-50" : ""}>
                            <div
                              className="py-2 m-2 px-3 shadow-sm rounded d-flex"
                              style={{ background: "rgba(0, 0, 0, 0.04)" }}
                            >
                              <div className="me-3">
                                <img src={feature.icon} alt="" />
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
    </>
  );
};
