import React, { useEffect, useState } from "react";
import { MapActionButtons } from "./MapActionButtons";
import useWindowDimensions from "./../hooks/windowDimension";
import "./style.scss";
import { getInitials } from "../utils/commonFunction/getInitial";
import carsList from './../data/CarsList';

interface Types {
  darkMode: boolean;
  activeSection: string;
  center: any;
  zoom: number;
  screenWidth: number;
  data: any;
  onChangeSection:()=>void
}

export const Map: React.FC<Types> = ({
  darkMode,
  activeSection,
  center,
  zoom,
  screenWidth,
  data,
  onChangeSection
}: Types) => {
  const ref = React.useRef<HTMLDivElement>(null);
  const { width } = useWindowDimensions();
  const [isShowCarModule, setIsShowCarModule] = useState(false)
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
          citiesDataForMap.push(updatedItem);
        });
      }
      if (!isShowCarModule) {

        for (let i = 0; i < citiesDataForMap.length; i++) {
          const marker = new google.maps.Marker({
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
          marker.addListener("click", () => {
            setIsShowCarModule(true);
            onChangeSection()
          });
        }
      }
      else {
        carsList.forEach(element => {
          const position = new google.maps.LatLng(element.latitude, element.longitude)
          new google.maps.Marker({
            position,
            map: map,
            label: {
              text: String(element.id),
              color: "#000",
              fontSize: "12px",
            },
            icon: {
              url: "https://res.cloudinary.com/dlfodca0a/image/upload/v1656954491/icons8-white-circle-48_powrzi.png",
            },
            optimized: false,
          });
        });
      }
    }
  }, [data, center, zoom, isShowCarModule]);

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
