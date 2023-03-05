import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userView.scss";
import UserListing from "./userListing";

const UserView = () => {
  const [fetchAllData, setFetchAllData] = useState(true);
  const [dataFromDB, setDataFromDB] = useState([]);
  useEffect(() => {
    if (fetchAllData) {
      axios
        .get(`http://18.196.64.140:8080/listings/alllistings`)
        .then((response) => {
          console.log(response);
          setDataFromDB(response.data.data);
          setFetchAllData(false);
        });
    }
  }, [fetchAllData]);

  const userData = [];

  for (const entry of dataFromDB) {
    userData.push({
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

  const userListings = [];
  for (const listing of userData) {
    userListings.push(<UserListing {...listing} />);
  }

  return (
    <>
      <h2 className="text-3xl font-semibold mt-2 mb-6">User Listings</h2>
      <div>
        <div className="listings-main">
          <p className="text-3xl font-semibold mt-2 mb-6">Selected Listings</p>
          <p className="num-listing">{userListings.length} Listings</p>
        </div>
        <div>{userListings}</div>
      </div>
    </>
  );
};

export default UserView;
