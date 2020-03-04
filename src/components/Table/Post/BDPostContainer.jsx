import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        stringData: state.bigData.BD,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {

    }
}

const BDPostContainer = connect(mapStateToProps, MapDispatchToProps)(Post);

export default BDPostContainer;



