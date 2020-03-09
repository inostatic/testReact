import React from "react";
import '../Table.css';
import Post from "./Post";
import {connect} from "react-redux";
import {
    BigDataGetPostsThunkCreator,
    filterBigDataActionCreator,
    getBigDataSingleString,
    setBigDataCurrentPageActionCreator,
    sortBigDataActionCreator,
    updateBigDataSearchActionCreator,
} from "../../../redux/BD-reducer";
import Preloader from "../../common/Preloader/Preloader";
import Search from "../Search/Search";
import SingleInfo from "../SingleInfo/SingleInfo";
import TableHeader from "../TableHeader/TableHeader";
import BdAddStringContainer from "../AddString/BDAddStringContainer";




class BDPostCont extends React.Component {
    componentDidMount() {
        this.props.getPostsThunkCreator();
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalPostCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        if(this.props.isFetching) {
           return <><Preloader/></>

        } else {
            return (
                <>
                    <BdAddStringContainer />
                    <TableHeader sorting={this.props.sorting}
                                 tableHeader={this.props.tableHeader}/>
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
}

let mapStateToProps = (state) => {
    return {
        posts: state.bigData.BD,
        pageSize: state.bigData.pageSize,
        totalPostCount: state.bigData.totalPostCount,
        currentPage: state.bigData.currentPage,
        isFetching: state.bigData.isFetching,
        stringId: state.bigData.stringId,
        singleString: state.bigData.singleString,
        searchInput: state.bigData.searchInput,
        tableHeader: state.bigData.tableHeader,
    }
}


const BDPostContainer = connect(mapStateToProps, {
    setCurrentPage: setBigDataCurrentPageActionCreator,
    getSingleString: getBigDataSingleString,
    sorting: sortBigDataActionCreator,
    filterActionCreator: filterBigDataActionCreator,
    updateSearchActionCreator: updateBigDataSearchActionCreator,
    getPostsThunkCreator: BigDataGetPostsThunkCreator,
})(BDPostCont);

export default BDPostContainer;



