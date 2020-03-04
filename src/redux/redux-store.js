import {combineReducers, createStore} from "redux";
import SDReducer from "./SD-reducer";
import BDReducer from "./BD-reducer";


let reducer = combineReducers({
    smallData: SDReducer,
    bigData: BDReducer,
})

let store = createStore(reducer);

export default store;