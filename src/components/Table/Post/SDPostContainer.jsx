import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {setSmallDataPostActionCreator} from "../../../redux/SD-reducer";
import {SD} from "../../../redux/data/SD";



let mapStateToProps = (state) => {
    return {
        stringData: state.smallData.SD,
        DB: SD,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
    setPostActionCreator: (SD) => dispatch(setSmallDataPostActionCreator(SD)),
    }
}

const SDPostContainer = connect(mapStateToProps, MapDispatchToProps)(Post);

export default SDPostContainer;


