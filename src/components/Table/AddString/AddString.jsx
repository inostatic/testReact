import React from "react";
import './AddString.css';

const AddString = () => {
    let addMessage =() => {
        alert('Добавляю форму');
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
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <input type="text"/>
                <span><button onClick={addMessage}>Добавить</button></span>
            </div>
        </span>
    )
}

export default AddString;





//             // alert('Здесь должна вываливаться форма');