import React from "react";
import './TrackAction.css';

function TrackAction(props){
    const { track, panel, trackAction } = props;
    const trackActionClass = panel === "results" ? "trackAction add" : "trackAction remove"; 

    function handleClick(e){
        trackAction(track);
    }

    return(
        <div className={trackActionClass} track={track} onClick={handleClick}>{panel === "results" ? "+":"x"}</div>
    );
}

export default TrackAction;