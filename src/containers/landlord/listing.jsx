import React from "react";
import "./listing.scss";
import { useNavigate } from "react-router-dom";

const Listing = (props) => {
  const data = {
    id: props.id,
    name: props.name,
    desc: props.desc,
    amenities: props.amenities,
    price: props.price,
    city: props.city,
    bedroom: props.bedroom,
    bathroom: props.bathroom,
    pic: props.pic,
  };

  const navigate = useNavigate();

  const toListingInfo = () => {
    navigate("/listingInfo", { state: data });
  };

  return (
    <div className="listing-main">
      <img
        src={`data:image/jpeg;base64,${props.pic}`}
        alt=""
        className="rounded-2xl md:w-80 md:h-52"
      />
      <p>Name: {props.name}</p>
      <p>Price: {props.price}</p>
      <p>Bed: {props.bedroom}</p>
      <p>Bath: {props.bathroom}</p>
      <button
        type="button"
        onClick={() => {
          toListingInfo();
        }}
      >
        Edit Listing
      </button>
    </div>
  );
};

export default Listing;
