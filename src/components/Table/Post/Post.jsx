import React from "react";
import '../Table.css';
import styles from './Post.module.css';




const Post = (props) => {

    return (
            <div>
                {props.pages.map(p =>  <span className={props.currentPage === p ? styles.selectedPage : styles.normalPage}
                 onClick={() => {props.setCurrentPage(p) }}>{p}</span>)}
                {
                    props.posts.map((str, key) => {
                            return (
                                <div className="tr">
                                    <span id={key}>{str.id}</span>
                                    <span>{str.firstName}</span>
                                    <span>{str.lastName}</span>
                                    <span>{str.email}</span>
                                    <span>{str.phone}</span>
                                </div>
                            )
                        }
                    )}
            </div>
        )
    }


export default Post;