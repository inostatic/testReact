
const SD_ADD_POST = 'SD_ADD_POST';
const SD_UPDATE_INPUT_TEXT = 'SD_UPDATE_INPUT_TEXT';
const SD_SET_POSTS = 'SD_SET_POSTS';
const SD_SET_CURRENT_PAGE = 'SD_SET_CURRENT_PAGE';
const SD_DISPLAY_PRELOADER = 'SD_DISPLAY_PRELOADER';

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
    totalPostCount: 32,
    currentPage: 1,
    isFetching: false,

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
            return {
                ...state,
                fullData: [newRow,...state.fullData],
                // SD: [newRow,...state.SD],
                newTextInput: newTextInput,
            };
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
        default:
            return state;
    }
}

export const addSmallDataPostActionCreator = () => ({type: SD_ADD_POST, DB: "SD"});
export const updateSmallDataPostActionCreator = (newText) => ({type: SD_UPDATE_INPUT_TEXT, text: newText});
export const setSmallDataPostActionCreator = (SD) => ({type: SD_SET_POSTS, SD });
export const setSmallDataCurrentPageActionCreator = (currentPage) => ({type: SD_SET_CURRENT_PAGE, currentPage });
export const setSmallDataDisplayPreloader = (isFetching) => ({type: SD_DISPLAY_PRELOADER, isFetching });
export default SDReducer;