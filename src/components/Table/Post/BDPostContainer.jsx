import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {BD} from "../../../redux/data/BD";
import {setBigDataPostActionCreator} from "../../../redux/BD-reducer";



let mapStateToProps = (state) => {
    return {
        stringData: state.bigData.BD,
        DB: BD,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        setPostActionCreator: (BD) => dispatch(setBigDataPostActionCreator(BD)),
    }
}

const BDPostContainer = connect(mapStateToProps, MapDispatchToProps)(Post);

export default BDPostContainer;



