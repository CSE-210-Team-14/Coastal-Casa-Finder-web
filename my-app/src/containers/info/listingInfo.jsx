import React from "react";
import ReactDOM from "react-dom";
import "./listingInfo.scss"

const ListingInfo = () => {

    const listingData = [{
        id: 1,
        name: "ABC",
        price: "100",
        desc: "Blah",
        amenities: "AC",
        city: "San Diego",
        bedroom: "2",
        bathroom: "2",
        pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
      }]

    const currentListing = listingData[0]

    return (
        <>
            <h2 className="listing-name">{currentListing.name}</h2>
            <div className="listing">
                <img className="listing-img" src={currentListing.pic} alt=""></img>
            </div>
            <h3 className="listing-categ">About</h3>
            <div className="desc-box">
                <p className="categ-text">{currentListing.desc}</p>
            </div>
            <h3 className="listing-categ">Apartment Amenities</h3>
            <div className="desc-box">
                <p className="categ-text">{currentListing.amenities}</p>
            </div>
            <h3 className="listing-categ">Property Description</h3>
            <div className="desc-box">
                <div className="property-edit">
                    <p className="property-text">Bedroom: </p>
                    <p className="property-entry">{currentListing.bedroom}</p>
                </div>
                <div className="property-edit">
                    <p className="property-text">Bathroom: </p>
                    <p className="property-entry">{currentListing.bathroom}</p>
                </div>
                <div className="property-edit">
                    <p className="property-text">Location: </p>
                    <p className="property-entry">{currentListing.city}</p>
                </div>
            </div>
            <div>
                <button className="edit-button">Update/Edit</button>
            </div>
        </>
    );
};

export default ListingInfo;