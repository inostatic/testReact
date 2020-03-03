import React from "react";
import './AddString.css';
import {addSmallDataPostActionCreator, updateSmallDataPostActionCreator} from "../../../redux/SD-educer";
import {addBigDataPostActionCreator, updateBigDataPostActionCreator} from "../../../redux/BD-reducer";


const AddString = (props) => {

    let addPostActionCreator;
    let updatePostActionCreator;
    let id = React.createRef();
    let firstName = React.createRef();
    let lastName = React.createRef();
    let email = React.createRef();
    let phone = React.createRef();

    switch (props.data) {
        case 'SD':
            addPostActionCreator = addSmallDataPostActionCreator;
            updatePostActionCreator = updateSmallDataPostActionCreator;
            break;
        case 'BD':
            addPostActionCreator = addBigDataPostActionCreator;
            updatePostActionCreator = updateBigDataPostActionCreator;
            break;
    }

    let addForm = () => {
        props.dispatch(addPostActionCreator());

    }
    let onFormChange = () => {
        let newText = {
            id: id.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value,
        };
        props.dispatch(updatePostActionCreator(newText));
    }


    return (
        <span>
            <input type="checkbox" id="hd-1" className="hide"/>
            <label htmlFor="hd-1">Открыть форму</label>
            <div className="form" >
                <span>id </span>
                <span>firstName </span>
                <span>lastName </span>
                <span>email </span>
                <span>phone </span>
                <input type="text" ref={id} onChange={onFormChange} value={props.newTextInput.input_id} />
                <input type="text" ref={firstName} onChange={onFormChange}  value={props.newTextInput.input_firstName} />
                <input type="text" ref={lastName} onChange={onFormChange} value={props.newTextInput.input_lastName} />
                <input type="text" ref={email} onChange={onFormChange} value={props.newTextInput.input_email} />
                <input type="text" ref={phone} onChange={onFormChange} value={props.newTextInput.input_phone} />
                <span><button onClick={addForm}>Добавить</button></span>
            </div>
        </span>
    )
}

export default AddString;