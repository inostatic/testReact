

const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT';

const dataReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newRow = {
                id: state.newTextInput.input_id,
                firstName: state.newTextInput.input_firstName,
                lastName: state.newTextInput.input_lastName,
                email: state.newTextInput.input_email,
                phone: state.newTextInput.input_phone,
            };
            state.smallData.unshift(newRow);
            let clearInput = {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            };

            dataReducer(state, updatePostActionCreator(clearInput))
            return state;
        case UPDATE_INPUT_TEXT:
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

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (newText) => ({type: UPDATE_INPUT_TEXT, text: newText});
export default dataReducer;