import React from "react";
import "./userListing.scss";

const UserListing = (props) => {

  const displayListing = (props) => {

    document.getElementById("listing-title").innerHTML = props.name;
    document.getElementById("listing-desc").innerHTML = props.desc;
    document.getElementById("listing-amenities").innerHTML = props.amenities;
    document.getElementById("listing-bed").innerHTML = props.bedroom;
    document.getElementById("listing-bath").innerHTML = props.bathroom;
    document.getElementById("listing-city").innerHTML = props.city;

    if (document.getElementById("currentListing").style.display === "block") {
      document.getElementById("currentListing").style.display = "none";
    }
    else if (document.getElementById("currentListing").style.display === "none") {
      document.getElementById("currentListing").style.display = "block";
    }
  }

  return (
    <div className="listing-user">
      <div className="listings-main-user">
        <div className="listing-main-user">
          <img src={props.pic} alt=""></img>
          <p>{props.name}</p>
          <p>{props.price}</p>
          <p>{props.name}</p>
          <p>{props.bedroom}</p>
          <p>{props.bathroom}</p>
          <button type="button" onClick={()=>{displayListing(props)}}>View Listing</button>
        </div>
      </div>

      <div id="currentListing" className="listings-details-user" style={{display:'none'}}>
        <h2 id="listing-title" className="listing-name-user">{props.name}</h2>
        <div className="listing">
            <img className="listing-img-user" src={props.pic} alt=""></img>
        </div>
        <h3 className="listing-categ-user">About</h3>
        <div className="desc-box-user">
            <p id="listing-desc" className="categ-text-user" style={{backgroundColor: "#FFF"}}>{props.desc}</p>
        </div>
        <h3 className="listing-categ-user">Apartment Amenities</h3>
        <div className="desc-box-user">
            <p id="listing-amenities" className="categ-text-user" style={{backgroundColor: "#FFF"}}>{props.amenities}</p>
        </div>
        <h3 className="listing-categ-user">Property Description</h3>
        <div className="desc-box-user">
            <div className="property-edit-user">
                <p className="property-text-user">Bedroom: </p>
                <p id="listing-bed" className="property-entry-user" style={{backgroundColor: "#FFF"}}>{props.bedroom}</p>
            </div>
            <div className="property-edit-user">
                <p className="property-text-user">Bathroom: </p>
                <p id="listing-bath" className="property-entry-user" style={{backgroundColor: "#FFF"}}>{props.bathroom}</p>
            </div>
            <div className="property-edit-user">
                <p className="property-text-user">Location: </p>
                <p id="listing-city" className="property-entry-user" style={{backgroundColor: "#FFF"}}>{props.city}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserListing;
