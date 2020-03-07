

const BD_ADD_POST = 'BD_ADD_POST';
const BD_UPDATE_INPUT_TEXT = 'BD_UPDATE_INPUT_TEXT';
const BD_SET_POSTS = 'BD_SET_POSTS';
const BD_SET_CURRENT_PAGE = 'BD_SET_CURRENT_PAGE';
const BD_DISPLAY_PRELOADER = 'BD_DISPLAY_PRELOADER';
const BD_SINGLE_STRING = 'BD_SINGLE_STRING';
const BD_SORT = 'BD_SORT';
const BD_SEARCH = 'BD_SEARCH';

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
    totalPostCount: 1000,
    currentPage: 1,
    isFetching: false,
    stringId: null,
    singleString: {},
    sort: null,
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
            return {
                ...state,
                fullData: [newRow,...state.fullData],
                newTextInput: newTextInput,
                currentPage: 1,
            };
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
        case BD_SEARCH: {

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
export const filterBigDataActionCreator = (column) => ({type: BD_SORT, column  });
export default BDReducer;
