import React from "react";
import './Table.css';
import TableHeader from "./TableHeader/TableHeader";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";
import SDAddStringContainer from "./AddString/SDAddStringContainer";
import SDPostContainer from "./Post/SDPostContainer";

const Smalldata = (props) => {
    return (
        <div className="th">
            <SDAddStringContainer />
            <TableHeader/>
            <SDPostContainer />
            <Search/>
            <SingleInfo/>
        </div>
    )
}

export default Smalldata;