import React from "react";
import styles from './Post.module.css';


const Post = (props) => {

    return (
        <>
            {
                props.posts.map((str, key) => {
                        return (
                            <span className={styles.post} key={key} onClick={() => {
                                props.getSingleString(str.id)
                            }}>
                                <div>{str.id}</div>
                                <div>{str.firstName}</div>
                                <div>{str.lastName}</div>
                                <div>{str.email}</div>
                                <div>{str.phone}</div>
                            </span>
                        )
                    }
                )}
        </>
    )
}

export default Post;