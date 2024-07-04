import React, { useState, useCallback } from 'react';
import './Search.css';

function Search(props){
    const [term, setTerm] = useState("");

    const handleTermChange = useCallback((event) => {
        setTerm(event.target.value);
    }, []);  
    
    const search = useCallback(() => {
        props.onSearch(term);
    }, [props.onSearch, term]);
    

    return(
        <form>
            <input 
                type="text" 
                placeholder="Search for songs"
                onChange={handleTermChange}
            />
            <button id="searchSubmit" onClick={search}>Search</button>
        </form>
    );
}

export default Search;