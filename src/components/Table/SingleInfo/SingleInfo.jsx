import React from "react";
import './SingleInfo.css';
// import '../../../App.css';
const SingleInfo = (props) => {
    return (
      <>
          <div>Выбран пользователь: <span className="singleInfo">{props.singleString.firstName} {props.singleString.lastName}</span></div>
          <div>Описание: <span className="singleInfo">{props.singleString.description}</span></div>
          <div>Адрес проживания: <span className="singleInfo">{props.singleString.address.streetAddress}</span></div>
          <div>Город: <span className="singleInfo">{props.singleString.address.city}</span></div>
          <div>Провинция/штат: <span className="singleInfo">{props.singleString.address.state}</span></div>
          <div>Индекс: <span className="singleInfo">{props.singleString.address.zip}</span></div>
      </>
    )
}

export default SingleInfo;







