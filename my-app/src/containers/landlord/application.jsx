import React from "react";
import ReactDOM from "react-dom";
import "./application.scss"

const Application = () => {

    const applicationData = [
        {
            id: 1,
            name: 'Marcus',
            message: 'I want house',
            move: '1/1/1',
            residents: 1,
            score: 700,
            pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
        }, 
        {
            id: 2,
            name: 'Marcus',
            message: 'I want house',
            move: '1/1/1',
            residents: 1,
            score: 700,
            pic: "https://www.bhg.com/thmb/0Fg0imFSA6HVZMS2DFWPvjbYDoQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
        }
    ];

    const currentApp = applicationData[0] 

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

export default Application