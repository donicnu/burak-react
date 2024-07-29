import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Statistics from "./Statistics";
import Events from "./Events";
import "../../../css/home.css";

import { useDispatch, useSelector } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { setPopularDishes } from "./slice";
import { retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPopularDishes: (data: Product[]) => dispatch(setPopularDishes(data)),
});

const popularDishesRetriever = createSelector(
  retrievePopularDishes,
  (popularDishes) => ({ popularDishes })
);

export default function HomePage() {
  const { setPopularDishes } = actionDispatch(useDispatch());
  const { popularDishes } = useSelector(popularDishesRetriever);
  //Selector: Store=> Data

  useEffect(() => {
    //Backend server data request => Data
    // const result = [
    //   {
    //     _id: "6684244f59f0836ce192fe91",
    //     productStatus: "PROCESS",
    //     productCollection: "DISH",
    //     productName: "Shashlik",
    //     productPrice: 12,
    //     productLeftCount: 90,
    //     productSize: "NORMAL",
    //     productVolume: 1,
    //     productDesc: "delicious",
    //     productImages: [
    //       "uploads/products/7bc62e4c-c585-44ac-aee8-80779a0f2405.jpeg",
    //       "uploads/products/8ec5729a-2d41-4c53-b817-c4ddd9445287.jpeg",
    //     ],
    //     productViews: 0,
    //     createdAt: "2024-07-02T16:01:19.845Z",
    //     updatedAt: "2024-07-02T16:01:19.845Z",
    //     __v: 0,
    //   },
    //   {
    //     _id: "66842544d9a9d50df74bdb68",
    //     productStatus: "PROCESS",
    //     productCollection: "DISH",
    //     productName: "Shashlik",
    //     productPrice: 14,
    //     productLeftCount: 60,
    //     productSize: "LARGE",
    //     productVolume: 1,
    //     productDesc: "yummy",
    //     productImages: [
    //       "uploads/products/367c1738-929c-4012-9a70-491696c7bb61.jpeg",
    //     ],
    //     productViews: 0,
    //     createdAt: "2024-07-02T16:05:24.831Z",
    //     updatedAt: "2024-07-02T16:47:05.202Z",
    //     __v: 0,
    //   },
    // ];
    //Slice: Data => Store
    // @ts-ignore
    // setPopularDishes(result);
  }, []); //3 xil life cycle effectlarni ushlab berish uchun yordam beradi

  // console.log("popularDishes:", popularDishes);

  return (
    <div className={"homepage"}>
      <Statistics />
      <PopularDishes />
      <NewDishes />
      <Advertisement />
      <ActiveUsers />
      <Events />
    </div>
  );
}
