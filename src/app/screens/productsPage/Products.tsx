import React, { useEffect } from "react";
import { Box, Button, Container, Stack } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import { Dispatch } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setProducts } from "./slice";
import { Product } from "../../../lib/types/product";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveProducts } from "./selector";
import ProductService from "../../services/ProductService";
import { ProductCollection } from "../../../lib/enums/product.enum";
import { serverApi } from "../../../lib/config";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setProducts: (data: Product[]) => dispatch(setProducts(data)),
});

const productsRetriever = createSelector(retrieveProducts, (products) => ({
  products,
}));

export default function Products() {
  const { setProducts } = actionDispatch(useDispatch());
  const { products } = useSelector(productsRetriever);

  useEffect(() => {
    const product = new ProductService();
    product
      .getProducts({
        page: 1,
        limit: 8,
        order: "createdAt",
        productCollection: ProductCollection.DISH,
        search: "",
      })
      .then((data) => setProducts(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={"products"}>
      <Container>
        <Stack>
          <Stack className={"avatar-big-box"}>
            <Box>
              <Typography className="title">Burak Restaurant</Typography>
            </Box>
          </Stack>
          <Stack flexDirection={"row"} justifyContent={"flex-end"}>
            <Box className="search-field">
              <input className="input" placeholder="Type here" />
              <Button color={"primary"} className="btn" variant="contained">
                Search <SearchIcon className="search-icon" />
              </Button>
            </Box>
          </Stack>
          <Stack className={"dishes-filter-section"}>
            <Button variant="contained" color={"primary"}>
              New
            </Button>
            <Button variant="contained" color={"secondary"}>
              Price
            </Button>
            <Button variant="contained" color={"secondary"}>
              Views
            </Button>
          </Stack>
          <Stack className={"list-category-section"}>
            <Stack className="product-category">
              <Button color={"primary"} variant="contained">
                Dish
              </Button>
              <Button color={"secondary"} variant="contained">
                Salad
              </Button>
              <Button color={"secondary"} variant="contained">
                Drink
              </Button>
              <Button color={"secondary"} variant="contained">
                Desert
              </Button>
              <Button color={"secondary"} variant="contained">
                Others
              </Button>
            </Stack>
            <Stack className="product-wrapper">
              {products.length !== 0 ? (
                products.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productVolume + "litre"
                      : product.productSize + "size";
                  return (
                    <Stack key={product._id}>
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: `url(${imagePath})`,
                        }}
                      >
                        <Box className="product-size">
                          <Typography>{sizeVolume}</Typography>
                        </Box>
                        <Stack className="product-busket">
                          <Button className="busket">
                            <img src="/icons/shopping-cart.svg" alt="" />
                          </Button>
                          <Button className="view">
                            <Badge
                              badgeContent={product.productViews}
                              color={"secondary"}
                              className="badge"
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  color:
                                    product.productViews === 0
                                      ? "gray"
                                      : "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Stack>
                      </Stack>
                      <Stack className="product-info">
                        <Box className="product-name">
                          {product.productName}
                        </Box>
                        <Box className="product-price">
                          <MonetizationOnIcon />
                          {product.productPrice}
                        </Box>
                      </Stack>
                    </Stack>
                  );
                })
              ) : (
                <Box className="no-data">Products are not available</Box>
              )}
            </Stack>
          </Stack>
          <Stack className={"pagination-section"}>
            <Stack spacing={2}>
              <Pagination count={3} color="secondary" />
            </Stack>
          </Stack>
        </Stack>
      </Container>

      <div className={"brand-logo"}>
        <Container>
          <Box className="title">
            <Typography>Our Family Brands</Typography>
          </Box>
          <Stack className="brand-images">
            <Box className="logo-pic">
              <img src={"/img/gurme.webp"} alt="" />
            </Box>
            <Box className="logo-pic">
              <img src={"/img/seafood.webp"} alt="" />
            </Box>
            <Box className="logo-pic">
              <img src={"/img/sweets.webp"} alt="" />
            </Box>
            <Box className="logo-pic">
              <img src={"/img/doner.webp"} alt="" />
            </Box>
          </Stack>
        </Container>
      </div>

      <div className={"address"}>
        <Container>
          <Stack className="address-area">
            <Box className="title">Our Address</Box>
            <iframe
              style={{ marginTop: "60px" }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3154.035017528904!2d-122.08541928468125!3d37.421999579823115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fba02c6a74c8d%3A0x51b8a03755b3859c!2sGoogleplex!5e0!3m2!1sen!2sus!4v1720893154596!5m2!1sen!2sus"
              width="1320"
              height="500"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
