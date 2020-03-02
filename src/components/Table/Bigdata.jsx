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
            <AddString addPost={props.addPost} newTextInput={props.newTextInput} updateInputText={props.updateInputText}/>
            <TableHeader/>
            <Post stringData={props.bigData} />
            <Search/>
            <SingleInfo/>

        </div>
    )
}

export default Bigdata;