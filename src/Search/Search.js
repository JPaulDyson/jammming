import React from 'react';
import './Search.css';

function Search(){
    return(
        <form>
            <input 
                type="text" 
                placeholder="Search for songs"
            />
            <button type="submit">Search</button>
        </form>
    );
}

export default Search;