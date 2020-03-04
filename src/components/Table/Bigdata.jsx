import React from "react";
import './Table.css';
import TableHeader from "./TableHeader/TableHeader";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";
import BdAddStringContainer from "./AddString/BDAddStringContainer";
import BDPostContainer from "./Post/BDPostContainer";

const Bigdata = (props) => {
    return (
        <div className="th">
            <BdAddStringContainer />
            <TableHeader/>
            <BDPostContainer />
            <Search/>
            <SingleInfo/>

        </div>
    )
}

export default Bigdata;