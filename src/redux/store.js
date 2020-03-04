import {SD} from './data/SD';
import {BD} from './data/BD';
import SDReducer from "./SD-reducer";
import BDReducer from "./BD-reducer";



let store = {
    _state: {
        smallData: {
            SD: SD,
            newTextInput: {
                input_id: '',
                input_firstName: '',
                input_lastName: '',
                input_email: '',
                input_phone: '',
            },
        } ,
        bigData:{
            BD: BD,
            newTextInput: {
                input_id: '',
                input_firstName: '',
                input_lastName: '',
                input_email: '',
                input_phone: '',
            },
        }

    },
    renderEntireTree() {
        console.log('state changed');
    },
    getState() {
        return this._state;
    },
    dispatch(action) {
       this._state = SDReducer(this._state, action);
       this._state = BDReducer(this._state, action);
       this.renderEntireTree(this._state);

    },

    subscribe(observer) {
        this.renderEntireTree = observer;
    }
}



export default store;

