import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {
    filterBigDataActionCreator,
    getBigDataSingleString,
    setBigDataCurrentPageActionCreator,
    setBigDataDisplayPreloader,
    setBigDataPostActionCreator, setBigDataTotalPostCount, sortBigDataActionCreator, updateBigDataSearchActionCreator,
} from "../../../redux/BD-reducer";
import * as axios from "axios";
import Preloader from "../../common/Preloader/Preloader";
import Search from "../Search/Search";
import SingleInfo from "../SingleInfo/SingleInfo";
import TableHeader from "../TableHeader/TableHeader";



class BDPostCont extends React.Component {
    componentDidMount() {
        this.props.setDisplayPreloader(true);
        axios.get(this.props.URL).then(response => {
            this.props.setDisplayPreloader(false);
            this.props.setPostActionCreator(response.data);
            this.props.setTotalPostCount(response.data.length);
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
                      pages={pages} setCurrentPage={this.props.setCurrentPage}
                      getSingleString={this.props.getSingleString}/>
                <Search filterActionCreator={this.props.filterActionCreator}
                        updateSearchActionCreator={this.props.updateSearchActionCreator}
                        searchInput={this.props.searchInput}/>
                {this.props.stringId !== null ? <SingleInfo singleString={this.props.singleString} /> : null}
            </>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.bigData.BD,
        URL: "http://www.filltext.com/?rows=1000&" +
            "id={number|1000}&" +
            "firstName={firstName}&delay=3&" +
            "lastName={lastName}&" +
            "email={email}&" +
            "phone={phone|(xxx)xxx-xx-xx}&" +
            "address={addressObject}&" +
            "description={lorem|32}",
        pageSize: state.bigData.pageSize,
        totalPostCount: state.bigData.totalPostCount,
        currentPage: state.bigData.currentPage,
        isFetching: state.bigData.isFetching,
        stringId: state.bigData.stringId,
        singleString: state.bigData.singleString,
        searchInput: state.bigData.searchInput,
    }
}


const BDPostContainer = connect(mapStateToProps, {
    setPostActionCreator: setBigDataPostActionCreator,
    setCurrentPage: setBigDataCurrentPageActionCreator,
    setDisplayPreloader: setBigDataDisplayPreloader,
    getSingleString: getBigDataSingleString,
    sorting: sortBigDataActionCreator,
    setTotalPostCount: setBigDataTotalPostCount,
    filterActionCreator: filterBigDataActionCreator,
    updateSearchActionCreator: updateBigDataSearchActionCreator,

})(BDPostCont);

export default BDPostContainer;



