import React from "react";
import "./userListing.scss";

export const UserListingIndividual = ({
  name,
  desc,
  amenities,
  bathroom,
  bedroom,
  price,
  pic,
}) => {
  //   console.log(name, desc);
  return (
    <div id="currentListing" className="listings-details-user">
      <h2 id="listing-title" className="listing-name-user">
        {name}
      </h2>
      <div className="listing">
        <img className="listing-img-user" src={pic} alt=""></img>
      </div>
      <h3 className="listing-categ-user">About</h3>
      <div className="desc-box-user">
        <p
          id="listing-desc"
          className="categ-text-user"
          style={{ backgroundColor: "#FFF" }}
        >
          {desc}
        </p>
      </div>
      <h3 className="listing-categ-user">Apartment Amenities</h3>
      <div className="desc-box-user">
        <p
          id="listing-amenities"
          className="categ-text-user"
          style={{ backgroundColor: "#FFF" }}
        >
          {amenities}
        </p>
      </div>
      <h3 className="listing-categ-user">Property Description</h3>
      <div className="desc-box-user">
        <div className="property-edit-user">
          <p className="property-text-user">Bedroom: </p>
          <p
            id="listing-bed"
            className="property-entry-user"
            style={{ backgroundColor: "#FFF" }}
          >
            {bedroom}
          </p>
        </div>
        <div className="property-edit-user">
          <p className="property-text-user">Bathroom: </p>
          <p
            id="listing-bath"
            className="property-entry-user"
            style={{ backgroundColor: "#FFF" }}
          >
            {bathroom}
          </p>
        </div>
        <div className="property-edit-user">
          <p className="property-text-user">Location: </p>
          <p
            id="listing-city"
            className="property-entry-user"
            style={{ backgroundColor: "#FFF" }}
          >
            {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserListingIndividual;
