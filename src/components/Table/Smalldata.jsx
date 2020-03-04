import React from "react";
import './Table.css';
import TableHeader from "./TableHeader/TableHeader";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";
import AddStringContainer from "./AddString/AddStringContainer";
import PostContainer from "./Post/PostContainer";

const Smalldata = (props) => {
    return (
        <div className="th">
            <AddStringContainer data={'SD'} />
            <TableHeader/>
            <PostContainer data={'SD'} />
            <Search/>
            <SingleInfo/>
        </div>
    )
}

export default Smalldata;