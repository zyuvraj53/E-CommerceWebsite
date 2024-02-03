import Cards from "./Components/Cards";

function Home() {
  return (
      <div className="Home">
        <header className="Home-header">
        </header>
        <body className="flex justify-around">
                <Cards link={ "/ProductPage" } image altText productDetails/>
                <Cards link={ "/ProductPage" } image altText productDetails/>
                <Cards link={ "/ProductPage" } image altText productDetails/>
                <Cards link={ "/ProductPage" } image altText productDetails/>
                <Cards link={ "/ProductPage" } image altText productDetails/>
        </body>
      </div>
  );
}

export default Home;