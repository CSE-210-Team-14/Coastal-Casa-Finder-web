import './App.scss';
import Listings from './containers/landlord/listings';
import ListingInfo from './containers/info/listingInfo';
import ListingSearch from './containers/search/listingSearch'

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
      
      <Listings />
      <ListingInfo />
      <ListingSearch />
    </div>
  );
}

export default App;
