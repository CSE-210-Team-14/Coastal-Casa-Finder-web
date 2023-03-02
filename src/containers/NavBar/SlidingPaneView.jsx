import React, {useState} from "react";
import SlidingPane from "react-sliding-pane";

const SlidingPaneView = () => {

    const [state, setState] = useState({
        isPaneOpen: false,
        isPaneOpenLeft: false,
    });


    return (
        <>
            <SlidingPane isOpen={state.isPaneOpen} title="What view" subtitle="Listing or Search"
            onRequestClose={() => {
                // triggered on "<" on left top click or on outside click
                setState({ isPaneOpen: false });
              }}>
                <div>What view would you prefer</div>
                <p>Landlord</p>
                <p>Search Listings</p>   
            </SlidingPane>
        </>
    )
}

export default SlidingPaneView;