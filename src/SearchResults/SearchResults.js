import React, { useState } from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props){
    const { tracks } = props;
    const [searchTracks, setSearchTracks] = useState(tracks);
    return(
        <div id="results" className="panel">
            <h2>Results</h2>
            <div className="panelBody">
                <Tracklist tracks={tracks} />
            </div>
        </div>
    );
}

export default SearchResults;