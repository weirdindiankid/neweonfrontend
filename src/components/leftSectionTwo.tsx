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
  return (
    <>
      <div style={{ minWidth: "480px" }}>
        <div className="p-3 border-end d-flex justify-content-between">
          <div
            className="btn-group border rounded-pill"
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
              className="btn btn-outline-dark border-0 m-1 rounded-pill"
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
              className="btn btn-outline-dark border-0 m-1 rounded-pill"
              htmlFor="btnradio2"
            >
              Delivery
            </label>
          </div>

          <div className="position-relative">
            <label
              htmlFor="dates"
              className="form-label position-absolute small"
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
              className="pt-4 ps-4 rounded-pill form-control"
              id="dates"
            />
          </div>
        </div>
        {displayDeliverySection ? (
          <DeliverTo themeMode={themeMode} data={data} />
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
