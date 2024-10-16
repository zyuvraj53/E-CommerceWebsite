import "./App.css";
import Navbar from "./Components/Navbar";
import ProductPage from "./ProductPage";
import Home from "./Home";
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
              <Home></Home>
            </Route>
            <Route exact path="/ProductPage">
              <ProductPage></ProductPage>
            </Route>
          </Switch>
          <div>
            abkdvakjbdajkbdskj bkds
          </div>
        </body>
      </div>
    </Router>
  );
}

export default App;
