import React from "react";
import attachMoneyLight from "../assets/attach_money_light.svg";
import attachMoneyDark from "../assets/attach_money_dark.svg";
import smartTotLight from "../assets/smart_toy_light.svg";
import smartTotDark from "../assets/smart_toy_dark.svg";
import speedLight from "../assets/speed_light.svg";
import speedDark from "../assets/speed_dark.svg";
import mileLight from "../assets/battery_4_bar_light.svg";
import mileDark from "../assets/battery_4_bar_dark.svg";
import modelLight from "../assets/directions_car_light.svg";
import modelDark from "../assets/directions_car_dark.svg";
import arrowDownLight from "../assets/arrow_down_light.svg";
import arrowDownDark from "../assets/arrow_down_dark.svg";
import Dropdown from "react-bootstrap/Dropdown";
import "./style.scss";

interface Types {
  darkMode: boolean;
}

export const MapActionButtons: React.FC<Types> = ({ darkMode }: Types) => {
  return (
    <div className="d-flex justify-content-center">
      <div className="d-flex justify-content-center position-absolute top-0 pt-4">
        {/* <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={attachMoneyLight} alt="" />
            ) : (
              <img className="img-fluid" src={attachMoneyDark} alt="" />
            )}
            <span className="me-2 ms-2">Price</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <div>
          <ul className="menu">
            <li className="parent">
              <a
                href="!#"
                className={
                  !darkMode
                    ? "bg-light text-dark shadow"
                    : "bg-dark text-light shadow"
                }
              >
                {!darkMode ? (
                  <img src={attachMoneyLight} alt="" />
                ) : (
                  <img src={attachMoneyDark} alt="" />
                )}
                <span className="px-3">Price</span>
                {!darkMode ? (
                  <img src={arrowDownLight} alt="" />
                ) : (
                  <img src={arrowDownDark} alt="" />
                )}
              </a>
              <ul className="children">
                <hr className="m-0" />
                <li className="p-3">
                  <span>Item</span>
                </li>
                <li>
                  <span>Item</span>
                </li>
                <li>
                  <span>Item</span>
                </li>
                <li>
                  <span>Item</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        {/* <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={smartTotLight} alt="" />
            ) : (
              <img className="img-fluid" src={smartTotDark} alt="" />
            )}
            <span className="me-2 ms-2">Autopilot</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={speedLight} alt="" />
            ) : (
              <img className="img-fluid" src={speedDark} alt="" />
            )}
            <span className="me-2 ms-2">Speed</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={modelLight} alt="" />
            ) : (
              <img className="img-fluid" src={modelDark} alt="" />
            )}
            <span className="me-2 ms-2">Model</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="m-1">
          <Dropdown.Toggle
            className={
              !darkMode
                ? "rounded-pill bg-light shadow border-0"
                : "rounded-pill bg-dark shadow border-0"
            }
            variant={!darkMode ? "basic" : "dark"}
            id="dropdown-basic"
          >
            {!darkMode ? (
              <img className="img-fluid" src={mileLight} alt="" />
            ) : (
              <img className="img-fluid" src={mileDark} alt="" />
            )}
            <span className="me-2 ms-2">Range</span>
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
      </div>
    </div>
  );
};
