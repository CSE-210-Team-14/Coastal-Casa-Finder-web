import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Switch, Routes, 
  Route, Navigate, Redirect} from "react-router-dom";
import Listings from './containers/landlord/listings';
import ListingInfo from './containers/info/listingInfo';
import ListingSearch from './containers/search/listingSearch'
import Listing from './containers/landlord/listing';


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
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
