import React from "react";
import './Table.css';
import TableHeader from "./TableHeader/TableHeader";
import BdAddStringContainer from "./AddString/BDAddStringContainer";
import BDPostContainer from "./Post/BDPostContainer";

const Bigdata = () => {
    return (
        <div className="th">
            <BdAddStringContainer />
            <BDPostContainer />


        </div>
    )
}

export default Bigdata;