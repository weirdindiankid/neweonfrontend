import blueCar from "../assets/blue_car.png";
import blackCar from "../assets/black-car.png";
import grayCar from "../assets/gray_car.png";
import whiteCar from "../assets/white_car.png";
import smartTotLight from "../assets/smart_toy_light.svg";
import smartTotDark from "../assets/smart_toy_dark.svg";
import speedLight from "../assets/speed_light.svg";
import speedDark from "../assets/speed_dark.svg";
import mileLight from "../assets/battery_4_bar_light.svg";
import mileDark from "../assets/battery_4_bar_dark.svg";
import seatLight from "../assets/airline_seat_recline_extra_light.svg";
import seatDark from "../assets/airline_seat_recline_extra_dark.svg";
import interiorLight from "../assets/interior_light.svg";
import interiorDark from "../assets/interior_dark.svg";

const carsList = [
  {
    id: 1,
    img: blueCar,
    model: "Model 3",
    disc: "Performance",
    numDays: "169 / day",
    numHours: "338 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
    features: [
      {
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Enhanced autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.4s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "310 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
        title: "Interior",
      },
    ],
  },
  {
    id: 2,
    img: blackCar,
    model: "Model Y",
    disc: "Long range",
    numDays: "199 / day",
    numHours: "398 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
    features: [
      {
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Full self driving",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.4s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "326 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
        title: "Interior",
      },
    ],
  },
  {
    id: 3,
    img: grayCar,
    model: "Model X",
    disc: "P100D",
    numDays: "219 / day",
    numHours: "438 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
    features: [
      {
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Enhanced autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.9s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "295 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
        title: "Interior",
      },
    ],
  },
  {
    id: 4,
    img: whiteCar,
    model: "Model S",
    disc: "Palladium",
    numDays: "299 / day",
    numHours: "598 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
    features: [
      {
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Standard autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 3.1s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "405 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
        title: "Interior",
      },
    ],
  },
  {
    id: 5,
    img: blueCar,
    model: "Model 3",
    disc: "Performance",
    numDays: "169 / day",
    numHours: "338 / total",
    description: `The Tesla Model X P100D is a battery electric mid-size luxury
          crossover. The vehicle is notable in that it uses falcon-wing doors
          for passenger access.`,
    features: [
      {
        iconLight: smartTotLight,
        iconDark: smartTotDark,
        title: "Enhanced autopilot",
      },
      {
        iconLight: speedLight,
        iconDark: speedDark,
        title: "0-60 in 4.4s",
      },
      {
        iconLight: mileLight,
        iconDark: mileDark,
        title: "326 miles",
      },
      {
        iconLight: seatLight,
        iconDark: seatDark,
        title: "5 seats",
      },
      {
        iconLight: interiorLight,
        iconDark: interiorDark,
        title: "Interior",
      },
    ],
  },
]

export default carsList;