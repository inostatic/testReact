import React from "react";
import './Table.css';
import Post from "./Post/Post";
import TableHeader from "./TableHeader/TableHeader";
import AddString from "./AddString/AddString";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";

const Smalldata = (props) => {
    return (
        <div className="th">
            <AddString dispatch={props.dispatch} newTextInput={props.smallData.newTextInput} data={'SD'} />
            <TableHeader/>
            <Post stringData={props.smallData.SD} newTextInput={props.smallData.newTextInput} />
            <Search/>
            <SingleInfo/>
        </div>
    )
}

export default Smalldata;