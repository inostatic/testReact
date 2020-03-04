import React from "react";
import './Table.css';
import TableHeader from "./TableHeader/TableHeader";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";
import AddStringContainer from "./AddString/AddStringContainer";
import PostContainer from "./Post/PostContainer";

const Bigdata = (props) => {
    return (
        <div className="th">
            <AddStringContainer data={'BD'} />
            <TableHeader/>
            <PostContainer data={'BD'} />
            <Search/>
            <SingleInfo/>

        </div>
    )
}

export default Bigdata;