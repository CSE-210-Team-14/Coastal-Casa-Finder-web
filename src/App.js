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
import UserView from "./containers/user/userView";
import axios from "axios";
// import Navbar from "./containers/navigation/navBar";

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
      useremail: "",
      jwtToken: "",
    };
    this.search = this.search.bind(this);
    this.hideComponent = this.hideComponent.bind(this);
    this.hideSignup = this.hideSignup.bind(this);
    this.showDetail = this.showDetail.bind(this);
    console.log(this.state.useremail, this.state.jwtToken);
  }

  handleStorage = (e) => {
    this.setState({ useremail: localStorage.getItem("user") || "" });
    this.setState({ jwtToken: localStorage.getItem("JWTToken") || "" });
  };

  componentDidMount() {
    this.search("", 0, 0, 0);
    window.addEventListener("storage", this.handleStorage);
  }

  componentDidUnmount() {
    window.removeEventListener("storage", this.handleStorage);
  }

  showDetail = (key) => {
    this.setState({ detailDisplayItemId: key });
    this.setState({
      currentDetailItem: this.state.searchResults.find(
        (x) => x.listing.id === key
      ),
    });
  };

  hideComponent() {
    this.setState({ showLandlordListing: !this.state.showLandlordListing });
  }

  hideSignup() {
    this.setState({ showSignUp: !this.state.showSignUp });
  }

  search = (searchInput, price, noBed, noBath) => {
    this.searchInput = searchInput;
    const searchString = `location=${searchInput}&price=${price}&num_bedrooms=${noBed}&num_bathrooms=${noBath}`;
    axios
      .get(`http://18.196.64.140:8080/listings/search?${searchString}`)
      .then((response: any) => {
        if (response.data.data.length > 0) {
          this.setState({ searchResults: response.data.data });
          this.setState({ currentDetailItem: response.data.data.listings[0] });
        } else {
          axios
            .get(`http://18.196.64.140:8080/listings/alllistings`)
            .then((response: any) => {
              this.setState({ searchResults: response.data.data });
              this.setState({
                currentDetailItem: response.data.data.listings[0],
              });
            });
        }
      });
  };

  render() {
    console.log("In App", this.state.useremail, this.state.jwtToken);
    return (
      <BrowserRouter>
        {/* <Navbar /> */}
        <div className="App">
          <Header
            placeholder={"Search for location"}
            showSignup={this.hideComponent}
            search={this.search}
            hideSignup={this.hideSignup}
            dismissSignup={this.dismissSignup}
            userLoginState={this.state.showSignUp}
            useremail={this.state.useremail}
          />
          <div>
            {this.state.showLandlordListing &&
            this.state.useremail.length > 0 ? (
              <div>
                {/* <Button onClick={() => this.hideSignup()}>Sign Up</Button> */}
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
                <section className="pt-14 px-6 ml-auto flex flex-col w-1/2">
                  <p className="text-xs">
                    {this.state.searchResults.length} Results
                  </p>
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
                <section className="relative flex top-44 h-fit md:fixed  pt-14 px-6 rounded-xl w-1/2 m-2">
                  {typeof this.state.currentDetailItem.listing ===
                  "undefined" ? (
                    <h1 className="text-3xl font-semibold mt-2 mb-6 text-center w-full h-full">
                      Please select a listing for details!
                    </h1>
                  ) : (
                    <DetailCard
                      img={
                        typeof this.state.currentDetailItem.images !==
                        "undefined"
                          ? this.state.currentDetailItem.images[0].image_data
                          : ""
                      }
                      title={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.name
                          : ""
                      }
                      description={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.description
                          : ""
                      }
                      noBath={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.num_bathrooms
                          : ""
                      }
                      noBed={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.num_bedrooms
                          : ""
                      }
                      price={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.price
                          : ""
                      }
                      email={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.landlord_email
                          : ""
                      }
                      amenities={
                        typeof this.state.currentDetailItem.listing !==
                        "undefined"
                          ? this.state.currentDetailItem.listing.amenities
                          : ""
                      }
                      buttonText={"Contact Landlord"}
                    ></DetailCard>
                  )}
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
