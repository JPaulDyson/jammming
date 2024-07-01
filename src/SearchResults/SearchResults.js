import React from 'react';
import Tracklist from '../Tracklist/Tracklist';

function SearchResults(props){
    const { tracks, trackAction } = props;
    return(
        <div id="results" className="panel">
            <h2>Results</h2>
            <div className="panelBody">
                <Tracklist tracks={tracks} panel="results" trackAction={trackAction} />
            </div>
        </div>
    );
}

export default SearchResults;