
const SD_ADD_POST = 'SD_ADD_POST';
const SD_UPDATE_INPUT_TEXT = 'SD_UPDATE_INPUT_TEXT';
const SD_SET_POSTS = 'SD_SET_POSTS';
const SD_SET_CURRENT_PAGE = 'SD_SET_CURRENT_PAGE';
const SD_DISPLAY_PRELOADER = 'SD_DISPLAY_PRELOADER';
const SD_SINGLE_STRING = 'SD_SINGLE_STRING';
const SD_SORT = 'SD_SORT';
const SD_SET_TOTAL_POST_COUNT = 'SD_SET_TOTAL_POST_COUNT';

let initialState = {
    SD: [],
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

}


const SDReducer = (state = initialState, action) => {
    switch (action.type) {
        case SD_ADD_POST: {
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
                SD: [newRow, ...partPost],
                totalPostCount: state.totalPostCount + 1,
            };
        }
        case SD_SET_TOTAL_POST_COUNT: {
            return {
                ...state,
                totalPostCount: action.count,
            }
        }
        case SD_UPDATE_INPUT_TEXT: {
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
        case SD_SET_POSTS: {
            let partPost = action.SD.slice(state.currentPage - 1, state.pageSize);
            return {
              ...state,
              SD: partPost,
              fullData: [...state.fullData, ...action.SD]
            }
        }
        case SD_SET_CURRENT_PAGE: {
            let start = (action.currentPage - 1) * state.pageSize;
            let end = action.currentPage * state.pageSize;
            let partPost = state.fullData.slice(start, end);
            return {
                ...state,
                currentPage: action.currentPage,
                SD: partPost,
            }
        }
        case SD_DISPLAY_PRELOADER: {
            return {
                ...state,
                isFetching: action.isFetching,
            }
        }
        case SD_SINGLE_STRING: {
            let singleString = state.fullData.find( string => string.id === action.stringId);
            return {
                ...state,
                stringId: action.stringId,
                singleString: singleString,
            }
        }
        case SD_SORT: {
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
                SD: partPost,
                sort: sort,
                currentPage: 1,
            }
        }
        default:
            return state;
    }
}

export const addSmallDataPostActionCreator = () => ({type: SD_ADD_POST });
export const updateSmallDataPostActionCreator = (newText) => ({type: SD_UPDATE_INPUT_TEXT, text: newText});
export const setSmallDataPostActionCreator = (SD) => ({type: SD_SET_POSTS, SD });
export const setSmallDataCurrentPageActionCreator = (currentPage) => ({type: SD_SET_CURRENT_PAGE, currentPage });
export const setSmallDataDisplayPreloader = (isFetching) => ({type: SD_DISPLAY_PRELOADER, isFetching });
export const getSmallDataSingleString = (stringId) => ({type: SD_SINGLE_STRING, stringId });
export const sortSmallDataActionCreator = (column) => ({type: SD_SORT, column  });
export const setSmallDataTotalPostCount = (count) => ({type: SD_SET_TOTAL_POST_COUNT, count  });
export default SDReducer;