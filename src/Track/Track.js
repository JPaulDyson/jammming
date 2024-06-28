import React, { useState } from 'react';
import './Track.css';

function Track(props){
    const { track } = props;
    return(
        <div className="track">
            <h3>{track.name}</h3>
            <h4>
                <span className="artist">{track.artist}</span>:&nbsp;
                <span className="album">{track.album}</span>
            </h4>
        </div>
    );
}

export default Track;