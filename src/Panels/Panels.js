import React, { useState } from "react";
import Search from "../Search/Search";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";
import GetAccessToken from '../Spotify/GetAccessToken';


function Panels(props){
    const { playlist } = props;
    const [searchTracks, setSearchTracks] = useState("");
    const [playlistName, setPlaylistName] = useState(playlist.name);
    const [playlistTracks, setPlaylistTracks] = useState(playlist.tracks);

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
            }));
            
            setSearchTracks(trackObjects);
      
        })
        .catch(error => {
            // If there is an error, force login
            console.error('Error fetching data:', error);
            alert("There was an error with your request. Please try again.");
            localStorage.removeItem("access_token");
            localStorage.removeItem("access_token_expiry");
            GetAccessToken();
        });
    }

    function updatePlaylistName(newName){
        setPlaylistName(newName);
    }

    function addToPlaylist(track){
        //Check if trackId is already present in the playlist, and if so, return an error
        const trackId = Number(track.id);
        if(playlistTracks.some(playlistTrack => playlistTrack.id === trackId)){
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
                <Playlist playlistName={playlistName} updatePlaylistName={updatePlaylistName} playlistTracks={playlistTracks} trackAction={removeFromPlaylist}/>
            </main>
        </>
    );

}

export default Panels;