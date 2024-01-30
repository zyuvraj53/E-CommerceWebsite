import logo from "../cart.svg";
import { useState } from "react";
import OrderFulfillmentModal from "./OrderFulfillmentModal";

export default function Navbar() {
  const [openOrderFulfillmentModal, setOpenOrderFulfillmentModal] =
    useState(false);
  const [openStockTrackingModal, setStockTrackingModal] =
    useState(false);
  return (
    <nav className="nav bg-[#333] flex text-white justify-between px-4 py-0">
      <div className="gap-8">
        <ul className="flex justify-between p-0 m-0 list-none gap-4">
          <li>
            <a href="/">
              <img
                src={logo}
                className="py-1"
                alt="logo"
                height={25}
                width={25}
              />
            </a>
          </li>
          <li>
            <a href="/" className="site-title text-2xl">
              Site Title
            </a>
          </li>
        </ul>
      </div>
      <div className="text-inherit gap-8">
        <ul className="flex justify-between p-0 m-0 list-none gap-4">
          <li>
            <button
              className="OrderFulfillModal"
              onClick={() => {
                setOpenOrderFulfillmentModal(true);
              }}
            >
              Order Fulfillment
            </button>
            {openOrderFulfillmentModal && (
              <OrderFulfillmentModal
                closeModal={setOpenOrderFulfillmentModal}
              />
            )}
          </li>
          <li>
            <button
              className="StockTrackingModal"
              onClick={() => {
                setStockTrackingModal(true);
              }}
            >
              Stock Tracking
            </button>
            {openStockTrackingModal && (
              <OrderFulfillmentModal
                closeModal={setStockTrackingModal}
              />
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
