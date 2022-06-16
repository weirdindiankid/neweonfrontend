import React, { useState } from "react";
import mapImg from "../assets/map.jpg";
import mapOneImg from "../assets/map-one.png";
import spaeedIcon from "../assets/speed.svg";
import cartoonIcon from "../assets/smart_toy.svg";
import mileIcon from "../assets/battery_4_bar.svg";
import modelIcon from "../assets/directions_car.svg";
import Dropdown from "react-bootstrap/Dropdown";

interface Types {
  themeMode: String;
  data: any;
  activeSection: String;
}

export const Map: React.FC<Types> = ({
  themeMode,
  data,
  activeSection,
}: Types) => {
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
    borderRadius: "20px",
  };

  return (
    <>
      {/* <img width={'100%'} src={mapImg} alt="" /> */}
      {/* <img width={'100%'} src={mapOneImg} alt="" /> */}
      <div style={{ width: "100%" }}>
        {activeSection !== "section1" ? (
          <>
            <div className="d-flex flex-wrap justify-content-center">
              <Dropdown className="m-1">
                <Dropdown.Toggle
                  className="rounded-pill shadow border-0"
                  variant={themeMode === "light" ? "basic" : "dark"}
                  id="dropdown-basic"
                >
                  $<span className="me-2 ms-2">Price</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="m-1">
                <Dropdown.Toggle
                  className="rounded-pill shadow border-0"
                  variant={themeMode === "light" ? "basic" : "dark"}
                  id="dropdown-basic"
                >
                  <img src={cartoonIcon} alt="" />
                  <span className="me-2 ms-2">Autopilot</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="m-1">
                <Dropdown.Toggle
                  className="rounded-pill shadow border-0"
                  variant={themeMode === "light" ? "basic" : "dark"}
                  id="dropdown-basic"
                >
                  <img src={spaeedIcon} alt="" />
                  <span className="me-2 ms-2">Speed</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="m-1">
                <Dropdown.Toggle
                  className="rounded-pill shadow border-0"
                  variant={themeMode === "light" ? "basic" : "dark"}
                  id="dropdown-basic"
                >
                  <img src={modelIcon} alt="" />
                  <span className="me-2 ms-2">Model</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown className="m-1">
                <Dropdown.Toggle
                  className="rounded-pill shadow border-0"
                  variant={themeMode === "light" ? "basic" : "dark"}
                  id="dropdown-basic"
                >
                  <img src={mileIcon} alt="" />
                  <span className="me-2 ms-2">Range</span>
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </>
        ) : null}
      </div>
    </>
  );
};
