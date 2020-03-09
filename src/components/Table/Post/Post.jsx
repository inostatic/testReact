import React from "react";
import '../Table.css';
import styles from './Post.module.css';
// import '../../../App.css';

const Post = (props) => {

    return (
        <>
            <nav className={styles.pagination} >{props.pages.map(p => <span
                className={props.currentPage === p ? styles.selectedPage : styles.normalPage}
                onClick={() => {
                    props.setCurrentPage(p)
                }}> {p} </span>)}</nav>
            {
                props.posts.map((str, key) => {
                        return (
                            <span className={styles.post} id={key} onClick={() => {
                                props.getSingleString(str.id)
                            }}>
                                <div id={key}>{str.id}</div>
                                <div id={key}>{str.firstName}</div>
                                <div id={key}>{str.lastName}</div>
                                <div id={key}>{str.email}</div>
                                <div id={key}>{str.phone}</div>
                            </span>
                        )
                    }
                )}

        </>
    )
}

export default Post;