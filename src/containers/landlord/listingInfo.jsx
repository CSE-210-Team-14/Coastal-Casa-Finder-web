import React from "react";
import ReactDOM from 'react-dom/client';
import "./listingInfo.scss";
import {useLocation } from "react-router-dom";

const ListingInfo = () => {

    const location = useLocation();

    const currentListing = location.state;

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