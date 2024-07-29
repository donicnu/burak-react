import React, { useEffect } from "react";
import PopularDishes from "./PopularDishes";
import NewDishes from "./NewDishes";
import Advertisement from "./Advertisement";
import ActiveUsers from "./ActiveUsers";
import Statistics from "./Statistics";
import Events from "./Events";
import "../../../css/home.css";

export default function HomePage() {
  //Selector: Store=> Data
  useEffect(() => {
    //Backend server data request => Data
    //Slice: Data => Store
  }, []); //3 xil life cycle effectlarni ushlab berish uchun yordam beradi
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
