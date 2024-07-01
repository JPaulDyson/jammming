import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist(props){
    const { playlistName, updatePlaylistName, playlistTracks, trackAction } = props;

    function handleChange(e){
        updatePlaylistName(e.currentTarget.value);
    }

    return(
        <div id="playlist" className="panel">
            <h2><input type="text" name="playlistName" id="playlistName" value={playlistName} onChange={handleChange} /></h2>
            <div className="panelBody">
                <Tracklist tracks={playlistTracks} panel="playlist" trackAction={trackAction} />
                <button>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;