import {SD} from "./data/SD";

const SD_ADD_POST = 'SD-ADD-POST';
const SD_UPDATE_INPUT_TEXT = 'SD-UPDATE-INPUT-TEXT';

let initialState = {
    SD: SD,
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
        case SD_ADD_POST:
            let newRow = {
                id: state.newTextInput.input_id,
                firstName: state.newTextInput.input_firstName,
                lastName: state.newTextInput.input_lastName,
                email: state.newTextInput.input_email,
                phone: state.newTextInput.input_phone,
            };
            state.SD.unshift(newRow);
            let clearInput = {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            };

            SDReducer(state, updateSmallDataPostActionCreator(clearInput))
            return state;
        case SD_UPDATE_INPUT_TEXT:
            state.newTextInput.input_id = action.text.id;
            state.newTextInput.input_firstName = action.text.firstName;
            state.newTextInput.input_lastName = action.text.lastName;
            state.newTextInput.input_email = action.text.email;
            state.newTextInput.input_phone = action.text.phone;
            return state;
        default:
            return state;
    }
}

export const addSmallDataPostActionCreator = () => ({type: SD_ADD_POST});
export const updateSmallDataPostActionCreator = (newText) => ({type: SD_UPDATE_INPUT_TEXT, text: newText});
export default SDReducer;