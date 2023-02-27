import React from "react";
import "./listing.scss";
import { Link } from "react-router-dom";


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
  }

  return (
    <div className="listing-main">
      <img src={props.pic} alt=""></img>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.name}</p>
      <p>{props.bedroom}</p>
      <p>{props.bathroom}</p>
      <Link to={{pathname:'/listingInfo', state: data}}>
        <button type="button">Edit Listing</button>
      </Link>
    </div>
  );
};

export default Listing;
