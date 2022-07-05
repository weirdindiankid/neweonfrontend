import React, { useEffect } from "react";
import { MapActionButtons } from "./MapActionButtons";
import useWindowDimensions from "./../hooks/windowDimension";
import "./style.scss";
import { getInitials } from "../utils/commonFunction/getInitial";

interface Types {
  darkMode: boolean;
  activeSection: string;
  center: any;
  zoom: number;
  screenWidth: number;
  data: any;
}

export const Map: React.FC<Types> = ({
  darkMode,
  activeSection,
  center,
  zoom,
  screenWidth,
  data,
}: Types) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (ref?.current) {
      const map = new window.google.maps.Map(ref?.current, {
        center,
        zoom,
        zoomControl: true,
        disableDefaultUI: true,
      });

      // mutiple locations
      let citiesDataForMap: any = [];
      if (data?.length) {
        data.forEach((item: any) => {
          let updatedItem = {
            position: new window.google.maps.LatLng({
              lat: item.latitude,
              lng: item.longitude,
            }),
            label: "BO",
          };
          let updatedLable = getInitials(item.city);

          updatedItem.label = updatedLable;
          console.log("updatedLable", updatedLable);
          citiesDataForMap.push(updatedItem);
        });
      }
      for (let i = 0; i < citiesDataForMap.length; i++) {
        new google.maps.Marker({
          position: citiesDataForMap[i].position,
          map: map,
          label: {
            text: citiesDataForMap[i].label,
            color: "#000",
            fontSize: "12px",
          },
          icon: {
            url: "https://res.cloudinary.com/dlfodca0a/image/upload/v1656954491/icons8-white-circle-48_powrzi.png",
            //the size of the image is 32x32,
            //when you want to add a border you must add 2*borderWidth to the size
            // size: new google.maps.Size(100, 100),
          },
          //define the shape

          //set optimized to false otherwise the marker  will be rendered via canvas
          //and is not accessible via CSS
          optimized: false,
        });
      }
    }
  }, [data, center, zoom]);

  return (
    <>
      <div className="position-relative">
        {activeSection !== "section1" ? (
          width > 575 ? (
            <div className="d-flex justify-content-center">
              <MapActionButtons
                darkMode={darkMode}
                screenWidth={screenWidth}
                activeSection={activeSection}
              />
            </div>
          ) : null
        ) : null}
        <div ref={ref} className="map-responsive"></div>
      </div>
    </>
  );
};
