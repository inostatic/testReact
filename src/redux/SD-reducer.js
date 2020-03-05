

const SD_ADD_POST = 'SD-ADD-POST';
const SD_UPDATE_INPUT_TEXT = 'SD-UPDATE-INPUT-TEXT';
const SD_SET_POSTS = 'SD_SET-POSTS';

let initialState = {
    SD: [],
    newTextInput: {
        input_id: '',
        input_firstName: '',
        input_lastName: '',
        input_email: '',
        input_phone: '',
    },

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
                SD: [newRow,...state.SD],
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
            return {
              ...state,
              SD: [ ...state.SD, ...action.SD ]
            }
        }
        default:
            return state;
    }
}

export const addSmallDataPostActionCreator = () => ({type: SD_ADD_POST, DB: "SD"});
export const updateSmallDataPostActionCreator = (newText) => ({type: SD_UPDATE_INPUT_TEXT, text: newText});
export const setSmallDataPostActionCreator = (SD) => ({type: SD_SET_POSTS, SD });
export default SDReducer;