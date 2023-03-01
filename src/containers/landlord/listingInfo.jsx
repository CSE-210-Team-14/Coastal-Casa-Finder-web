import React, {useState, useEffect} from "react";
import { EditText, EditTextarea } from 'react-edit-text';
import "./listingInfo.scss";
import {useLocation} from "react-router-dom";

const ListingInfo = () => {

    const location = useLocation();

    const currentListing = location.state;

    const [editState, setEditState] = useState(true);

    const handleClick = () => {
        if (editState == true) {
            setEditState(false);
            console.log("success");
        }
        else {
            setEditState(true);
            console.log("success2");
        }
    }

    return (
        <>
            <h2 className="listing-name">{currentListing.name}</h2>
            <div className="listing">
                <img className="listing-img" src={currentListing.pic} alt=""></img>
            </div>
            <h3 className="listing-categ">About</h3>
            <div className="desc-box">
                <EditText readonly={editState} className="categ-text" defaultValue={currentListing.desc} style={{backgroundColor: "#FFF"}}></EditText>
            </div>
            <h3 className="listing-categ">Apartment Amenities</h3>
            <div className="desc-box">
                <EditText readonly={editState} className="categ-text" defaultValue={currentListing.amenities} style={{backgroundColor: "#FFF"}}></EditText>
            </div>
            <h3 className="listing-categ">Property Description</h3>
            <div className="desc-box">
                <div className="property-edit">
                    <p className="property-text">Bedroom: </p>
                    <EditText readonly={editState} className="property-entry" defaultValue={currentListing.bedroom} style={{backgroundColor: "#FFF"}}></EditText>
                </div>
                <div className="property-edit">
                    <p className="property-text">Bathroom: </p>
                    <EditText readonly={editState} className="property-entry" defaultValue={currentListing.bathroom} style={{backgroundColor: "#FFF"}}></EditText>
                </div>
                <div className="property-edit">
                    <p className="property-text">Location: </p>
                    <EditText readonly={editState} className="property-entry" defaultValue={currentListing.city} style={{backgroundColor: "#FFF"}}></EditText>
                </div>
            </div>
            <div>
                <button className="edit-button" onClick={()=>{handleClick()}}>Update/Edit</button>
            </div>
        </>
    );
};

export default ListingInfo;