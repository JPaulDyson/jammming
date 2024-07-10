import React from 'react';
import Track from '../Track/Track';
import "./Tracklist.css";

function Tracklist(props){
    const { tracks, panel, trackAction } = props;

    // Check if the 'tracks' array has at least one item
    if (tracks.length === 0 && panel === "results") {
        return(
            <p id="searchTip">Use the box above to search for tracks!</p>
        );
    }

    return(
        <div className="trackList">
            {
                //if there are tracks, map them to Track
                tracks.length !== 0 ? 
                    tracks.map((track) => (
                        <Track key={track.id} track={track} panel={panel} trackAction={trackAction} />
                    )) : ""
            }
        </div>
    );
}

export default Tracklist;