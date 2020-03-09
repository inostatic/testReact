import {getBigDataAxios} from "../API/API";

const BD_ADD_POST = 'BD_ADD_POST';
const BD_UPDATE_INPUT_TEXT = 'BD_UPDATE_INPUT_TEXT';
const BD_SET_POSTS = 'BD_SET_POSTS';
const BD_SET_CURRENT_PAGE = 'BD_SET_CURRENT_PAGE';
const BD_DISPLAY_PRELOADER = 'BD_DISPLAY_PRELOADER';
const BD_SINGLE_STRING = 'BD_SINGLE_STRING';
const BD_SORT = 'BD_SORT';
const BD_SEARCH = 'BD_SEARCH';
const BD_SET_TOTAL_POST_COUNT = 'BD_SET_TOTAL_POST_COUNT';
const BD_UPDATE_SEARCH_INPUT = 'BD_UPDATE_SEARCH_INPUT';
const BD_OPEN_FORM = 'BD_OPEN_FORM';

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
    stringId: null,
    singleString: {},
    searchInput: '',
    keyButton: true,
}


const BDReducer = (state = initialState, action) => {
    switch (action.type) {
        /*****************************************************************/
        case BD_ADD_POST: {
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
            };
        }
        /*****************************************************************/
        case BD_SET_TOTAL_POST_COUNT: {
            return {
                ...state,
                totalPostCount: action.count,
                copyTotalPostCount: action.count,
            }
        }
        /*****************************************************************/

        case BD_UPDATE_INPUT_TEXT: {
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
        case BD_SET_POSTS: {
            let partPost = action.BD.slice(state.currentPage - 1, state.pageSize);
            let tableHeader = {id: '', firstName: '', lastName: '', email: '', phone: ''};
            let sort = {direction: 2, preColumn: 'id'};

            return {
                ...state,
                BD: partPost,
                fullData: [...state.fullData, ...action.BD],
                copyFullData: [...state.copyFullData, ...action.BD],
                tableHeader: tableHeader,
                sort: sort,
                currentPage: 1,
            }
        }
        /*****************************************************************/
        case BD_OPEN_FORM: {
            if (state.openForm === false) {
                return {...state, openForm: true}
            } else if (state.openForm === true) {
                return {...state, openForm: false}
            }
        }
        /*****************************************************************/
        case BD_SET_CURRENT_PAGE: {
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
        case BD_DISPLAY_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        /*****************************************************************/
        case BD_SINGLE_STRING: {
            let singleString = state.fullData.find(string => string.id === action.stringId);

            return {
                ...state,
                stringId: action.stringId,
                singleString: singleString,
            }
        }
        /*****************************************************************/
        case BD_SORT: {
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
        case BD_UPDATE_SEARCH_INPUT: {
            return {
                ...state,
                searchInput: action.text,
            }
        }
        /*****************************************************************/
        case BD_SEARCH: {
            let partPost;
            let tableHeader = {id: '', firstName: '', lastName: '', email: '', phone: ''};
            let sort = {direction: 2, preColumn: 'id'};

            if (state.searchInput === '') {
                partPost = state.copyFullData.slice(0, 50);

                return {
                    ...state,
                    fullData: [...state.copyFullData],
                    BD: partPost,
                    totalPostCount: state.copyTotalPostCount,
                    tableHeader: tableHeader,
                    sort: sort,
                    currentPage: 1,
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

                return {
                    ...state,
                    fullData: filterFullData,
                    BD: partPost,
                    currentPage: 1,
                    totalPostCount: newTotalPostCount,
                    tableHeader: tableHeader,
                    sort: sort,
                }
            }
}
        /*****************************************************************/
        default:
            return state;
    }
}


export const addBigDataPostActionCreator = () => ({type: BD_ADD_POST});
export const openFormBigDataActionCreator = () => ({type: BD_OPEN_FORM});
export const updateBigDataPostActionCreator = (newText) => ({type: BD_UPDATE_INPUT_TEXT, text: newText});
export const setBigDataPostActionCreator = (BD) => ({type: BD_SET_POSTS, BD});
export const setBigDataCurrentPageActionCreator = (currentPage) => ({type: BD_SET_CURRENT_PAGE, currentPage});
export const setBigDataDisplayPreloader = (isFetching) => ({type: BD_DISPLAY_PRELOADER, isFetching});
export const getBigDataSingleString = (stringId) => ({type: BD_SINGLE_STRING, stringId});
export const sortBigDataActionCreator = (column) => ({type: BD_SORT, column});
export const setBigDataTotalPostCount = (count) => ({type: BD_SET_TOTAL_POST_COUNT, count});
export const updateBigDataSearchActionCreator = (newText) => ({type: BD_UPDATE_SEARCH_INPUT, text: newText});
export const filterBigDataActionCreator = () => ({type: BD_SEARCH});
export const BigDataGetPostsThunkCreator = () => {
    return (dispatch) => {
        dispatch(setBigDataDisplayPreloader(true));
        getBigDataAxios().then(response => {
            dispatch(setBigDataDisplayPreloader(false));
            dispatch(setBigDataPostActionCreator(response.data));
            dispatch(setBigDataTotalPostCount(response.data.length));
        })
    }
}
export default BDReducer;
