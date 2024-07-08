import React, { useState } from 'react';
import './Search.css';

function Search(props){
    
    const {submitSearch} = props;
    const [searchTerm, setSearchTerm] = useState("");

    function handleChange(e){
        setSearchTerm(e.currentTarget.value);
    }

    function handleSubmit(e){
        e.preventDefault();
        submitSearch(searchTerm);
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                placeholder="Search for songs"
                value={searchTerm}
                onChange={handleChange}
            />
            <button id="searchSubmit">Search</button>
        </form>
    );
}

export default Search;