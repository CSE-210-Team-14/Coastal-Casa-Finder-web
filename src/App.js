import "./App.scss";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Listings from "./containers/landlord/listings";
import ListingInfo from "./containers/landlord/listingInfo";
import ListingSearch from "./containers/landlord/listingSearch";
import ApplicationInfo from "./containers/landlord/applicationInfo";
import React, { Component } from "react";
import SignUp from "./SignUpContainer";
import Header from "./components/Header.tsx";
import InfoCard from "./components/InfoCard.tsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      showSignUp: false,
    };
    this.hideComponent = this.hideComponent.bind(this);
  }

  hideComponent(name) {
    console.log(name, 'test');
    this.setState({ showSignUp: !this.state.showSignUp });
  }

  render() {
    const results = "100+";
    const location = "San Diego";
    const searchResults = [{key: "1", img: 'https://i.postimg.cc/pXdGBLT7/19414d6a-8471-4088-8ea3-ba034acc87ca.webp', location: "San Diego", description: "Cool house!", title: "Apartment", star: "4.8", price: "1000", total: "500"}, 
    {key: "2", img: "https://i.postimg.cc/pXdGBLT7/19414d6a-8471-4088-8ea3-ba034acc87ca.webp", location: "San Diego", description: "Cool house!", title: "Apartment", star: "4.8", price: "1000", total: "500"}];
    return (
      <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Listings />} />
          <Route path="/listingInfo" element={<ListingInfo />} />
          <Route path="/listingSearch" element={<ListingSearch />} />
          <Route path="/application" element={<ApplicationInfo />} />
        </Routes>
      <Header placeholder={"Search for housing"} showSignup={this.hideComponent}/>
      <div>
          { this.state.showSignUp ? <div>
            <SignUp dismissSignup={this.hideComponent}/> 
            </div>: null }
          </div>
        <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            {results} Results 
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Housing in {location}
          </h1>
          <div className="flex flex-col">
          {searchResults?.map((item: any) => (
              <InfoCard
                key={item.img}
                img={item.img}
                location={item.location}
                description={item.description}
                title={item.title}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>
        <div className="box hidden xl:inline-flex xl:min-w-[800px]">
        </div>
      </main>
      </div>
    </BrowserRouter>
  );
}

//export default App;
