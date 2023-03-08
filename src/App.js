import "./App.scss";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Listings from "./containers/landlord/listings";
import ListingInfo from "./containers/landlord/listingInfo";
import ListingSearch from "./containers/landlord/listingSearch";
import ApplicationInfo from "./containers/landlord/applicationInfo";
import DetailCard from "./components/DetailCard.tsx";
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
      detailDisplayItemId: 0,
      currentDetailItem: {},
    };
    this.search = this.search.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.hideSignup = this.hideSignup.bind(this);
    this.showDetail = this.showDetail.bind(this);
    
  } 

  componentDidMount() {
    this.search("", 0, 0, 0);
  }

  showDetail = (key) => {
    this.setState({detailDisplayItemId: key})
    this.setState({currentDetailItem: this.state.searchResults.find(x => x.listing.id === key)});
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
          this.setState({currentDetailItem: response.data.data.listings[0]});
        } else {
          axios
            .get(`http://18.196.64.140:8080/listings/alllistings`)
            .then((response: any) => {
            this.setState({searchResults: response.data.data});
            this.setState({currentDetailItem: response.data.data.listings[0]});
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
              <main className="relative">
                <section className="pt-14 px-6 w-1/2 w-full ml-auto">
                  <p className="text-xs">{this.state.searchResults.length} Results</p>
                  <h1 className="text-3xl font-semibold mt-2 mb-6">
                    Housing in {this.state.searchInput}
                  </h1>
                  <div className="flex flex-col">
                    {this.state.searchResults?.map((item: any) => (
                      <InfoCard
                        id={item.listing.id}
                        img={item.images[0].image_data}
                        location={item.listing.location}
                        description={item.listing.description}
                        title={item.listing.name}
                        price={item.listing.price}
                        showDetail={this.showDetail}
                      />
                    ))}
                  </div>
                </section>
                <section className="relative top-44 w-full min-h-screen md:fixed pt-14 px-6 w-1/2">
                {console.log('ttt', typeof(this.state.currentDetailItem.images) ==="undefined")}
                <DetailCard img={typeof(this.state.currentDetailItem.images) !== "undefined"? this.state.currentDetailItem.images[0].image_data : ""} title={typeof(this.state.currentDetailItem.listing) !== "undefined"? this.state.currentDetailItem.listing.name : ""} description={typeof(this.state.currentDetailItem.listing) !== "undefined" ? this.state.currentDetailItem.listing.description : ""} buttonText={"Contact Landlord"}></DetailCard>
                </section>
              </main>
            )}
          </div>
        </div>
      </BrowserRouter>
    );
  }
}
export default App;
