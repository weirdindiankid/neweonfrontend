import React from "react";
import arrowLeftLight from "../../assets/arrow_back_light.svg";
import arrowLeftDark from "../../assets/arrow_back_dark.svg";
import restartAltIcon from "../../assets/restart_alt.svg";

interface Types {
  darkMode: boolean;
  close: () => void;
}

export const PricingFilter: React.FC<Types> = ({
  darkMode,
  close,
}: Types) => {
  const mystyle = {
    backgroundColor: !darkMode ? "#F5F5F5" : "#1F1F1F",
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
            <span className="fs-2 fw-bold ms-3">Price</span>
          </div>
          <div>
            <a href="!#">
              Clear
              <img className="img-fluid ms-2" src={restartAltIcon} alt="" />
            </a>
          </div>
        </div>
        <div className="my-3 container">
          <div className="row row-cols-2">
            <div>
              <div className="p-3 rounded cursor m-1 col" style={mystyle}>
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
                    150 - 200
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="p-3 rounded cursor m-1 col" style={mystyle}>
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
                    200 - 250
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="p-3 rounded cursor m-1 col" style={mystyle}>
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
                    250 - 300
                  </label>
                </div>
              </div>
            </div>
            <div>
              <div className="p-3 rounded cursor m-1 col" style={mystyle}>
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
                    300 - 350
                  </label>
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
