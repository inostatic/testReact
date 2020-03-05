import React from "react";
import '../Table.css';
import * as axios from 'axios';


class Post extends React.Component {
    constructor(props) {
        super(props);
        axios.get(this.props.URL).then(response => {
            this.props.setPostActionCreator(response.data);
        })
    }

    render() {
        return (
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
            )
        )
    }
}

export default Post;