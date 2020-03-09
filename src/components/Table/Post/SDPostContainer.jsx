import React from "react";
import Post from "./Post";
import {connect} from "react-redux";
import {
    filterSmallDataActionCreator,
    getSmallDataSingleString,
    setSmallDataCurrentPageActionCreator,
     SmallDataGetPostsThunkCreator,
    sortSmallDataActionCreator,
    updateSmallDataSearchActionCreator,
} from "../../../redux/SD-reducer";
import Preloader from "../../common/Preloader/Preloader";
import SingleInfo from "../SingleInfo/SingleInfo";
import Search from "../Search/Search";
import TableHeader from "../TableHeader/TableHeader";
import SDAddStringContainer from "../AddString/SDAddStringContainer";


class SDPostCont extends React.Component {
    componentDidMount() {
        this.props.getPostsThunkCreator();
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalPostCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
        if (this.props.isFetching) {
            return <><Preloader/></>
        } else {
            return (
                <>
                    <SDAddStringContainer/>
                    <TableHeader sorting={this.props.sorting}
                                 tableHeader={this.props.tableHeader}
                                 currentPage={this.props.currentPage}
                                 setCurrentPage={this.props.setCurrentPage}
                                 pages={pages}/>
                    <Post posts={this.props.posts}

                          getSingleString={this.props.getSingleString}/>
                    <Search filterActionCreator={this.props.filterActionCreator}
                            updateSearchActionCreator={this.props.updateSearchActionCreator}
                            searchInput={this.props.searchInput}/>
                    {this.props.stringId !== null ? <SingleInfo singleString={this.props.singleString}/> : null}
                </>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.smallData.SD,
        pageSize: state.smallData.pageSize,
        totalPostCount: state.smallData.totalPostCount,
        currentPage: state.smallData.currentPage,
        isFetching: state.smallData.isFetching,
        stringId: state.smallData.stringId,
        singleString: state.smallData.singleString,
        searchInput: state.smallData.searchInput,
        tableHeader: state.smallData.tableHeader,

    }
}


const SDPostContainer = connect(mapStateToProps, {
    setCurrentPage: setSmallDataCurrentPageActionCreator,
    getSingleString: getSmallDataSingleString,
    sorting: sortSmallDataActionCreator,
    filterActionCreator: filterSmallDataActionCreator,
    updateSearchActionCreator: updateSmallDataSearchActionCreator,
    getPostsThunkCreator: SmallDataGetPostsThunkCreator,
})(SDPostCont);
export default SDPostContainer;


