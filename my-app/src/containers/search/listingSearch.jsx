import React from "react";
import ReactDOM from "react-dom";
import "./listingSearch.scss"

const ListingSearch = () => {
    return (
        <>
            <h2 className="listing-search">Search your Listing</h2>
            <div className="desc-box">
                <div className="property-edit">
                    <p className="property-text">Location (Zip Code): </p>
                    <p className="property-entry">92093</p>
                </div>
                <div className="property-edit">
                    <p className="property-text">Bedroom: </p>
                    <p className="property-entry">1</p>
                </div>
                <div className="property-edit">
                    <p className="property-text">Bathroom: </p>
                    <p className="property-entry">1</p>
                </div>
                <div className="property-edit">
                    <p className="property-text">Distance from Property: </p>
                    <p className="property-entry">1 mile</p>
                </div>
                <div className="property-edit">
                    <p className="property-text">Sort By: </p>
                    <button>Relevance</button>
                    <button>Price Lowest</button>
                    <button>Price Highest</button>
                </div>
            </div>
            <div>
                <button className="edit-button">Search</button>
            </div>
            
        </>
    );
}

export default ListingSearch;