import React, { useState } from "react";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function Panels(props){
    const { tracks, playlist } = props;
    const [searchTracks, setSearchTracks] = useState(tracks);
    const [playlistName, setPlaylistName] = useState(playlist.name);
    const [playlistTracks, setPlaylistTracks] = useState(playlist.tracks);

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

    return(
        <>
            <SearchResults tracks={tracks} addToPlaylist={addToPlaylist} />
            <Playlist playlistName={playlistName} playlistTracks={playlistTracks} />
        </>
    );

}

export default Panels;