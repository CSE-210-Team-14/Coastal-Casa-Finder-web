import React from "react";
import "./application.scss";
import {useLocation} from "react-router-dom";


const ApplicationInfo = () => {

    const location = useLocation();

    const currentApp = location.state;

    return (
        <>
            <h2 className="app-name">{currentApp.name}</h2>
            <div className="app-img">
                <img className="listing-img" src={currentApp.pic} alt=""></img>
            </div>

            <h3 className="app-categ">Message</h3>
            <div className="message-box">
                <p className="app-text">{currentApp.message}</p>
            </div>

            <h3 className="app-categ">Applicant Details</h3>
            <div className="message-box">
                <div className="app-edit">
                    <p className="app-text">Move In Date: </p>
                    <p className="app-entry">{currentApp.move}</p>
                </div>
                <div className="app-edit">
                    <p className="app-text">Residents: </p>
                    <p className="app-entry">{currentApp.residents}</p>
                </div>
            </div>

            <div>
                <button className="app-button">Approve</button>
            </div>
            <div>
                <button className="deny-button">Deny</button>
            </div>
        </>
    )

}

export default ApplicationInfo