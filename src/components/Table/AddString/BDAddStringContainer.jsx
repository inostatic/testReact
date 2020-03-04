import React from "react";
import './AddString.css';
import {addBigDataPostActionCreator, updateBigDataPostActionCreator} from "../../../redux/BD-reducer";
import AddString from "./AddString";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newTextInput: state.bigData.newTextInput,
    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => dispatch(addBigDataPostActionCreator()),
        updatePostActionCreator: (newText) => dispatch(updateBigDataPostActionCreator(newText)),
    }
}

const BdAddStringContainer = connect(mapStateToProps, MapDispatchToProps)(AddString);

export default BdAddStringContainer;