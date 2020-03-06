import React from "react";
import '../Table.css';
import * as axios from 'axios';
import styles from './Post.module.css';


class Post extends React.Component {
    componentDidMount() {
        axios.get(this.props.URL).then(response => {
            this.props.setPostActionCreator(response.data);
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalPostCount / this.props.pageSize);
        let pages = [];
        for(let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }


        return (
            <div>
                {pages.map(p =>  <span className={this.props.currentPage === p ? styles.selectedPage : styles.normalPage}
                 onClick={() => {this.props.setCurrentPage(p) }}>{p}</span>)}
                {
                    this.props.posts.map((str, key) => {
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
}

export default Post;