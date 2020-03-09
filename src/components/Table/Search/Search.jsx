import React from "react";
import './Search.css';


const Search = (props) => {
    let onFormChange = (event) => {
        props.updateSearchActionCreator(event.target.value);
    }

    return (
        <span className="search">
            <input type="text" onChange={onFormChange} value={props.searchInput}
                   placeholder=" Введите строку для поиска"></input>
            <button onClick={() => props.filterActionCreator()}>Поиск</button>
        </span>
    )
}

export default Search;