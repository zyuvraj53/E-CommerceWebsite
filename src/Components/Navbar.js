import logo from "../cart.svg";
import { useState } from "react";
import OrderFulfillmentModal from "./OrderFulfillmentModal";
import "./Navbar.css";
import StockTrackingModal from "./StockTrackingModal";
import SearchBar from "./SearchBar";
import Menu from "../Assets/menu-fill.png";
import Close from "../Assets/close-fill.png";

export default function Navbar() {
  const [openOrderFulfillmentModal, setOpenOrderFulfillmentModal] =
    useState(false);
  const [openStockTrackingModal, setStockTrackingModal] = useState(false);
  const [sidepanel, setsidepanel] = useState(false);
  const toggle = () => {
    setsidepanel(!sidepanel);
  };
  return (
    <>
      <nav className="bg-[#121212d5] flex border border-none	 text-white items-center justify-between h-14">
        <div>
          <ul className="flex justify-center items-center gap-6 w-60">
            <li>
              <a href="/">
                <img src={logo}
                  className="min-[454px]:min-w-10 max-[415px]:translate-y-1/5 "
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
        <div className="SearchBar">
          <SearchBar />
        </div>
        <div className="">
          <ul className="justify-center items-center gap-4 md:mr-4 hidden lg:flex">
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
        <div className='side_button block md:hidden'>
          <img src={!sidepanel ? Menu : Close} alt="Button" onClick={toggle} />
        </div>
      </nav>

      <div className='main_box'>
        <div className="sidebar_menu" style={{ left: sidepanel ? "0px" : "-280px" }}>
          <ul className="menu" >
            <li>
              <button
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
            <li><button
              onClick={() => {
                setStockTrackingModal(true);
              }}
            >
              Stock Tracking
            </button>
              {openStockTrackingModal && (
                <StockTrackingModal closeModal={setStockTrackingModal} />
              )}</li>
          </ul>
        </div>
      </div>
      {/* {sidenavOpen && (
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
              {/* added a CSS class active}
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
                <StockTrackingModal closeModal={setStockTrackingModal} />
              )}
            </li>
          </ul>
        </div>
      )} */}
    </>
  );
}
