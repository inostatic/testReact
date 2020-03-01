import React from "react";
import '../Table.css';


const Post = (props) => {
    let stringTable = props.stringData.map(str => {
            return (
                <div className="tr">
                    <span>{str.id}</span>
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
            { stringTable }
        </span>

    )
}


export default Post;

