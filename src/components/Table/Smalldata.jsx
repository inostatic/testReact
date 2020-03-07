import React from "react";
import './Table.css';
import TableHeader from "./TableHeader/TableHeader";
import SDAddStringContainer from "./AddString/SDAddStringContainer";
import SDPostContainer from "./Post/SDPostContainer";

const Smalldata = () => {
    return (
        <div className="th">
            <SDAddStringContainer />
            <TableHeader/>
            <SDPostContainer />


        </div>
    )
}

export default Smalldata;