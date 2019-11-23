import { FETCH_CARS, FETCH_CAR_BY_ID_SUCCESS } from "./types";

const cars = [
  {
    id: "1",
    title: "Kia",
    image: "kia.png",
    body: "4-door sedan",
    year: 2015,
    model: "Optima",
    mileage: "23,000",
    price: "18,000",
    created_at: "11-12-2019",
    updated_at: "0"
  },
  {
    id: "4",
    title: "Mercedes",
    image: "mercedes.png",
    body: "4-door sedan",
    year: 2009,
    model: "S-Class",
    mileage: "34,000",
    price: "30,000",
    created_at: "11-08-2019",
    updated_at: "0"
  },
  {
    id: "5",
    title: "Audi",
    image: "audi.png",
    body: "4-door sedan",
    year: 2017,
    model: "A3",
    mileage: "13,000",
    price: "44,000",
    created_at: "11-08-2019",
    updated_at: "0"
  },
  {
    id: "6",
    title: "Hummer",
    image: "hummer.png",
    body: "4-door",
    year: 2013,
    model: "H2",
    mileage: "21,000",
    price: "45,000",
    created_at: "11-08-2019",
    updated_at: "0"
  },
  {
    id: "7",
    title: "BMW",
    image: "bmw.png",
    body: "4-door",
    year: 2017,
    model: "320i",
    mileage: "9,000",
    price: "38,000",
    created_at: "11-08-2019",
    updated_at: "0"
  },
  {
    id: "8",
    title: "Lamborghini",
    image: "lambo.png",
    body: "2-door",
    year: 2017,
    model: "Aventador",
    mileage: "8,000",
    price: "400,000",
    created_at: "11-08-2019",
    updated_at: "0"
  }
];

export const fetchCars = () => {
  return {
    type: FETCH_CARS,
    cars
  };
};

export const fetchCarById = carId => {
  return function(dispatch) {
    setTimeout(() => {
      const car = cars.find(car => car.id === carId);
      dispatch(fetchCarByIdSuccess(car));
    }, 1000);
  };
};

const fetchCarByIdSuccess = car => {
  return {
    type: FETCH_CAR_BY_ID_SUCCESS,
    car
  };
};
