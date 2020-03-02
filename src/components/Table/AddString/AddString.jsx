import React from "react";
import './AddString.css';

const AddString = (props) => {

    let id = React.createRef();
    let firstName = React.createRef();
    let lastName = React.createRef();
    let email = React.createRef();
    let phone = React.createRef();

    // let input_id = id.current.value;
    // let input_firstName = firstName.current.value;
    // let input_lastName = lastName.current.value;
    // let input_email = email.current.value;
    // let input_phone = phone.current.value;

    let addForm = () => {
        props.addPost();

    }

    let onFormChange = () => {
        let newText = {
            id: id.current.value,
            firstName: firstName.current.value,
            lastName: lastName.current.value,
            email: email.current.value,
            phone: phone.current.value,
        };
        props.updateInputText(newText);
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