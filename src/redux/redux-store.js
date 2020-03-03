import {combineReducers, createStore} from "redux";
import smalldataReducer from "./SD-educer";

let reducer = combineReducers({
    'dataReducer': smalldataReducer,
})

let store = createStore(reducer);

export default store;