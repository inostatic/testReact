

const BD_ADD_POST = 'BD-ADD-POST';
const BD_UPDATE_INPUT_TEXT = 'BD-UPDATE-INPUT-TEXT';

const BDReducer = (state, action) => {
    switch (action.type) {
        case BD_ADD_POST:
            let newRow = {
                id: state.bigData.newTextInput.input_id,
                firstName: state.bigData.newTextInput.input_firstName,
                lastName: state.bigData.newTextInput.input_lastName,
                email: state.bigData.newTextInput.input_email,
                phone: state.bigData.newTextInput.input_phone,
            };
            state.bigData.BD.unshift(newRow);
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
            state.bigData.newTextInput.input_id = action.text.id;
            state.bigData.newTextInput.input_firstName = action.text.firstName;
            state.bigData.newTextInput.input_lastName = action.text.lastName;
            state.bigData.newTextInput.input_email = action.text.email;
            state.bigData.newTextInput.input_phone = action.text.phone;
            return state;
        default:
            return state;
    }
}

export const addBigDataPostActionCreator = () => ({type: BD_ADD_POST});
export const updateBigDataPostActionCreator = (newText) => ({type: BD_UPDATE_INPUT_TEXT, text: newText});
export default BDReducer;