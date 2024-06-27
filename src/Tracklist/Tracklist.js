import React from 'react';
import Track from '../Track/Track';

function Tracklist(props){
    const { tracks } = props;
    return(
        <div className="trackList">
            {tracks.map((track) => (
                <Track key={track.id} track={track} />
            ))}
        </div>
    );
}

export default Tracklist;