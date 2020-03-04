import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        stringData: state.smallData.SD,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {

    }
}

const SDPostContainer = connect(mapStateToProps, MapDispatchToProps)(Post);

export default SDPostContainer;


