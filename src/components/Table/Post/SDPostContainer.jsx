import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {setSmallDataCurrentPageActionCreator, setSmallDataPostActionCreator} from "../../../redux/SD-reducer";
import * as axios from 'axios';



class SDPostCont extends React.Component {
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
            <Post posts={this.props.posts}
                  currentPage={this.props.currentPage}
                  pages={pages} setCurrentPage={this.props.setCurrentPage}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.smallData.SD,
        URL: "http://www.filltext.com/?rows=32&" +
            "id={number|1000}&" +
            "firstName={firstName}&" +
            "lastName={lastName}&" +
            "email={email}&" +
            "phone={phone|(xxx)xxx-xx-xx}&" +
            "address={addressObject}&" +
            "description={lorem|32}",
        pageSize: state.smallData.pageSize,
        totalPostCount: state.smallData.totalPostCount,
        currentPage: state.smallData.currentPage,

    }
}
let MapDispatchToProps = (dispatch) => {
    return {
        setPostActionCreator: (SD) => dispatch(setSmallDataPostActionCreator(SD)),
        setCurrentPage: (pageNumber) => dispatch(setSmallDataCurrentPageActionCreator(pageNumber)),
    }
}

const SDPostContainer = connect(mapStateToProps, MapDispatchToProps)(SDPostCont);

export default SDPostContainer;


