import React from "react";
import '../Table.css';
import styles from './Post.module.css';


const Post = (props) => {

    return (
        <>
            <div>{props.pages.map(p => <span
                className={props.currentPage === p ? styles.selectedPage : styles.normalPage}
                onClick={() => {
                    props.setCurrentPage(p)
                }}> {p} </span>)}</div>
            {
                props.posts.map((str, key) => {
                        return (
                            <div className="tr" id={key} onClick={() => {
                                props.getSingleString(str.id)
                            }}>
                                <span id={key}>{str.id}</span>
                                <span id={key}>{str.firstName}</span>
                                <span id={key}>{str.lastName}</span>
                                <span id={key}>{str.email}</span>
                                <span id={key}>{str.phone}</span>
                            </div>
                        )
                    }
                )}

        </>
    )
}


export default Post;