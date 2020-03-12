import {applyMiddleware, combineReducers, createStore} from "redux";
import tableReducer from "./table-reducer";
import thunkMiddleware from "redux-thunk";


let reducer = combineReducers({
    tableData: tableReducer,
})

let store = createStore(reducer, applyMiddleware(thunkMiddleware));

export default store;