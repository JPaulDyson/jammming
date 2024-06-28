import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function Playlist(props){
    const { playlist } = props;
    const [playlistName, setPlaylistName] = useState(playlist.name);
    const [playlistTracks, setPlaylistTracks] = useState(playlist.tracks);

    return(
        <div id="playlist" className="panel">
            <h2>{playlist.name}</h2>
            <div className="panelBody">
                <Tracklist tracks={playlist.tracks} />
                <button>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;