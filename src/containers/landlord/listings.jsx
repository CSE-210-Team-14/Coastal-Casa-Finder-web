import React, { useState } from "react";
import Listing from "./listing";
import Application from "./application";
import "./listings.scss";
import Button from "@mui/material/Button";
import SignUp from "../../SignUpContainer";

const Listings = () => {
  const listingData = [
    {
      id: 1,
      name: "ABC",
      desc: "Apartment",
      amenities: "A/C",
      price: "100",
      city: "San Diego",
      bedroom: "2",
      bathroom: "2",
      pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
    {
      id: 1,
      name: "XYZ",
      desc: "Apartment",
      amenities: "A/C",
      price: "100",
      city: "San Diego",
      bedroom: "2",
      bathroom: "2",
      pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
  ];

  const applicationData = [
    {
      id: 1,
      name: "Marcus",
      message: "I want house",
      move: "1/1/1",
      residents: 1,
      score: 700,
      pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
    {
      id: 2,
      name: "Jon",
      message: "I want place",
      move: "2/2/2",
      residents: 1,
      score: 700,
      pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
    },
  ];
  const [showSignUp, setShowSignUp] = useState(false);
  const landlordListings = [];
  for (const listing of listingData) {
    landlordListings.push(<Listing {...listing} />);
  }

  const applicationsPending = [];
  for (const application of applicationData) {
    applicationsPending.push(<Application {...application} />);
  }

  return (
    <>
      <h2 className="heading-main">Landlord's Listings</h2>
      <div className="listing">
        <div>
          <div>
            <Button onClick={() => setShowSignUp(!showSignUp)}>Sign Up</Button>
          </div>
          {showSignUp && <SignUp />}
        </div>
        <div className="listings-main">
          <p className="listing-heading">Current Listings</p>
          <p className="num-listing">{landlordListings.length} Listings</p>
          {landlordListings}
        </div>
        <div className="listings-pending">
          <p className="listing-heading">Pending Applications</p>
          <p className="num-listing">{applicationsPending.length} Listings</p>
          {applicationsPending}
        </div>
      </div>
    </>
  );
};

export default Listings;
