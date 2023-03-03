import React from "react";
import "./userListing.scss";
import {useNavigate} from "react-router-dom";


const UserListing = (props) => {
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

  const navigate = useNavigate();

  const toListingInfo = () => {
    navigate('/listingInfo', {state: data});
  }

  return (
    <div className="listing-main">
      <img src={props.pic} alt=""></img>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <p>{props.name}</p>
      <p>{props.bedroom}</p>
      <p>{props.bathroom}</p>
      <button type="button" onClick={()=>{toListingInfo()}}>View Listing</button>
    </div>
  );
};

export default UserListing;
