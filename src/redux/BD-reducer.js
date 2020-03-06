
const BD_ADD_POST = 'BD-ADD-POST';
const BD_UPDATE_INPUT_TEXT = 'BD-UPDATE-INPUT-TEXT';
const BD_SET_POSTS = 'BD_SET-POSTS';
const BD_SET_CURRENT_PAGE = 'BD_SET-CURRENT-PAGE';

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
                BD: [newRow,...state.BD],
                fullData: [newRow,...state.fullData],
                newTextInput: newTextInput,
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
        default:
            return state;
    }
}

export const addBigDataPostActionCreator = () => ({type: BD_ADD_POST, DB: "BD"});
export const updateBigDataPostActionCreator = (newText) => ({type: BD_UPDATE_INPUT_TEXT, text: newText});
export const setBigDataPostActionCreator = (BD) => ({type: BD_SET_POSTS, BD });
export const setBigDataCurrentPageActionCreator = (currentPage) => ({type: BD_SET_CURRENT_PAGE, currentPage });
export default BDReducer;
