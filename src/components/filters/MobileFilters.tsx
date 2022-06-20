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
import Dropdown from "react-bootstrap/Dropdown";
import Sheet, { SheetRef } from "react-modal-sheet";
import "./style.css";

interface Types {
  darkMode: boolean;
}

export const MobileFilters: React.FC<Types> = ({ darkMode }: Types) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div className="d-flex flex-wrap justify-content-center">
      <button onClick={() => setOpen(true)}>Open sheet 1</button>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>ABC</Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>

      {/* <Dropdown className="m-1">
        <Dropdown.Toggle
          className="rounded-pill shadow border-0"
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
      </Dropdown>

      <Dropdown className="m-1">
        <Dropdown.Toggle
          className="rounded-pill shadow border-0"
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
          className="rounded-pill shadow border-0"
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
          className="rounded-pill shadow border-0"
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
          className="rounded-pill shadow border-0"
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
  );
};
