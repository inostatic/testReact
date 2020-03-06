import React from "react";
import '../Table.css';
import * as axios from 'axios';


class Post extends React.Component {
    componentDidMount() {
        axios.get(this.props.URL).then(response => {
            this.props.setPostActionCreator(response.data);
        })
    }
    render() {
        return (
            <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
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