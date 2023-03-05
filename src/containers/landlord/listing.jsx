import React from "react";
import "./listing.scss";
import { useNavigate } from "react-router-dom";

const Listing = (props) => {
  //console.log(props.name);
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
      <img src={`data:image/jpeg;base64,${props.pic}`} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.name}</p>
      <p>{props.bedroom}</p>
      <p>{props.bathroom}</p>
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
