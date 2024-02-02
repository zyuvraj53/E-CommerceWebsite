import logo from "../cart.svg";
import { useState } from "react";
import OrderFulfillmentModal from "./OrderFulfillmentModal";
import "./Navbar.css";

export default function Navbar() {
  const [openOrderFulfillmentModal, setOpenOrderFulfillmentModal] =
    useState(false);
  const [openStockTrackingModal, setStockTrackingModal] = useState(false);
  const [sidenavOpen, setSidenavOpen] = useState(false);
  return (
    <div>
      <nav className="nav bg-[#0082e6] flex text-white justify-between px-4 py-0 backdrop-blur">
        <div className="gap-8">
          <ul className="flex justify-between p-0 m-0 list-none gap-4">
            <li>
              <a href="/">
                <img
                  src={logo}
                  className="min-[454px]:min-w-10 py-1 max-[415px]:translate-y-1/5 "
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
          <ul className="flex justify-between p-0 min-[528px]:pt-2 m-0 list-none gap-4 font-bold font-['Arial'] modalsList">
            <li className="">
              {" "}
              {/* added a CSS class active*/}
              <button
                className="OrderFulfillModal modal"
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
                className="StockTrackingModal modal"
                onClick={() => {
                  setStockTrackingModal(true);
                }}
              >
                Stock Tracking
              </button>
              {openStockTrackingModal && (
                <OrderFulfillmentModal closeModal={setStockTrackingModal} />
              )}
            </li>
          </ul>
        </div>
        <button
          onClick={() => setSidenavOpen(true)}
          className="block md:hidden text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6 hamburger"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </nav>
      {sidenavOpen && (
        <div className="fixed inset-0 bg-[#ba9c65ec] z-30 max-h-60 translate-y-3 rounded-xl m-2">
          <div className="flex items-center justify-between px-6 h-20">
            <div>
              <button
                onClick={() => setSidenavOpen(false)}
                className="block md:hidden text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="black"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
            <ul className="justify-between p-4 min-[528px]:pt-2 m-0 list-none font-bold font-['Arial']">
              <li className="p-4 text-center">
                {" "}
                {/* added a CSS class active*/}
                <button
                  className="OrderFulfillModal modal"
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
              <li className="p-4 text-center">
                <button
                  className="StockTrackingModal modal"
                  onClick={() => {
                    setStockTrackingModal(true);
                  }}
                >
                  Stock Tracking
                </button>
                {openStockTrackingModal && (
                  <OrderFulfillmentModal closeModal={setStockTrackingModal} />
                )}
              </li>
            </ul>
        </div>
      )}
    </div>
  );
}
