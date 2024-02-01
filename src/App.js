import "./App.css";
import Navbar from "./Components/Navbar";
import Cards from "./Components/Cards";
import ProductPage from "./ProductPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <body>
          <Switch>
            <Route exact path="/">
              <a href="/ProductPage">
                <Cards image altText productDetails/>
              </a>
            </Route>
            <Route exact path="/ProductPage">
              <ProductPage></ProductPage>
            </Route>
          </Switch>
        </body>
      </div>
    </Router>
  );
}

export default App;
