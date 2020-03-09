import React from "react";
import './AddString.css';
import {
    addSmallDataPostActionCreator,
    openFormSmallDataActionCreator,
    updateSmallDataPostActionCreator
} from "../../../redux/SD-reducer";
import AddString from "./AddString";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newTextInput: state.smallData.newTextInput,
        keyButton: state.smallData.keyButton,
        openForm: state.smallData.openForm,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => dispatch(addSmallDataPostActionCreator()),
        updatePostActionCreator: (newText) => dispatch(updateSmallDataPostActionCreator(newText)),
        openFormActionCreator: () => dispatch(openFormSmallDataActionCreator()),
    }
}

const SDAddStringContainer = connect(mapStateToProps, MapDispatchToProps)(AddString);

export default SDAddStringContainer;