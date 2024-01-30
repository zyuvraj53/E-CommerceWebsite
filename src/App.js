import './App.css';
import Navbar from './Components/Navbar';
import Cards from './Components/Cards'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <body>
        <Cards/>
      </body>
    </div>
  );
}

export default App;
