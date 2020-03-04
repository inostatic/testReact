import React from "react";
import '../Table.css';


const Post = (props) => {
    let GetTextById = (event) => {
        // console.log(event.target.id);
        console.log(props.stringData[event.target.id]);
        // return (
        //     <div>
        //         Выбран пользователь: <b>{ props.stringData[event.target.id].firstName + ' ' + props.stringData[event.target.id].lastName }</b>
        //         Описание:
        //         <textarea>
        //             et lacus magna dolor...
        //         </textarea>
        //         Адрес проживания: <b>9792 Mattis Ct</b>
        //         Город: <b>Waukesha</b>
        //         Провинция/штат: <b>WI</b>
        //         Индекс: <b>22178</b>
        //     </div>
        // );
    }
    // debugger;
    let stringTable = props.stringData.map((str, key) => {

            return (
                <div className="tr">
                    <span id={key} onClick={GetTextById}>{str.id}</span>
                    <span>{str.firstName}</span>
                    <span>{str.lastName}</span>
                    <span>{str.email}</span>
                    <span>{str.phone}</span>
                </div>
            )
        }
    );

    return (
        <span>
            {stringTable}
        </span>
    )
}


export default Post;

