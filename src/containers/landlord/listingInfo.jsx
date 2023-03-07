import React, { useState } from "react";
import { EditText } from "react-edit-text";
import "./listingInfo.scss";
import { useLocation, useNavigate } from "react-router-dom";

const ListingInfo = () => {
  const location = useLocation();

  const currentListing = location.state;

  const [editState, setEditState] = useState(true);

  const handleClick = () => {
    if (editState === true) {
      setEditState(false);
    } else {
      setEditState(true);
    }
  };

  let navigate = useNavigate();

  const previousPage = () => {
    navigate(-1);
  }

  const handleDescChange = (event) => {
    currentListing.desc = event.value;
  };

  const handleAmenChange = (event) => {
    currentListing.amenities = event.value;
  };

  const handleBedChange = (event) => {
    currentListing.bedroom = event.value;
  };

  const handleBathChange = (event) => {
    currentListing.bathroom = event.value;
  };

  const handleCityChange = (event) => {
    currentListing.city = event.value;
  };

  return (
    <>
      <button className="return-button" onClick={() => {
            previousPage();
          }}></button>
      <h2 className="listing-name">{currentListing.name}</h2>
      <div className="listing">
        <img
          className="listing-img"
          src={`data:image/jpeg;base64,${currentListing.pic}`}
          alt=""
        />
      </div>
      <h3 className="listing-categ">About</h3>
      <div className="desc-box">
        <EditText
          readonly={editState}
          className="categ-text"
          onSave={handleDescChange}
          defaultValue={currentListing.desc}
          style={{ backgroundColor: "#FFF" }}
        ></EditText>
      </div>
      <h3 className="listing-categ">Apartment Amenities</h3>
      <div className="desc-box">
        <EditText
          readonly={editState}
          className="categ-text"
          onSave={handleAmenChange}
          defaultValue={currentListing.amenities}
          style={{ backgroundColor: "#FFF" }}
        ></EditText>
      </div>
      <h3 className="listing-categ">Property Description</h3>
      <div className="desc-box">
        <div className="property-edit">
          <p className="property-text">Bedroom: </p>
          <EditText
            readonly={editState}
            className="property-entry"
            onSave={handleBedChange}
            defaultValue={currentListing.bedroom}
            style={{ backgroundColor: "#FFF" }}
          ></EditText>
        </div>
        <div className="property-edit">
          <p className="property-text">Bathroom: </p>
          <EditText
            readonly={editState}
            className="property-entry"
            onSave={handleBathChange}
            defaultValue={currentListing.bathroom}
            style={{ backgroundColor: "#FFF" }}
          ></EditText>
        </div>
        <div className="property-edit">
          <p className="property-text">Location: </p>
          <EditText
            readonly={editState}
            className="property-entry"
            onSave={handleCityChange}
            defaultValue={currentListing.city}
            style={{ backgroundColor: "#FFF" }}
          ></EditText>
        </div>
      </div>
      <div>
        <button
          className="edit-button"
          onClick={() => {
            handleClick();
          }}
        >
          Update/Edit
        </button>
      </div>
    </>
  );
};

export default ListingInfo;
