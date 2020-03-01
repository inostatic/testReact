import React from "react";
import './Table.css';
import Post from "./Post/Post";
import TableHeader from "./TableHeader/TableHeader";
import AddString from "./AddString/AddString";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";

const Bigdata = (props) => {
    return (
        <div className="th">
            <AddString/>
            <TableHeader/>
            <Post stringData={props.stringData} />
            <Post stringData={props.stringData} />
            <Search/>
            <SingleInfo/>

        </div>
    )
}

export default Bigdata;