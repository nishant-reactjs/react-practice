import { combineReducers } from "redux";
import amountReducer from "./reducer";
import todoReducer from "./todoReducer";
const reducers = combineReducers({
    amount: amountReducer,
    todos: todoReducer
})

export default reducers