import React, { useState } from 'react';

function Track(props){
    const { track } = props;
    return(
        <div className="track">
            <h3>{track.name}</h3>
        </div>
    );
}

export default Track;