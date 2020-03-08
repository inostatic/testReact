import React from "react";
import './AddString.css';

const AddString = (props) => {

    let id = React.createRef();
    let firstName = React.createRef();
    let lastName = React.createRef();
    let email = React.createRef();
    let phone = React.createRef();

    let addForm = () => {
        props.addPostActionCreator();

    }
    let onFormChange = () => {
        let newText = {
            id: id.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value,
        };
        props.updatePostActionCreator(newText);
    }


    return (
        <div>
            <input type="checkbox" id="hd-1" className="hide"/>
            <label htmlFor="hd-1" >Открыть форму</label>
            <span className="form" >
                <span>id </span>
                <input type="text" ref={id} onChange={onFormChange} value={props.newTextInput.input_id} />
                <span>firstName </span>
                <input type="text" ref={firstName} onChange={onFormChange}  value={props.newTextInput.input_firstName} />
                <span>lastName </span>
                <input type="text" ref={lastName} onChange={onFormChange} value={props.newTextInput.input_lastName} />
                <span>email </span>
                <input type="text" ref={email} onChange={onFormChange} value={props.newTextInput.input_email} />
                <span>phone </span>
                <input type="text" ref={phone} onChange={onFormChange} value={props.newTextInput.input_phone} />
                <span><button onClick={addForm}>Добавить</button></span>
            </span>
        </div>
    )
}

export default AddString;