import React, { useState } from "react";
import { CarList } from "./CarList";
import { DeliverTo } from "./DeliverTo";
import "./style.scss";

interface Types {
  darkMode: boolean;
  data: any;
  onChangeSection: any;
}

export const LeftSectionTwo: React.FC<Types> = ({
  darkMode,
  data,
  onChangeSection,
}: Types) => {
  const [displayDeliverySection, setDisplayDeliverySection] =
    useState<Boolean>(false);
  return (
    <div>
      <div className="py-3 mx-1 d-flex justify-content-between mobile-view">
        <div
          className={
            !darkMode
              ? "btn-group mob-btn-group shadow rounded-pill bg-light w-50 m-1"
              : "btn-group mob-btn-group shadow rounded-pill bg-dark w-50 m-1"
          }
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
              !darkMode
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
              !darkMode
                ? "btn btn-outline-dark border-0 m-1 pt-2 rounded-pill"
                : "btn btn-outline-light border-0 m-1 pt-2 rounded-pill"
            }
            htmlFor="btnradio2"
          >
            Delivery
          </label>
        </div>

        <div className="position-relative w-50 m-1">
          <label
            htmlFor="dates"
            className={
              !darkMode
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
              !darkMode
                ? "pt-4 ps-4 mob-btn-group shadow rounded-pill form-control bg-light"
                : "pt-4 ps-4 mob-btn-group shadow rounded-pill form-control bg-dark"
            }
            id="dates"
          />
        </div>
      </div>
      {displayDeliverySection ? (
        <DeliverTo
          darkMode={darkMode}
          data={data}
          onChangeSection={onChangeSection}
        />
      ) : (
        <CarList
          darkMode={darkMode}
          data={data}
          onChangeSection={(e: String) => onChangeSection(e)}
        />
      )}
    </div>
  );
};
