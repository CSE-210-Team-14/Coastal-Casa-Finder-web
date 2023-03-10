import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./applicationInfo.scss";
import {useLocation, useNavigate} from "react-router-dom";


const ApplicationInfo = () => {

    const location = useLocation();

    const currentApp = location.state;

    let navigate = useNavigate();

    const previousPage = () => {
        navigate(-1);
    }

    const approveApp = () => { 
        navigate(-1);
    }

    const denyApp = () => {
        navigate(-1);
    }

    return (
        <>
            <button className="return-button" onClick={() => {previousPage();}}></button>
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
                <Popup trigger={<button className="app-button">Approve</button>} position="right center">
                    <div>Application approved!</div>
                    <button class="pop-button" onClick={() => {approveApp();}}>Close</button>
                </Popup>
            </div>
            <div>
                <Popup trigger={<button className="deny-button">Deny</button>} position="right center">
                    <div>Application denied!</div>
                    <button class="pop-button" onClick={() => {denyApp();}}>Close</button>
                </Popup>
            </div>
        </>
    )

}

export default ApplicationInfo