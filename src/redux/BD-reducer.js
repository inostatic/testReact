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
        case BD_ADD_POST:
            let newRow = {
                id: state.newTextInput.input_id,
                firstName: state.newTextInput.input_firstName,
                lastName: state.newTextInput.input_lastName,
                email: state.newTextInput.input_email,
                phone: state.newTextInput.input_phone,
            };
            state.BD.unshift(newRow);
            let clearInput = {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            };

            BDReducer(state, updateBigDataPostActionCreator(clearInput))
            return state;
        case BD_UPDATE_INPUT_TEXT:
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

export const addBigDataPostActionCreator = () => ({type: BD_ADD_POST});
export const updateBigDataPostActionCreator = (newText) => ({type: BD_UPDATE_INPUT_TEXT, text: newText});
export default BDReducer;