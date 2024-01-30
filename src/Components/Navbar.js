import logo from "../logo.svg";

export default function Navbar() {
  return (
    <nav className="nav bg-[#333] flex text-white justify-between px-4 py-0">
      <div className="gap-8">
      <ul className="flex justify-between p-0 m-0 list-none gap-4">
        <li>
          <a href="/">
            <img src={logo} className="py-1" alt="logo" height={25} width={25} />
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
          <button href="/OrderFulfillment">Order Fulfillment</button>
        </li>
        <li>
          <a href="/StockTracking">Stock Tracking</a>
        </li>
      </ul>
      </div>
    </nav>
  );
}
