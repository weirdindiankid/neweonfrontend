import React, { useState } from "react";
import { CarList } from "./CarList";
import { DeliverTo } from "./DeliverTo";

interface Types {
  themeMode: String;
  data: any;
  onChangeSection: any;
}

export const LeftSectionTwo: React.FC<Types> = ({
  themeMode,
  data,
  onChangeSection,
}: Types) => {
  const [displayDeliverySection, setDisplayDeliverySection] =
    useState<Boolean>(false);
  const mystyle = {
    backgroundColor: themeMode === "light" ? "#F5F5F5" : "#1F1F1F",
  };
  return (
    <>
      <div
        style={{
          minWidth: "480px",
          height: "100vh",
          overflow: "scroll",
          overflowX: "hidden",
        }}
      >
        <div className="p-3 d-flex justify-content-between">
          <div
            className="btn-group border border-secondary rounded-pill col-6 m-1"
            role="group"
            aria-label="Basic radio toggle button group"
          >
            <input
              onClick={() => setDisplayDeliverySection(false)}
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio1"
              autoComplete="off"
              checked
            />
            <label
              className={
                themeMode === "light"
                  ? "btn btn-outline-dark border-0 m-1 pt-2 rounded-pill"
                  : "btn btn-outline-light border-0 m-1 pt-2 rounded-pill"
              }
              htmlFor="btnradio1"
            >
              Pick up
            </label>

            <input
              onClick={() => setDisplayDeliverySection(true)}
              type="radio"
              className="btn-check"
              name="btnradio"
              id="btnradio2"
              autoComplete="off"
            />
            <label
              className={
                themeMode === "light"
                  ? "btn btn-outline-dark border-0 m-1 pt-2 rounded-pill"
                  : "btn btn-outline-light border-0 m-1 pt-2 rounded-pill"
              }
              htmlFor="btnradio2"
            >
              Delivery
            </label>
          </div>

          <div className="position-relative col-6 m-1">
            <label
              htmlFor="dates"
              className={
                themeMode === "light"
                  ? "form-label position-absolute small text-dark"
                  : "form-label position-absolute small text-light"
              }
              style={{ top: "5px", left: "25px" }}
            >
              Dates
            </label>
            <input
              data-start="16/11/2018"
              data-end="16/12/2018"
              type="text"
              name="dates"
              placeholder="May 23 - May 25"
              className={
                themeMode === "light"
                  ? "pt-4 ps-4 border-secondary rounded-pill form-control bg-light"
                  : "pt-4 ps-4 border-secondary rounded-pill form-control bg-dark"
              }
              id="dates"
            />
          </div>
        </div>
        {displayDeliverySection ? (
          <DeliverTo
            themeMode={themeMode}
            data={data}
            onChangeSection={onChangeSection}
          />
        ) : (
          <CarList
            themeMode={themeMode}
            data={data}
            onChangeSection={(e: String) => onChangeSection(e)}
          />
        )}
      </div>
    </>
  );
};
