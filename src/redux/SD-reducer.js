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
        case SD_ADD_POST: {
            let stateCopy = {...state};
            stateCopy.newTextInput = {...state.newTextInput};
            stateCopy.SD = [...state.SD];

            let newRow = {
                id: stateCopy.newTextInput.input_id,
                firstName: stateCopy.newTextInput.input_firstName,
                lastName: stateCopy.newTextInput.input_lastName,
                email: stateCopy.newTextInput.input_email,
                phone: stateCopy.newTextInput.input_phone,
            };
            stateCopy.SD.unshift(newRow);
            stateCopy.newTextInput.input_id = '';
            stateCopy.newTextInput.input_firstName = '';
            stateCopy.newTextInput.input_lastName = '';
            stateCopy.newTextInput.input_email = '';
            stateCopy.newTextInput.input_phone = '';
            return stateCopy;
        }
        case SD_UPDATE_INPUT_TEXT: {
            let stateCopy = {...state};
            stateCopy.newTextInput = {...state.newTextInput};
            stateCopy.SD = [...state.SD];

            stateCopy.newTextInput.input_id = action.text.id;
            stateCopy.newTextInput.input_firstName = action.text.firstName;
            stateCopy.newTextInput.input_lastName = action.text.lastName;
            stateCopy.newTextInput.input_email = action.text.email;
            stateCopy.newTextInput.input_phone = action.text.phone;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addSmallDataPostActionCreator = () => ({type: SD_ADD_POST, DB: "SD"});
export const updateSmallDataPostActionCreator = (newText) => ({type: SD_UPDATE_INPUT_TEXT, text: newText});
export default SDReducer;