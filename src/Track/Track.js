import React, { useState } from 'react';
import './Track.css';
import TrackAction from '../TrackAction/TrackAction';

function Track(props){
    const { track, panel, trackAction } = props;
    
    return(
        <div className="track">
            <div className="trackDetails">
                <h3>{track.name} {track.panel}</h3>
                <h4>
                    <span className="artist">{track.artists}</span>:&nbsp;
                    <span className="album">{track.album}</span>
                </h4>
            </div>
            <TrackAction track={track} panel={panel} trackAction={trackAction} />
        </div>
    );
}

export default Track;