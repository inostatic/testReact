import {SD} from './data/SD';
import {BD} from './data/BD';
import dataReducer from "./data-reducer";



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
    renderEntireTree() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
       this._state = dataReducer(this._state, action);
       this.renderEntireTree(this._state);

    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    }
}



export default store;

