import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import ProductPage from "./ProductPage";

function Home() {
  return (
      <div className="Home">
        <header className="Home-header">
        </header>
        <body className="text-center">
              <a href="/ProductPage">
                <Cards image altText productDetails/>
              </a>
              <a href="/ProductPage">
                <Cards image altText productDetails/>
              </a>
              <a href="/ProductPage">
                <Cards image altText productDetails/>
              </a>
              <a href="/ProductPage">
                <Cards image altText productDetails/>
              </a>
              <a href="/ProductPage">
                <Cards image altText productDetails/>
              </a>
        </body>
      </div>
  );
}

export default Home;