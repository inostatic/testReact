import {applyMiddleware, combineReducers, createStore} from "redux";
import SDReducer from "./SD-reducer";
import BDReducer from "./BD-reducer";
import thunkMiddleware from "redux-thunk";


let reducer = combineReducers({
    smallData: SDReducer,
    bigData: BDReducer,
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;