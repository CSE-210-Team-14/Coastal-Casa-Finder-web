import axios from "axios";
import React, { useState, useEffect } from "react";
import Listing from "./listing";
import Application from "./application";
import "./listings.scss";

const Listings = () => {
  const [fetchDataFromDB, setFetchDataFromDB] = useState(true);
  const [dataFromDB, setDataFromDB] = useState([]);

  let currentEmail = "email@email.com";
  const landlordEmail = currentEmail.split("@");

  useEffect(() => {
    if (fetchDataFromDB) {
      axios
        .get(
          `http://18.196.64.140:8080/listings/${landlordEmail[0]}%40${landlordEmail[1]}`
        )
        .then((response) => {
          setDataFromDB(response.data.data);
          setFetchDataFromDB(false);
        });
    }
  }, [fetchDataFromDB, landlordEmail]);

  console.log(dataFromDB);
  const listingData = [];

  for (const entry of dataFromDB) {
    listingData.push({
      id: entry.listing.id,
      name: entry.listing.description,
      desc: entry.listing.description,
      amenities: entry.listing.amenities,
      price: entry.listing.price,
      // city: entry.listing.id,
      bedroom: entry.listing.num_bathrooms,
      bathroom: entry.listing.num_bedrooms,
      pic: entry.images[0].image_data,
    });
  }

  // console.log(listingData);

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
      <h2 className="text-3xl font-semibold mt-2 mb-6">Landlord Listings</h2>
      <div className="listing">
        <div className="listings-main">
          <p className="text-3xl font-semibold mt-2 mb-6">Current Listings</p>
          <p className="num-listing">{landlordListings.length} Listings</p>
          {landlordListings}
        </div>
        <div className="listings-pending">
          <p className="text-3xl font-semibold mt-2 mb-6">
            Pending Applications
          </p>
          <p className="num-listing">{applicationsPending.length} Listings</p>
          {applicationsPending}
        </div>
      </div>
    </>
  );
};

export default Listings;
