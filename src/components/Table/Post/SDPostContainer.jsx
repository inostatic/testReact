import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {setSmallDataPostActionCreator} from "../../../redux/SD-reducer";




let mapStateToProps = (state) => {
    return {
        posts: state.smallData.SD,
        URL: "http://www.filltext.com/?rows=32&" +
            "id={number|1000}&" +
            "firstName={firstName}&" +
            "lastName={lastName}&" +
            "email={email}&" +
            "phone={phone|(xxx)xxx-xx-xx}&" +
            "address={addressObject}&" +
            "description={lorem|32}",
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
    setPostActionCreator: (SD) => dispatch(setSmallDataPostActionCreator(SD)),
    }
}

const SDPostContainer = connect(mapStateToProps, MapDispatchToProps)(Post);

export default SDPostContainer;


