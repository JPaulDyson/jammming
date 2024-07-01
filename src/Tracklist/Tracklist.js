import React from 'react';
import Track from '../Track/Track';

function Tracklist(props){
    const { tracks, panel, trackAction } = props;
    return(
        <div className="trackList">
            {tracks.map((track) => (
                <Track key={track.id} track={track} panel={panel} trackAction={trackAction} />
            ))}
        </div>
    );
}

export default Tracklist;