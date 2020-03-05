import React from "react";
import '../Table.css';
import * as axios from 'axios';


const Post = (props) => {

    if (props.posts.length === 0) {
        axios.get(props.URL).then(response => {
            props.setPostActionCreator(response.data)
        })


    }

    let GetTextById = (event) => {
        // console.log(event.target.id);
        console.log(props.posts[event.target.id]);
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

    let postsTable = props.posts.map((str, key) => {
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
            {postsTable}
        </span>
    )
}


export default Post;

