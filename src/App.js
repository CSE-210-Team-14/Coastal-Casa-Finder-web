import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Listings from './containers/landlord/listings';
import ListingInfo from './containers/landlord/listingInfo';
import ListingSearch from './containers/landlord/listingSearch';
import ApplicationInfo from './containers/landlord/applicationInfo';


function App() {
  return (
    <div className="App">
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
      {/* <div>Here</div> */}
      <Router>
        <Switch>
          <Route exact path='/' component={Listings} />
          <Route path='/listingInfo' component={ListingInfo} />
          <Route path='/listingSearch' component={ListingSearch} />
          <Route path='/application' component={ApplicationInfo} />
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
