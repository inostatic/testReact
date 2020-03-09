import React from "react";
import './AddString.css';
import {
    addBigDataPostActionCreator,
    openFormBigDataActionCreator,
    updateBigDataPostActionCreator
} from "../../../redux/BD-reducer";
import AddString from "./AddString";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        newTextInput: state.bigData.newTextInput,
        keyButton: state.bigData.keyButton,
        openForm: state.bigData.openForm,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => dispatch(addBigDataPostActionCreator()),
        updatePostActionCreator: (newText) => dispatch(updateBigDataPostActionCreator(newText)),
        openFormActionCreator: () => dispatch(openFormBigDataActionCreator()),
    }
}

const BdAddStringContainer = connect(mapStateToProps, MapDispatchToProps)(AddString);

export default BdAddStringContainer;