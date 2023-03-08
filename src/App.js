import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Listings from "./containers/landlord/listings";
import ListingInfo from "./containers/landlord/listingInfo";
import ListingSearch from "./containers/landlord/listingSearch";
import ApplicationInfo from "./containers/landlord/applicationInfo";
import React, { Component } from "react";
import Header from "./components/Header.tsx";
import InfoCard from "./components/InfoCard.tsx";
import Button from "@mui/material/Button";
import SignUp from "./containers/signup/SignUpContainer";
import UserView from "./containers/user/userView";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      showSignUp: false,
      showLandlordListing: false,
      searchResults: [],
      searchInput: "Your Location",
    };
    this.search = this.search.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.hideSignup = this.hideSignup.bind(this);
    
  } 
  
  componentDidMount() {
    this.search("", 0, 0, 0);
  }
  
  hideComponent() {
    this.setState({ showLandlordListing: !this.state.showLandlordListing });
  }

  hideSignup() {
    this.setState({ showSignUp: !this.state.showSignUp });
  }

  search = (searchInput, price, noBed, noBath) => {
    this.searchInput = searchInput
    const searchString = `location=${searchInput}&price=${price}&num_bedrooms=${noBed}&num_bathrooms=${noBath}`;
    axios
      .get(`http://18.196.64.140:8080/listings/search?${searchString}`)
      .then((response: any) => {
        if (response.data.data.length > 0) { 
          this.setState({searchResults: response.data.data});
        } else {
          axios
            .get(`http://18.196.64.140:8080/listings/alllistings`)
            .then((response: any) => {
            this.setState({searchResults: response.data.data});
      });
        }
      });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header
            placeholder={"Search for location"}
            showSignup={this.hideComponent}
            search={this.search}
          />
          <div>
            {this.state.showLandlordListing ? (
              <div>
                <Button onClick={() => this.hideSignup()}>Sign Up</Button>
                {this.state.showSignUp ? (
                  <div>
                    <SignUp dismissSignup={this.hideSignup} />{" "}
                  </div>
                ) : null}
                <Routes>
                  <Route exact path="/" element={<Listings />} />
                  <Route path="/listingInfo" element={<ListingInfo />} />
                  <Route path="/listingSearch" element={<ListingSearch />} />
                  <Route path="/application" element={<ApplicationInfo />} />
                  <Route path="/userInfo" element={<UserView />} />
                </Routes>
              </div>
            ) : (
              <main className="flex">
                <section className="flex-grow pt-14 px-6">
                  <p className="text-xs">{this.state.searchResults.length} Results</p>
                  <h1 className="text-3xl font-semibold mt-2 mb-6">
                    Housing in {this.state.searchInput}
                  </h1>
                  <div className="flex flex-col">
                    {this.state.searchResults?.map((item: any) => (
                      <InfoCard
                        key={item.listing.id}
                        img={item.images[0].image_data}
                        location={item.listing.location}
                        description={item.listing.description}
                        title={item.listing.name}
                        star={5}
                        price={item.listing.price}
                      />
                    ))}
                  </div>
                </section>
                <div className="box hidden xl:inline-flex xl:min-w-[0px]">
                  {/* a potential map component or detail list view should be here */}
                </div>
              </main>
            )}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
