import React from "react";
import './TrackAction.css';

function TrackAction(props){
    const { track, panel, addToPlaylist } = props;

    function handleClick(e){
        addToPlaylist(track);
    }

    if(panel === "results"){
        return(
            <div className="trackAction" track={track} onClick={handleClick}>+</div>
        );
    }
}

export default TrackAction;