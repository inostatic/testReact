import React from "react";
import './AddString.css';
import {addSmallDataPostActionCreator, updateSmallDataPostActionCreator} from "../../../redux/SD-reducer";
import AddString from "./AddString";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newTextInput: state.smallData.newTextInput,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => dispatch(addSmallDataPostActionCreator()),
        updatePostActionCreator: (newText) => dispatch(updateSmallDataPostActionCreator(newText)),
    }
}

const SDAddStringContainer = connect(mapStateToProps, MapDispatchToProps)(AddString);

export default SDAddStringContainer;