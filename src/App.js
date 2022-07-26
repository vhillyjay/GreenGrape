// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
  // imported from components

function App() {
    // string number array allowed
    // objects not allowed

  return (
    <div className="App">
      <Navbar />
      <div className='content'>
        <Home />
      </div>
    </div>
  );
}

export default App;
  // always export component function
