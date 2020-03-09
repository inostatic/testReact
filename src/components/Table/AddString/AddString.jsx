import React from "react";
import './AddString.css';


const AddString = (props) => {

    let id = React.createRef();
    let firstName = React.createRef();
    let lastName = React.createRef();
    let email = React.createRef();
    let phone = React.createRef();

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


    if (props.openForm === false) {
        return (
            <span>
                <div onClick={() => {props.openFormActionCreator()}}><span className="submit">Открыть форму</span></div>
             </span>
        )
    } else if (props.openForm === true) {
        return (
            <span className="addStrClose">
                <div onClick={() => {props.openFormActionCreator()}} ><span className="submit">Закрыть форму</span></div>
            <div>id: </div>
            <div>firstName: </div>
            <div>lastName: </div>
            <div>email: </div>
            <div>phone: </div>
            <input type="number" ref={id} onChange={onFormChange} value={props.newTextInput.input_id}/>
            <input type="text" ref={firstName} onChange={onFormChange} value={props.newTextInput.input_firstName}/>
            <input type="text" ref={lastName} onChange={onFormChange} value={props.newTextInput.input_lastName}/>
            <input type="email" ref={email} onChange={onFormChange} value={props.newTextInput.input_email}/>
            <input type="tel" ref={phone} onChange={onFormChange} value={props.newTextInput.input_phone}/>
            <button disabled={props.keyButton} onClick={() => {props.addPostActionCreator()}}>Добавить</button>
        </span>
        )
    }
}

export default AddString;