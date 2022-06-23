import React, { useState } from "react";
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
import Sheet, { SheetRef } from "react-modal-sheet";
import { PricingFilter } from "./PricingFilter";
import { AutopilotFilter } from "./AutopilotFilter";
import { SpeedFilter } from "./SpeedFilter";
import { ModelFilter } from "./ModelFilter";
import { RangeFilter } from "./RangeFilter";
import "./style.css";

interface Types {
  darkMode: boolean;
}

export const MobileFilters: React.FC<Types> = ({ darkMode }: Types) => {
  const [activeSection, setActiveSection] = useState<String>("section1");

  const [isOpen, setOpen] = React.useState(false);
  const ref = React.useRef<SheetRef>();
  const snapTo = (i: number) => ref.current?.snapTo(i);

  return (
    <div>
      <div className="d-flex scroll-inner" style={{ overflowX: "auto" }}>
        <button
          type="button"
          className="btn btn-light border rounded-pill shadow d-flex align-items-center m-2"
          onClick={() => {
            setActiveSection("pricing");
            setOpen(true);
          }}
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
          onClick={() => {
            setActiveSection("autopilot");
            setOpen(true);
          }}
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
          onClick={() => {
            setActiveSection("speed");
            setOpen(true);
          }}
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
          onClick={() => {
            setActiveSection("model");
            setOpen(true);
          }}
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
          onClick={() => {
            setActiveSection("range");
            setOpen(true);
          }}
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

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[550, 550, 300, 0]}
        initialSnap={1}
        onSnap={(snapIndex) =>
          console.log("> Current snap point index:", snapIndex)
        }
      >
        <Sheet.Container style={{}}>
          <Sheet.Header />
          <Sheet.Content>
            {/* <button onClick={() => snapTo(0)}>Snap to index 0</button>
            <button onClick={() => snapTo(1)}>Snap to index 1</button>
            <button onClick={() => snapTo(2)}>Snap to index 2</button> */}
            {activeSection === "pricing" ? (
              <PricingFilter darkMode={false} close={() => snapTo(3)} />
            ) : activeSection === "autopilot" ? (
              <AutopilotFilter darkMode={false} close={() => snapTo(3)} />
            ) : activeSection === "speed" ? (
              <SpeedFilter darkMode={false} close={() => snapTo(3)} />
            ) : activeSection === "model" ? (
              <ModelFilter darkMode={false} close={() => snapTo(3)} />
            ) : activeSection === "range" ? (
              <RangeFilter darkMode={false} close={() => snapTo(3)} />
            ) : null}
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};
