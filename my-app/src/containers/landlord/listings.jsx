import React from "react";
import ReactDOM from "react-dom";
import Listing from "./listing";
import "./listings.scss";

const Listings = () => {
  const listingData = [
    {
      id: 1,
      name: "ABC",
      price: "100",
      city: "San Diego",
      bedroom: "2",
      bathroom: "2",
      pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
    {
      id: 1,
      name: "XYZ",
      price: "100",
      city: "San Diego",
      bedroom: "2",
      bathroom: "2",
      pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
  ];

  const landlordListings = [];
  for (const listing of listingData) {
    landlordListings.push(<Listing {...listing} />);
  }

  const listingPending = [];
  for (const listing of listingData) {
    listingPending.push(<Listing {...listing} />);
  }

  return (
    <>
      <h2 className="heading-main">Landlord's Listings</h2>
      <div className="listing">
        <div className="listings-main">
          <p>Current Applications</p>
          {landlordListings}
        </div>
        <div className="listings-pending">
          <p>Pending Applications</p>
          {listingPending}
        </div>
      </div>
    </>
  );
};

export default Listings;
