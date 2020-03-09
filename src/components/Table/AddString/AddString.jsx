import React from "react";
import './AddString.css';
// import '../../../App.css';
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
        <span className="addStr">
            <div>Открыть форму</div>
            <div>id: </div>
            <div>firstName: </div>
            <div>lastName: </div>
            <div>email: </div>
            <div>phone: </div>
            <input type="text" ref={id} onChange={onFormChange} value={props.newTextInput.input_id}/>
            <input type="text" ref={firstName} onChange={onFormChange} value={props.newTextInput.input_firstName}/>
            <input type="text" ref={lastName} onChange={onFormChange} value={props.newTextInput.input_lastName}/>
            <input type="text" ref={email} onChange={onFormChange} value={props.newTextInput.input_email}/>
            <input type="text" ref={phone} onChange={onFormChange} value={props.newTextInput.input_phone}/>
            <button disabled={props.keyButton} onClick={addForm}>Добавить</button>
        </span>
    )
}

export default AddString;