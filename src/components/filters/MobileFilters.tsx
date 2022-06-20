import React from "react";
import attachMoneyLight from "../../assets/attach_money_light.svg";
import attachMoneyDark from "../../assets/attach_money_dark.svg";
import smartTotLight from "../../assets/smart_toy_light.svg";
import smartTotDark from "../../assets/smart_toy_dark.svg";
import speedLight from "../../assets/speed_light.svg";
import speedDark from "../../assets/speed_dark.svg";
import mileLight from "../../assets/battery_4_bar_light.svg";
import mileDark from "../../assets/battery_4_bar_dark.svg";
import modelLight from "../../assets/directions_car_light.svg";
import modelDark from "../../assets/directions_car_dark.svg";
import arrowDownLight from "../../assets/arrow_down_light.svg";
import arrowDownDark from "../../assets/arrow_down_dark.svg";
import Sheet from "react-modal-sheet";
import "./style.css";

interface Types {
  darkMode: boolean;
}

export const MobileFilters: React.FC<Types> = ({ darkMode }: Types) => {
  const [isOpen, setOpen] = React.useState(false);

  return (
    <div>
      <div className="d-flex scroll-inner" style={{ overflowX: "auto" }}>
        <button
          type="button"
          className="btn btn-light border rounded-pill shadow d-flex align-items-center m-2"
          onClick={() => setOpen(true)}
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
        </button>

        <button
          type="button"
          className="btn btn-light border rounded-pill shadow d-flex align-items-center m-2"
          onClick={() => setOpen(true)}
        >
          {!darkMode ? (
            <img src={smartTotLight} alt="" />
          ) : (
            <img src={smartTotDark} alt="" />
          )}
          <span className="mx-3">Autopilot</span>
          {!darkMode ? (
            <img src={arrowDownLight} alt="" />
          ) : (
            <img src={arrowDownDark} alt="" />
          )}
        </button>

        <button
          type="button"
          className="btn btn-light border rounded-pill shadow d-flex align-items-center m-2"
          onClick={() => setOpen(true)}
        >
          {!darkMode ? (
            <img src={speedLight} alt="" />
          ) : (
            <img src={speedDark} alt="" />
          )}
          <span className="mx-3">Speed</span>
          {!darkMode ? (
            <img src={arrowDownLight} alt="" />
          ) : (
            <img src={arrowDownDark} alt="" />
          )}
        </button>

        <button
          type="button"
          className="btn btn-light border rounded-pill shadow d-flex align-items-center m-2"
          onClick={() => setOpen(true)}
        >
          {!darkMode ? (
            <img src={modelLight} alt="" />
          ) : (
            <img src={modelDark} alt="" />
          )}
          <span className="mx-3">Model</span>
          {!darkMode ? (
            <img src={arrowDownLight} alt="" />
          ) : (
            <img src={arrowDownDark} alt="" />
          )}
        </button>

        <button
          type="button"
          className="btn btn-light border rounded-pill shadow d-flex align-items-center m-2"
          onClick={() => setOpen(true)}
        >
          {!darkMode ? (
            <img src={mileLight} alt="" />
          ) : (
            <img src={mileDark} alt="" />
          )}
          <span className="mx-3">Range</span>
          {!darkMode ? (
            <img src={arrowDownLight} alt="" />
          ) : (
            <img src={arrowDownDark} alt="" />
          )}
        </button>
      </div>

      <Sheet isOpen={isOpen} onClose={() => setOpen(false)}>
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>ABC</Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};
