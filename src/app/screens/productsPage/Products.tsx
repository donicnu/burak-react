import React from "react";
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

const products = [
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

export default function Products() {
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
                products.map((ele, index) => {
                  return (
                    <Stack key={index}>
                      <Stack
                        className="product-img"
                        sx={{
                          backgroundImage: `url(${ele.imagePath})`,
                        }}
                      >
                        <Box className="product-size">
                          <Typography>
                            <span
                              style={{
                                textTransform: "uppercase",
                              }}
                            >
                              Large
                            </span>{" "}
                            size
                          </Typography>
                        </Box>
                        <Stack className="product-busket">
                          <Button className="busket">
                            <img src="/icons/shopping-cart.svg" alt="" />
                          </Button>
                          <Button className="view">
                            <Badge
                              badgeContent={3}
                              color={"secondary"}
                              className="badge"
                            >
                              <RemoveRedEyeIcon
                                sx={{
                                  color: "white",
                                }}
                              />
                            </Badge>
                          </Button>
                        </Stack>
                      </Stack>
                      <Stack className="product-info">
                        <Box className="product-name">Cutlet</Box>
                        <Box className="product-price">
                          <MonetizationOnIcon />
                          10
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
