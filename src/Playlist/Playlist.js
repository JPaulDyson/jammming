import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import GetAccessToken from '../Spotify/GetAccessToken';
import './Playlist.css';

function Playlist(props){
    let { playlistName, updatePlaylistName, playlistDesc, updatePlaylistDesc, playlistTracks, setPlaylistTracks, trackAction } = props;

    function handleNameChange(e){
        updatePlaylistName(e.currentTarget.value);
    }

    function handleDescChange(e){
        updatePlaylistDesc(e.currentTarget.value);
    }

    function handleClick(){

        //if no tracks have been added, throw an error
        if(!playlistTracks){
            alert("Please add some tracks before trying to save your playlist.");
            return;
        }

        //create an array of the track URIs
        const trackURIs = [];
        for(let i=0; i < playlistTracks.length; i++){
            trackURIs.push(playlistTracks[i].uri);
        }

        //function to add tracks to the playlist:
        const addTracks = async playlistId => {
            try {
        
              const response = await fetch(
                `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
                {
                  method: 'POST',
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    uris: trackURIs, // List of track URIs
                  }),
                }
              );
        
              if (response.ok) {
                alert(`Your "${playlistName}" playlist has been successfully created!`);
                //clear playlist:
                setPlaylistTracks("");
                updatePlaylistName("");
                updatePlaylistDesc("");
              } else {
                console.error('Error adding tracks:', response.statusText);
              }
            } catch (error) {
              console.error('An error occurred:', error);
            }
        };

        //Create playlist
        const accessToken = localStorage.getItem("access_token");
        const userId = localStorage.getItem("user_id");
        if(!playlistDesc){
            playlistDesc = "A playlist created through the Jammming app.";
        }

        const createPlaylist = async () => {
            try {
        
              const response = await fetch(
                `https://api.spotify.com/v1/users/${userId}/playlists`,
                {
                  method: 'POST',
                  headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    name: playlistName,
                    description: playlistDesc,
                    public: false, // Set to true if you want the playlist to be public
                  }),
                }
              );
        
              if (response.ok) {
                const data = await response.json();
                //console.log('Playlist created:', data);
                addTracks(data.id);
              } else {
                console.error('Error creating playlist:', response.statusText);
              }
            } catch (error) {
              console.error('An error occurred:', error);
            }
        }

        if(accessToken !== null && userId !== null){
            if(playlistName){
                createPlaylist();
            }else{
                alert("Please enter a name for your playlist.");
                return;
            }
        }else{
            // If there is an error, force login
            alert("There was an error with your request. Most likely, your access token has expired. Click OK to renew it and then you can try your search again.");
            localStorage.removeItem("access_token");
            localStorage.removeItem("access_token_expiry");
            GetAccessToken();
        }

    }

    return(
        <div id="playlist" className="panel">
            <h2>
                <input 
                    type="text" 
                    name="playlistName" 
                    id="playlistName" 
                    value={playlistName} 
                    placeholder="Name your playlist"
                    onChange={handleNameChange} 
                />
            </h2>
            <div className="panelBody">
                <textarea 
                    name="playlistDesc"
                    id="playlistDesc"
                    value={playlistDesc}
                    placeholder="Enter a description for your playlist" 
                    onChange={handleDescChange}
                />
                <Tracklist tracks={playlistTracks} panel="playlist" trackAction={trackAction} />
                <button onClick={handleClick}>Save to Spotify</button>
            </div>
        </div>
    );
}

export default Playlist;