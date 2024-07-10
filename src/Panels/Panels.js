import React, { useState } from "react";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function Panels(props){
    const { GetAccessToken } = props;
    const [searchTracks, setSearchTracks] = useState("");
    const [playlistName, setPlaylistName] = useState("");
    const [playlistDesc, setPlaylistDesc] = useState("");
    const [playlistTracks, setPlaylistTracks] = useState("");

    function submitSearch(searchTerm){
        const query = encodeURIComponent(searchTerm);
        const accessToken = localStorage.getItem("access_token");
        const searchUrl = `https://api.spotify.com/v1/search?q=${query}&type=track&access_token=${accessToken}`;
        
        fetch(searchUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the response data (e.g., display track results)
            const trackItems = data.tracks.items;
      
            // Create an array of track objects
            const trackObjects = trackItems.map(item => ({
              id: item.id,
              name: item.name,
              artists: item.artists.map(artist => artist.name),
              album: item.album.name,
              previewUrl: item.preview_url,
              uri: item.uri,
            }));
            
            setSearchTracks(trackObjects);
      
        })
        .catch(error => {
            // If there is an error, force login
            console.error('Error fetching data:', error);
            alert("There was an error with your request. Most likely, your access token has expired. Click OK to renew it and then you can try your search again.");
            localStorage.removeItem("access_token");
            localStorage.removeItem("access_token_expiry");
            GetAccessToken();
        });
    }

    function updatePlaylistName(newName){
        setPlaylistName(newName);
    }

    function updatePlaylistDesc(newDesc){
        setPlaylistDesc(newDesc);
    }

    function addToPlaylist(track){
        //check if there are already tracks in the playlist
        let duplicate = false;

        if(playlistTracks){
            //Check if trackId is already present in the playlist, and if so, return an error
            const trackId = Number(track.id);
            if(playlistTracks.some(playlistTrack => playlistTrack.id === trackId)){
                duplicate = true;
            }
        }

        if(duplicate){
            alert("Error: The selected song is already in the playlist.");
        }else{
            //add track to playlist
            setPlaylistTracks([track, ...playlistTracks]);
        }

    }

    function removeFromPlaylist(track){
        //Check if trackId is already present in the playlist, and if not, return an error
        const trackId = track.id;
        if(playlistTracks.some(playlistTrack => playlistTrack.id === trackId)){
            //Remove track from playlist
            const updatedPlaylist = playlistTracks.filter(playlistTrack => playlistTrack.id !== track.id);
            setPlaylistTracks(updatedPlaylist);
        }else{
            alert("Error: The selected song is not in the playlist.");
        }        
    }

    return(
        <>
            <Search submitSearch={submitSearch} />
            <main>
                <SearchResults tracks={searchTracks} trackAction={addToPlaylist} />
                <Playlist 
                    playlistName={playlistName} 
                    updatePlaylistName={updatePlaylistName} 
                    playlistDesc={playlistDesc} 
                    updatePlaylistDesc={updatePlaylistDesc} 
                    playlistTracks={playlistTracks} 
                    setPlaylistTracks={setPlaylistTracks}
                    trackAction={removeFromPlaylist}
                />
            </main>
        </>
    );

}

export default Panels;