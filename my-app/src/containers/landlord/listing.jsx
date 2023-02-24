import React from "react";
import ReactDOM from "react-dom";
import "./listing.scss";
import { Link } from "react-router-dom";


const Listing = (props) => {
  //console.log(props.name);
  return (
    <div className="listing-main">
      <img src={props.pic} alt=""></img>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.name}</p>
      <p>{props.bedroom}</p>
      <p>{props.bathroom}</p>
      <Link to='/listingInfo'>
        <button type="button">Edit Listing</button>
      </Link>
    </div>
  );
};

export default Listing;
