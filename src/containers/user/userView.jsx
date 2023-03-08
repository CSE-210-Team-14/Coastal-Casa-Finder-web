import React, { useState, useEffect } from "react";
import axios from "axios";
import "./userView.scss";
import UserListingIndividual from "./UserListingIndividual";
import UserListing from "./userListing";

const UserView = () => {
  const [fetchAllData, setFetchAllData] = useState(true);
  const [dataFromDB, setDataFromDB] = useState([]);
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [amenities, setAmenities] = useState("");
  const [price, setPrice] = useState("");
  const [bedroom, setBedroom] = useState("");
  const [bathroom, setBathroom] = useState("");
  const [pic, setPic] = useState("");

  useEffect(() => {
    if (fetchAllData) {
      axios
        .get(`http://18.196.64.140:8080/listings/alllistings`)
        .then((response) => {
          setDataFromDB(response.data.data);
          if (response.data.data && response.data.data.length > 0) {
            setName(response.data.data[0].listing.name);
            setDesc(response.data.data[0].listing.description);
            setAmenities(response.data.data[0].listing.amenities);
            setBathroom(response.data.data[0].listing.num_bathrooms);
            setPrice(response.data.data[0].listing.price);
            setBedroom(response.data.data[0].listing.num_bedrooms);
            setPic(response.data.data[0].images[0].image_data);
          }
          setFetchAllData(false);
        });
    }
  }, [fetchAllData]);

  const userData = [];

  for (const entry of dataFromDB) {
    userData.push({
      id: entry.listing.id,
      name: entry.listing.name,
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
    const data = { ...listing };
    userListings.push(
      <UserListing
        currentValue={data}
        setName={setName}
        setDesc={setDesc}
        setAmenities={setAmenities}
        setBathroom={setBathroom}
        setPrice={setPrice}
        setBedroom={setBedroom}
        setPic={setPic}
      />
    );
  }

  // console.log(name, desc, amenities, price, bathroom, bedroom);

  return (
    <>
      <h2 className="text-3xl font-semibold mt-2 mb-6">Available Listings</h2>
      <p className="num-listing">{userListings.length} Listings</p>
      <div className="listing">
        <div>{userListings}</div>
        {!fetchAllData ? (
          <div id="currentListing" className="listings-details-user">
            <UserListingIndividual
              name={name}
              desc={desc}
              amenities={amenities}
              bathroom={bathroom}
              bedroom={bedroom}
              price={price}
              pic={pic}
            />
          </div>
        ) : null}
      </div>
    </>
  );
};

export default UserView;
