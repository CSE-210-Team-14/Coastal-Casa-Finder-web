import React from "react";
import './userView.scss';
import UserListing from "./userListing";

const UserView = () => {
    const selectedListings = [
        {
            id: 1,
            name: "ABC",
            desc: "Apartment",
            amenities: "A/C",
            price: "100",
            city: "San Diego",
            bedroom: "2",
            bathroom: "2",
            pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
        },
        {
            id: 1,
            name: "XYZ",
            desc: "Apartment",
            amenities: "A/C",
            price: "100",
            city: "San Diego",
            bedroom: "2",
            bathroom: "2",
            pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg",
        }
    ]

    const userListings = [];
        for (const listing of selectedListings) {
            userListings.push(<UserListing {...listing} />);
    }

    return (
        <>
            <h2 className="text-3xl font-semibold mt-2 mb-6">User Listings</h2>
            <div className="listing">
                <div className="listings-main">
                    <p className="text-3xl font-semibold mt-2 mb-6">Selected Listings</p>
                    <p className="num-listing">{userListings.length} Listings</p>
                    {userListings}
                </div>
            </div>
        </>
    )
}

export default UserView;