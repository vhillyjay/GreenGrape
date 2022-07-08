// import logo from './logo.svg';
  // react logo
import './App.css';
import Navbar from './Navbar';
  // imported from Navbar.js
import Home from './Home';
  // imported from Home.js

function App() {
  // const title = "Welcome to the new Blog";
  // const likes = 55;
  // const link = "http://www.google.com";
    // string number array allowed
    // objects not allowed

  return (
    <div className="App">
      <Navbar />
        {/* from import Navbar at the top */}
      <div className='content'>
        <Home />
        {/* <h1> {title} </h1>
        <p>Liked  {likes} times</p>
        <a href={link}>Google</a> */}
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
  // always export component function
