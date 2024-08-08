import { useState, SyntheticEvent, useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";

import { useDispatch } from "react-redux";
import { Dispatch } from "@reduxjs/toolkit";
import { setPausedOrders, setProcessOrders, setFinishedOrders } from "./slice";

import "../../../css/order.css";
import { Order, OrderInquiry } from "../../../lib/types/order";
import { OrderStatus } from "../../../lib/enums/order.enum";
import OrderService from "../../services/OrderService";

/** REDUX SLICE & SELECTOR */
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrders: (data: Order[]) => dispatch(setFinishedOrders(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrders } =
    actionDispatch(useDispatch());
  const [value, setValue] = useState("1"); //bydefault 1 ni ochib berishi yani paused ordersni
  const [orderInquiry, setOrderInquiry] = useState<OrderInquiry>({
    page: 1,
    limit: 5,
    orderStatus: OrderStatus.PAUSE,
  });
  useEffect(() => {
    const order = new OrderService();

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PAUSE })
      .then((data) => setPausedOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.PROCESS })
      .then((data) => setProcessOrders(data))
      .catch((err) => console.log(err));

    order
      .getMyOrders({ ...orderInquiry, orderStatus: OrderStatus.FINISH })
      .then((data) => setFinishedOrders(data))
      .catch((err) => console.log(err));
  }, [orderInquiry]);
  /** HANDLERS */

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className={"order-page"}>
      <Container className={"order-container"}>
        <Stack>
          <TabContext value={value}>
            <Box className={"order-nav-frame"}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="basic tabs example"
                  className={"table_list"}
                >
                  <Tab label="PAUSED ORDERS" value={"1"} />
                  <Tab label="PROCESS ORDERS" value={"2"} />
                  <Tab label="FINISHED ORDERS" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className={"order-main-content"}>
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>

        <Stack className="order-right">
          <Stack className="order-info-box">
            <Stack className="member-box">
              <div className="order-user-img">
                <img
                  src={"icons/default-user.svg"}
                  className="order-user-avatar"
                />
                <div className="order-user-icon-box">
                  <img
                    src={"icons/user-badge.svg"}
                    className="order-user-prof-img"
                  />
                </div>
              </div>
              <span className="order-user-name">Danny</span>
              <span className="order-user-prof">User</span>
            </Stack>
            <Box className="liner"></Box>
            <Stack sx={{ flexDirection: "row", marginLeft: "-100px" }}>
              <LocationOnIcon />
              <Box className="spec-address-txt">Uzbekistan, Djizak</Box>
            </Stack>
          </Stack>
          <Box className="order-info-box" sx={{ marginTop: "23px" }}>
            <input
              type="text"
              className="card-input"
              placeholder="Card number : **** 5678 9123 1234"
            />
            <Stack
              sx={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <input
                type="text"
                className="card-half-input"
                placeholder="07 / 24"
              />
              <input
                type="text"
                className="card-half-input"
                placeholder="CVV : 010"
              />
            </Stack>
            <input
              type="text"
              className="card-input"
              placeholder="Justin Robertson"
            />
            <Stack className="cards-box">
              <img
                src={"/icons/master-card.svg"}
                style={{ marginLeft: "20px" }}
              />
              <img
                src={"/icons/paypal-card.svg"}
                style={{ marginLeft: "20px" }}
              />
              <img
                src={"/icons/visa-card.svg"}
                style={{ marginLeft: "20px" }}
              />
              <img
                src={"/icons/western-card.svg"}
                style={{ marginLeft: "20px" }}
              />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
