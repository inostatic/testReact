import React from "react";
import Post from "./Post/Post";
import {connect} from "react-redux";
import {
    getPostsThunkCreator,
    filterActionCreator,
    getSingleStringActionCreator,
    setCurrentPageActionCreator,
    sortActionCreator,
    updateSearchActionCreator, addPostActionCreator, updatePostActionCreator, openFormActionCreator,
} from "../../redux/table-reducer";
import Preloader from "../common/Preloader/Preloader";
import Search from "./Search/Search";
import SingleInfo from "./SingleInfo/SingleInfo";
import TableHeader from "./TableHeader/TableHeader";
import AddString from "./AddString/AddString";
import {withRouter} from "react-router-dom";


class TableCont extends React.Component {
    componentDidMount() {
        this.props.getPostsThunkCreator(this.props.location.pathname);
    }

    render() {
        if (this.props.isFetching) {
            return <div><Preloader/></div>
        } else {
            return (
                <div>
                    <AddString newTextInput={this.props.newTextInput}
                               keyButton={this.props.keyButton}
                               openForm={this.props.openForm}
                               addPostActionCreator={this.props.addPostActionCreator}
                               updatePostActionCreator={this.props.updatePostActionCreator}
                               openFormActionCreator={this.props.openFormActionCreator}
                    />
                    <TableHeader sortActionCreator={this.props.sortActionCreator}
                                 tableHeader={this.props.tableHeader}
                                 currentPage={this.props.currentPage}
                                 setCurrentPageActionCreator={this.props.setCurrentPageActionCreator}
                                 pages={this.props.pages}
                    />
                    <Post posts={this.props.posts}
                          getSingleStringActionCreator={this.props.getSingleStringActionCreator}
                    />
                    <Search filterActionCreator={this.props.filterActionCreator}
                            updateSearchActionCreator={this.props.updateSearchActionCreator}
                            searchInput={this.props.searchInput}
                    />
                    {this.props.singleString !== null ? <SingleInfo singleString={this.props.singleString}/> : null}
                </div>
            )
        }
    }
}

let mapStateToProps = (state) => {
    return {
        posts: state.tableData.BD,
        pageSize: state.tableData.pageSize,
        totalPostCount: state.tableData.totalPostCount,
        currentPage: state.tableData.currentPage,
        isFetching: state.tableData.isFetching,
        singleString: state.tableData.singleString,
        searchInput: state.tableData.searchInput,
        tableHeader: state.tableData.tableHeader,
        newTextInput: state.tableData.newTextInput,
        keyButton: state.tableData.keyButton,
        openForm: state.tableData.openForm,
        pages: state.tableData.pages,
    }
}

let withTableContainer = withRouter(TableCont);

const TableContainer = connect(mapStateToProps, {
    setCurrentPageActionCreator,
    getSingleStringActionCreator,
    sortActionCreator,
    filterActionCreator,
    updateSearchActionCreator,
    getPostsThunkCreator,
    addPostActionCreator,
    updatePostActionCreator,
    openFormActionCreator,
})(withTableContainer);

export default TableContainer;



