

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

let initialState = {
    BD: [],
    fullData: [],
    newTextInput: {
        input_id: '',
        input_firstName: '',
        input_lastName: '',
        input_email: '',
        input_phone: '',
    },
    pageSize: 50,
    totalPostCount: null,
    currentPage: 1,
    isFetching: false,
    stringId: null,
    singleString: {},
    sort: null,
    searchInput: '',
    copyFullData: [],
    filterBD: [],
}


const BDReducer = (state = initialState, action) => {
    switch (action.type) {
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
                input_phone: '',
            };
            let start = (state.currentPage - 1) * state.pageSize;
            let end = state.currentPage * state.pageSize;
            let partPost = state.fullData.slice(start, end - 1);

            return {
                ...state,
                fullData: [newRow,...state.fullData],
                newTextInput: newTextInput,
                currentPage: 1,
                BD: [newRow, ...partPost],
                totalPostCount: state.totalPostCount + 1,
            };
        }
        case BD_SET_TOTAL_POST_COUNT: {
            return {
                ...state,
                totalPostCount: action.count,
            }
        }
        case BD_UPDATE_INPUT_TEXT: {
            let newTextInput = {
                input_id: action.text.id,
                input_firstName: action.text.firstName,
                input_lastName: action.text.lastName,
                input_email: action.text.email,
                input_phone: action.text.phone,
            }
            return {
                ...state,
                newTextInput: newTextInput,
            }
        }
        case BD_SET_POSTS: {
            let partPost = action.BD.slice(state.currentPage - 1, state.pageSize);
            return {
                ...state,
                BD: partPost,
                fullData: [...state.fullData, ...action.BD],
                copyFullData: [...state.copyFullData, ...action.BD],
            }
        }
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
        case BD_DISPLAY_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case BD_SINGLE_STRING: {
            let singleString = state.fullData.find( string => string.id === action.stringId);
            return {
                ...state,
                stringId: action.stringId,
                singleString: singleString,
            }
        }

        case BD_SORT: {
            let fullDataSortById, sort, column;
            column = action.column;
            if(state.sort === null || state.sort === 2) {
                fullDataSortById = state.fullData.sort((prev, next) => {
                    if ( prev[column] < next[column] ) return -1;
                    if ( prev[column] < next[column] ) return 1;
                });
                sort = 1;
            } else if(state.sort === 1) {
                fullDataSortById = state.fullData.sort((prev, next) => {
                    if ( prev[column] < next[column] ) return -1;
                    if ( prev[column] < next[column] ) return 1;
                }).reverse();
                sort = 2;
            }
            let start = (state.currentPage - 1) * state.pageSize;
            let end = state.currentPage * state.pageSize;
            let partPost = fullDataSortById.slice(start, end);
            return {
                ...state,
                fullData: fullDataSortById,
                BD: partPost,
                sort: sort,
            }
        }
        case BD_UPDATE_SEARCH_INPUT: {
            return {
                ...state,
                searchInput: action.text,
            }
        }
        case BD_SEARCH: {
            if(state.searchInput === '') {
                return {
                    ...state,
                    fullData: state.copyFullData,
                }

            } else if(state.searchInput.length > 0) {
                let strId;
                let filterFullData = state.fullData.filter(elem => {
                    strId = String(elem.id);
                    return (
                        (strId.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.firstName.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.lastName.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.email.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                        || (elem.phone.toLowerCase().indexOf(state.searchInput.toLowerCase()) !== -1)
                    )
                });
                let partPost = filterFullData.slice(0, 50);
                return {
                    ...state,
                    fullData: filterFullData,
                    BD: partPost,
                    currentPage: 1,
                }
            }


        }
        default:
            return state;
    }
}


export const addBigDataPostActionCreator = () => ({type: BD_ADD_POST });
export const updateBigDataPostActionCreator = (newText) => ({type: BD_UPDATE_INPUT_TEXT, text: newText});
export const setBigDataPostActionCreator = (BD) => ({type: BD_SET_POSTS, BD });
export const setBigDataCurrentPageActionCreator = (currentPage) => ({type: BD_SET_CURRENT_PAGE, currentPage });
export const setBigDataDisplayPreloader = (isFetching) => ({type: BD_DISPLAY_PRELOADER, isFetching });
export const getBigDataSingleString = (stringId) => ({type: BD_SINGLE_STRING, stringId });
export const sortBigDataActionCreator = (column) => ({type: BD_SORT, column  });
export const setBigDataTotalPostCount = (count) => ({type: BD_SET_TOTAL_POST_COUNT, count  });
export const updateBigDataSearchActionCreator = (newText) => ({type: BD_UPDATE_SEARCH_INPUT, text: newText});
export const filterBigDataActionCreator = () => ({type: BD_SEARCH  });
export default BDReducer;
