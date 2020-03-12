import React from "react";
import './SingleInfo.css';


const SingleInfo = (props) => {
    debugger;
    return (
      <>
          <div>Выбран пользователь: <span className="SI">{props.singleString.firstName} {props.singleString.lastName}</span></div>
          <div>Описание: <span className="SI">{props.singleString.description}</span></div>
          <div>Адрес проживания: <span className="SI">{props.singleString.address.streetAddress}</span></div>
          <div>Город: <span className="SI">{props.singleString.address.city}</span></div>
          <div>Провинция/штат: <span className="SI">{props.singleString.address.state}</span></div>
          <div>Индекс: <span className="SI">{props.singleString.address.zip}</span></div>
      </>
    )
}

export default SingleInfo;







