import {getDataAxios} from "../API/API";

const ADD_POST = 'ADD_POST';
const UPDATE_INPUT_TEXT = 'UPDATE_INPUT_TEXT';
const SET_POSTS = 'SET_POSTS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const DISPLAY_PRELOADER = 'DISPLAY_PRELOADER';
const SINGLE_STRING = 'SINGLE_STRING';
const SORT = 'SORT';
const SEARCH = 'SEARCH';
const SET_PAGINATION = 'SET_PAGINATION';
const UPDATE_SEARCH_INPUT = 'UPDATE_SEARCH_INPUT';
const OPEN_FORM = 'OPEN_FORM';


let initialState = {
    BD: [],
    fullData: [],
    copyFullData: [],
    newTextInput: {
        input_id: '',
        input_firstName: '',
        input_lastName: '',
        input_email: '',
        input_phone: '',
    },
    tableHeader: {
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    },
    sort: {
        direction: 2,
        preColumn: 'id',
    },
    openForm: false,
    pageSize: 50,
    totalPostCount: null,
    copyTotalPostCount: null,
    currentPage: 1,
    isFetching: false,
    singleString: null,
    searchInput: '',
    keyButton: true,
    pages: [],
}


const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        /*****************************************************************/
        case ADD_POST: {
            let newRow = {
                id: state.newTextInput.input_id,
                firstName: state.newTextInput.input_firstName,
                lastName: state.newTextInput.input_lastName,
                email: state.newTextInput.input_email,
                phone: state.newTextInput.input_phone,
            };
            let newTextInput = {
                input_id: '',
                input_firstName: '',
                input_lastName: '',
                input_email: '',
                input_phone: ''
            };
            let start = (state.currentPage - 1) * state.pageSize;
            let end = state.currentPage * state.pageSize;
            let partPost = state.fullData.slice(start, end - 1);
            let pagesCount = Math.ceil((state.totalPostCount + 1) / state.pageSize);
            let pages = [];

            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }

            return {
                ...state,
                fullData: [newRow, ...state.fullData],
                copyFullData: [newRow, ...state.copyFullData],
                newTextInput: newTextInput,
                currentPage: 1,
                BD: [newRow, ...partPost],
                totalPostCount: state.totalPostCount + 1,
                copyTotalPostCount: state.copyTotalPostCount + 1,
                keyButton: true,
                pages: pages,
            };
        }
        /*****************************************************************/
        case SET_PAGINATION: {
            let pagesCount = Math.ceil(action.count / state.pageSize);
            let pages = [];

            for (let i = 1; i <= pagesCount; i++) {
                pages.push(i);
            }

            return {
                ...state,
                totalPostCount: action.count,
                copyTotalPostCount: action.count,
                pages: pages,
            }
        }
        /*****************************************************************/

        case UPDATE_INPUT_TEXT: {
            let keyButton = false;
            let newTextInput = {
                input_id: action.text.id,
                input_firstName: action.text.firstName,
                input_lastName: action.text.lastName,
                input_email: action.text.email,
                input_phone: action.text.phone,
            }

            for (let key in newTextInput) {
                if (newTextInput[key] === '') {
                    keyButton = true;
                    break;
                }
            }

            return {
                ...state,
                newTextInput: newTextInput,
                keyButton: keyButton,
            }
        }
        /*****************************************************************/
        case SET_POSTS: {
            let partPost = action.BD.slice(state.currentPage - 1, state.pageSize);
            let tableHeader = {id: '', firstName: '', lastName: '', email: '', phone: ''};
            let sort = {direction: 2, preColumn: 'id'};
            return {
                ...state,
                BD: partPost,
                fullData: [...action.BD],
                copyFullData: [...action.BD],
                tableHeader: tableHeader,
                sort: sort,
                currentPage: 1,
            }
        }
        /*****************************************************************/
        case OPEN_FORM: {
            if (state.openForm === false) {
                return {...state, openForm: true}
            } else if (state.openForm === true) {
                return {...state, openForm: false}
            }
        }
        /*****************************************************************/
        case SET_CURRENT_PAGE: {
            let start = (action.currentPage - 1) * state.pageSize;
            let end = action.currentPage * state.pageSize;
            let partPost = state.fullData.slice(start, end);

            return {
                ...state,
                currentPage: action.currentPage,
                BD: partPost,
            }
        }
        /*****************************************************************/
        case DISPLAY_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        /*****************************************************************/
        case SINGLE_STRING: {
            let singleString = state.fullData.find(string => string.id === action.id
                && string.firstName === action.firstName);
            debugger;

            return {
                ...state,
                singleString: singleString,
            }
        }
        /*****************************************************************/
        case SORT: {
            let fullDataSortById;
            let column = action.column;
            let th = {...state.tableHeader};
            let sort = {...state.sort};

            if (column !== sort.preColumn) {
                sort.direction = 2;
                sort.preColumn = column;
            }

            for (let columnName in th) {
                if (columnName === column) {
                    if (th[columnName] === '▼' || th[columnName] === '') {
                        th[columnName] = '▲';
                    } else if (th[columnName] === '▲') {
                        th[columnName] = '▼';
                    }
                } else {
                    th[columnName] = '';
                }
            }

            if (sort.direction === 2) {
                fullDataSortById = state.fullData.sort((prev, next) => {
                    if (prev[column] < next[column]) return -1;
                    if (prev[column] < next[column]) return 1;
                });
                sort.direction = 1;
            } else if (sort.direction === 1) {
                fullDataSortById = state.fullData.sort((prev, next) => {
                    if (prev[column] < next[column]) return -1;
                    if (prev[column] < next[column]) return 1;
                }).reverse();
                sort.direction = 2;
            }

            let start = (state.currentPage - 1) * state.pageSize;
            let end = state.currentPage * state.pageSize;
            let partPost = fullDataSortById.slice(start, end);

            return {
                ...state,
                fullData: fullDataSortById,
                BD: partPost,
                sort: sort,
                tableHeader: th,
            }
        }
        /*****************************************************************/
        case UPDATE_SEARCH_INPUT: {
            return {
                ...state,
                searchInput: action.text,
            }
        }
        /*****************************************************************/
        case SEARCH: {
            let partPost;
            let tableHeader = {id: '', firstName: '', lastName: '', email: '', phone: ''};
            let sort = {direction: 2, preColumn: 'id'};

            if (state.searchInput === '') {
                partPost = state.copyFullData.slice(0, 50);
                let pagesCount = Math.ceil((state.copyTotalPostCount) / state.pageSize);
                let pages = [];

                for (let i = 1; i <= pagesCount; i++) {
                    pages.push(i);
                }

                return {
                    ...state,
                    fullData: [...state.copyFullData],
                    BD: partPost,
                    totalPostCount: state.copyTotalPostCount,
                    tableHeader: tableHeader,
                    sort: sort,
                    currentPage: 1,
                    pages: pages,
                }
            } else if (state.searchInput.length > 0) {
                let strId;
                let filterFullData = state.copyFullData.filter(elem => {
                    strId = String(elem.id);

                    return (
                        (strId.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.firstName.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.lastName.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.email.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.phone.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                    )
                });
                partPost = filterFullData.slice(0, 50);
                let newTotalPostCount = filterFullData.length;
                let pagesCount = Math.ceil((newTotalPostCount) / state.pageSize);
                let pages = [];

                for (let i = 1; i <= pagesCount; i++) {
                    pages.push(i);
                }

                return {
                    ...state,
                    fullData: filterFullData,
                    BD: partPost,
                    currentPage: 1,
                    totalPostCount: newTotalPostCount,
                    tableHeader: tableHeader,
                    sort: sort,
                    pages: pages,
                }
            }
}
        /*****************************************************************/
        default:
            return state;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const openFormActionCreator = () => ({type: OPEN_FORM});
export const updatePostActionCreator = (newText) => ({type: UPDATE_INPUT_TEXT, text: newText});
export const setPostActionCreator = (BD) => ({type: SET_POSTS, BD});
export const setCurrentPageActionCreator = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setDisplayPreloader = (isFetching) => ({type: DISPLAY_PRELOADER, isFetching});
export const getSingleStringActionCreator = (id, firstName) => ({type: SINGLE_STRING, id, firstName});
export const sortActionCreator = (column) => ({type: SORT, column});
export const setPagination = (count) => ({type: SET_PAGINATION, count});
export const updateSearchActionCreator = (newText) => ({type: UPDATE_SEARCH_INPUT, text: newText});
export const filterActionCreator = () => ({type: SEARCH});
export const getPostsThunkCreator = (db) => {
    return (dispatch) => {
        dispatch(setDisplayPreloader(true));
        getDataAxios(db).then(response => {
            dispatch(setDisplayPreloader(false));
            dispatch(setPostActionCreator(response.data));
            dispatch(setPagination(response.data.length));
        })
    }
}
export default tableReducer;
