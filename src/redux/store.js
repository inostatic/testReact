import {SD} from './data/SD';
import {BD} from './data/BD';

const ADD_POST = 'ADD-POST';
const UPDATE_INPUT_TEXT = 'UPDATE-INPUT-TEXT';


let store = {
    _state: {
        smallData: SD,
        bigData: BD,
        newTextInput: {
            input_id: '',
            input_firstName: '',
            input_lastName: '',
            input_email: '',
            input_phone: '',
        },
    },
    _renderEntireTree() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    // getRenderEntireTree() {
    //     return this._renderEntireTree();
    // },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newRow = {
                id: this._state.newTextInput.input_id,
                firstName: this._state.newTextInput.input_firstName,
                lastName: this._state.newTextInput.input_lastName,
                email: this._state.newTextInput.input_email,
                phone: this._state.newTextInput.input_phone,
            };
            this._state.smallData.unshift(newRow);
            let clearInput = {
                id: '',
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
            };

            this.dispatch(updatePostActionCreator(clearInput))
            this._renderEntireTree(this._state);
        } else if (action.type === UPDATE_INPUT_TEXT) {
            this._state.newTextInput.input_id = action.text.id;
            this._state.newTextInput.input_firstName = action.text.firstName;
            this._state.newTextInput.input_lastName = action.text.lastName;
            this._state.newTextInput.input_email = action.text.email;
            this._state.newTextInput.input_phone = action.text.phone;

            this._renderEntireTree(this._state);
        }
    },

    subscribe(observer) {
        this._renderEntireTree = observer;
    }
}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostActionCreator = (newText) => ({type: UPDATE_INPUT_TEXT, text: newText});
export default store;

