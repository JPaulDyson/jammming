import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import './Playlist.css';

function Playlist(props){
    const { playlistName, updatePlaylistName, playlistTracks, trackAction } = props;

    function handleChange(e){
        updatePlaylistName(e.currentTarget.value);
    }

    function handleClick(){
        const trackURIs = [];
        for(let i=0; i < playlistTracks.length; i++){
            trackURIs.push(playlistTracks[i].uri);
        }
        alert(`Saving ${trackURIs}`);
    }

    return(
        <div id="playlist" className="panel">
            <h2><input type="text" name="playlistName" id="playlistName" value={playlistName} onChange={handleChange} /></h2>
            <div className="panelBody">
                <Tracklist tracks={playlistTracks} panel="playlist" trackAction={trackAction} />
                <button onClick={handleClick}>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;