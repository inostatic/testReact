

const SD_ADD_POST = 'SD-ADD-POST';
const SD_UPDATE_INPUT_TEXT = 'SD-UPDATE-INPUT-TEXT';

const SDReducer = (state, action) => {
    switch (action.type) {
        case SD_ADD_POST:
            let newRow = {
                id: state.smallData.newTextInput.input_id,
                firstName: state.smallData.newTextInput.input_firstName,
                lastName: state.smallData.newTextInput.input_lastName,
                email: state.smallData.newTextInput.input_email,
                phone: state.smallData.newTextInput.input_phone,
            };
            state.smallData.SD.unshift(newRow);
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
            state.smallData.newTextInput.input_id = action.text.id;
            state.smallData.newTextInput.input_firstName = action.text.firstName;
            state.smallData.newTextInput.input_lastName = action.text.lastName;
            state.smallData.newTextInput.input_email = action.text.email;
            state.smallData.newTextInput.input_phone = action.text.phone;
            return state;
        default:
            return state;
    }
}

export const addSmallDataPostActionCreator = () => ({type: SD_ADD_POST});
export const updateSmallDataPostActionCreator = (newText) => ({type: SD_UPDATE_INPUT_TEXT, text: newText});
export default SDReducer;