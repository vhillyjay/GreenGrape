// import './App.css';
import Navbar from './Navbar';
import Home from './Home';
  // imported from components
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {
    // string number array allowed
    // objects not allowed

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className='content'>
          {/* <Home /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
              <div>lie to me</div>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
  // always export component function
