import "./App.scss";
import React from "react";
// import Button from "@mui/material/Button";
// import SignUp from "./SignUpContainer";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Listings from "./containers/landlord/listings";
import ListingInfo from "./containers/landlord/listingInfo";
import ListingSearch from "./containers/landlord/listingSearch";
import ApplicationInfo from "./containers/landlord/applicationInfo";

function App() {
  // const [showSignUp, setShowSignUp] = useState(false);
  return (
    <BrowserRouter>
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
        {/* <div>
          <div>
            <Button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</Button>
          </div>
          {showSignUp && <SignUp />}
        </div> */}
        <Routes>
          <Route exact path="/" element={<Listings />} />
          <Route path="/listingInfo" element={<ListingInfo />} />
          <Route path="/listingSearch" element={<ListingSearch />} />
          <Route path="/application" element={<ApplicationInfo />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
