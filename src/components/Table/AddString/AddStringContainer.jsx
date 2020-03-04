import React from "react";
import './AddString.css';
import {addSmallDataPostActionCreator, updateSmallDataPostActionCreator} from "../../../redux/SD-reducer";
import {addBigDataPostActionCreator, updateBigDataPostActionCreator} from "../../../redux/BD-reducer";
import AddString from "./AddString";
import StoreContext from "../../../StoreContext";


const AddStringContainer = (props) => {

    return (
        <StoreContext.Consumer>
            {(store) => {
                let addPostActionCreator;
                let updatePostActionCreator;
                let data;

                switch (props.data) {
                    case 'SD':
                        addPostActionCreator = addSmallDataPostActionCreator;
                        updatePostActionCreator = updateSmallDataPostActionCreator;
                        data = 'smallData';
                        break;
                    case 'BD':
                        addPostActionCreator = addBigDataPostActionCreator;
                        updatePostActionCreator = updateBigDataPostActionCreator;
                        data = 'bigData';
                        break;
                }
                let state = store.getState();
                let addForm = () => {
                    store.dispatch(addPostActionCreator());

                }
                let onFormChange = (newText) => {
                    store.dispatch(updatePostActionCreator(newText));
                }
                return <AddString addPostActionCreator={addForm}
                                  updatePostActionCreator={onFormChange}
                                  newTextInput={state[data].newTextInput}/>
            }
            }
        </StoreContext.Consumer>
    )
}

export default AddStringContainer;