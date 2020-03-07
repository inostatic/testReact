import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {
    getSmallDataSingleString,
    setSmallDataCurrentPageActionCreator,
    setSmallDataDisplayPreloader,
    setSmallDataPostActionCreator, sortSmallDataActionCreator,
} from "../../../redux/SD-reducer";
import * as axios from 'axios';
import Preloader from "../../common/Preloader/Preloader";
import SingleInfo from "../SingleInfo/SingleInfo";
import Search from "../Search/Search";
import TableHeader from "../TableHeader/TableHeader";


class SDPostCont extends React.Component {
    componentDidMount() {
        this.props.setDisplayPreloader(true);
        axios.get(this.props.URL).then(response => {
            this.props.setDisplayPreloader(false);
            this.props.setPostActionCreator(response.data);
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalPostCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <>
                <TableHeader sorting={this.props.sorting}/>
                {this.props.isFetching ? <Preloader/> : null}
                <Post posts={this.props.posts}
                      currentPage={this.props.currentPage}
                      pages={pages}
                      setCurrentPage={this.props.setCurrentPage}
                      getSingleString={this.props.getSingleString}/>
                <Search/>
                {this.props.stringId !== null ? <SingleInfo singleString={this.props.singleString} /> : null}
            </>
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
        isFetching: state.smallData.isFetching,
        stringId: state.smallData.stringId,
        singleString: state.smallData.singleString,

    }
}


const SDPostContainer = connect(mapStateToProps, {
    setPostActionCreator: setSmallDataPostActionCreator,
    setCurrentPage: setSmallDataCurrentPageActionCreator,
    setDisplayPreloader: setSmallDataDisplayPreloader,
    getSingleString: getSmallDataSingleString,
    sorting: sortSmallDataActionCreator,
})(SDPostCont);

export default SDPostContainer;


