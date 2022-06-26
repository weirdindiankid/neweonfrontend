import React from "react";
import arrowLeftLight from "../../assets/arrow_back_light.svg";
import arrowLeftDark from "../../assets/arrow_back_dark.svg";
import restartAltIcon from "../../assets/restart_alt.svg";
import whiteCar from "../../assets/filters_assets/white_car.png";
import blueCar from "../../assets/filters_assets/blue_car.png";
import grayCar from "../../assets/filters_assets/gray_car.png";
import blackCar from "../../assets/filters_assets/black_car.png";

interface Types {
  darkMode: boolean;
  close: ()=> void;
}

export const ModelFilter: React.FC<Types> = ({ darkMode, close }: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };
  const nestedCard = {
    backgroundColor: !darkMode ? "rgba(0, 0, 0, 0.04)" : "#2F2F2F",
  };

  return (
    <>
      <div className="mt-2 mx-3">
        <div className="d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <button
              type="button"
              onClick={() => close()}
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
            <span className="fs-2 fw-bold ms-3">Model</span>
          </div>
          <div>
            <a href="#!">
              Clear
              <img className="img-fluid ms-2" src={restartAltIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="my-3 container">
          <div className="row">
            <div>
              <div
                className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                style={mystyle}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Model S
                  </label>
                </div>
                <div className="text-end">
                  <img className="img-fluid" src={whiteCar} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div
                className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                style={mystyle}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Model 3
                  </label>
                </div>
                <div className="text-end">
                  <img className="img-fluid" src={blueCar} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div
                className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                style={mystyle}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Model X
                  </label>
                </div>
                <div className="text-end">
                  <img className="img-fluid" src={grayCar} alt="" />
                </div>
              </div>
            </div>
            <div>
              <div
                className="p-3 rounded cursor m-1 col d-flex justify-content-between"
                style={mystyle}
              >
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexCheckDefault"
                  >
                    Model Y
                  </label>
                </div>
                <div className="text-end">
                  <img className="img-fluid" src={blackCar} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-grid pt-2 text-center">
        <div
          className="py-3 fs-5 w-100 position-absolute bottom-0"
          style={{ backgroundColor: "#0C72C0", color: "white" }}
        >
          Show 8 results
        </div>
      </div>
    </>
  );
};
