import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props){
    const { playlistName, playlistTracks } = props;

    return(
        <div id="playlist" className="panel">
            <h2>{playlistName}</h2>
            <div className="panelBody">
                <Tracklist tracks={playlistTracks} panel="playlist" />
                <button>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;