import React from "react";
import './Search.css';

const Search = (props) => {

    let onFormChange = (event) => {
        props.updateSearchActionCreator(event.target.value);

    }

    return (
        <div className="search">
            <input type="text" onChange={onFormChange} value={props.searchInput}></input>
            <span><button onClick={() => props.filterActionCreator()}>Поиск</button></span>
        </div>
    )
}

export default Search;