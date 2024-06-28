import React, { useState } from 'react';
import './Track.css';
import TrackAction from '../TrackAction/TrackAction';

function Track(props){
    const { track, panel, addToPlaylist } = props;

    return(
        <div className="track">
            <div className="trackDetails">
                <h3>{track.name} {track.panel}</h3>
                <h4>
                    <span className="artist">{track.artist}</span>:&nbsp;
                    <span className="album">{track.album}</span>
                </h4>
            </div>
            <TrackAction track={track} panel={panel} addToPlaylist={addToPlaylist} />
        </div>
    );
}

export default Track;