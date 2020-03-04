import {BD} from "./data/BD";

const BD_ADD_POST = 'BD-ADD-POST';
const BD_UPDATE_INPUT_TEXT = 'BD-UPDATE-INPUT-TEXT';

let initialState = {
    BD: BD,
    newTextInput: {
        input_id: '',
        input_firstName: '',
        input_lastName: '',
        input_email: '',
        input_phone: '',
    },
}





const BDReducer = (state = initialState, action) => {
    switch (action.type) {
        case BD_ADD_POST: {
            let stateCopy = {...state};
            stateCopy.newTextInput = {...state.newTextInput};
            stateCopy.BD = [...state.BD];

            let newRow = {
                id: stateCopy.newTextInput.input_id,
                firstName: stateCopy.newTextInput.input_firstName,
                lastName: stateCopy.newTextInput.input_lastName,
                email: stateCopy.newTextInput.input_email,
                phone: stateCopy.newTextInput.input_phone,
            };
            stateCopy.BD.unshift(newRow);
            stateCopy.newTextInput.input_id = '';
            stateCopy.newTextInput.input_firstName = '';
            stateCopy.newTextInput.input_lastName = '';
            stateCopy.newTextInput.input_email = '';
            stateCopy.newTextInput.input_phone = '';
            return stateCopy;
        }
        case BD_UPDATE_INPUT_TEXT: {
            let stateCopy = {...state};
            stateCopy.newTextInput = {...state.newTextInput};
            stateCopy.BD = [...state.BD];

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

export const addBigDataPostActionCreator = () => ({type: BD_ADD_POST, DB: "BD"});
export const updateBigDataPostActionCreator = (newText) => ({type: BD_UPDATE_INPUT_TEXT, text: newText});
export default BDReducer;
