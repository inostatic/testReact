import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {setBigDataPostActionCreator} from "../../../redux/BD-reducer";




let mapStateToProps = (state) => {
    return {
        posts: state.bigData.BD,
        URL: "http://www.filltext.com/?rows=1000&" +
            "id={number|1000}&" +
            "firstName={firstName}&delay=3&" +
            "lastName={lastName}&" +
            "email={email}&" +
            "phone={phone|(xxx)xxx-xx-xx}&" +
            "address={addressObject}&" +
            "description={lorem|32}",
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        setPostActionCreator: (BD) => dispatch(setBigDataPostActionCreator(BD)),
    }
}

const BDPostContainer = connect(mapStateToProps, MapDispatchToProps)(Post);

export default BDPostContainer;



