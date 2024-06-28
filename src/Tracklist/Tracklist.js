import React from 'react';
import Track from '../Track/Track';

function Tracklist(props){
    const { tracks, panel, addToPlaylist } = props;
    return(
        <div className="trackList">
            {tracks.map((track) => (
                <Track key={track.id} track={track} panel={panel} addToPlaylist={addToPlaylist} />
            ))}
        </div>
    );
}

export default Tracklist;