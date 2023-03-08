import React from "react";
import "./userListing.scss";

const UserListing = ({
  currentValue,
  setName,
  setDesc,
  setAmenities,
  setBathroom,
  setPrice,
  setBedroom,
  setPic,
}) => {
  return (
    <div className="listing-user">
      <div className="listings-main-user">
        <div className="listing-main-user">
          <img src={`data:image/jpeg;base64,${currentValue.pic}`} alt=""></img>
          <p>Name: {currentValue.name}</p>
          <p>Price: {Math.round(currentValue.price)}</p>
          <p>Bed: {currentValue.bedroom}</p>
          <p>Bath: {currentValue.bathroom}</p>
          <button
            type="button"
            onClick={() => {
              setName(currentValue.name);
              setDesc(currentValue.desc);
              setAmenities(currentValue.amenities);
              setBathroom(currentValue.bathroom);
              setPrice(currentValue.price);
              setBedroom(currentValue.bedroom);
              setPic(currentValue.pic);
            }}
          >
            View Listing
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserListing;
