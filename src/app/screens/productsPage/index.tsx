import React from "react";
import { Container } from "@mui/material";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Products from "./Products";
import ChosenProduct from "./ChosenProduct";
import "../../../css/products.css";

export default function ProductsPage() {
  const products = useRouteMatch();
  console.log("products", products); //path ni korsatib beradi

  return (
    <div className={"products-page"}>
      <Switch>
        <Route path={`${products.path}/:productId`}>
          <ChosenProduct />
        </Route>
        <Route path={`${products.path}`}>
          <Products />
        </Route>
      </Switch>
    </div>
  );
}

// <Route path={`${products.path}/:productId`}></Route>  bu yerda params id
