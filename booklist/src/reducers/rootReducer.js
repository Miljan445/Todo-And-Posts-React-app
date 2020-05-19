import {combineReducers} from "redux";
import TodoReducer from "../reducers/todoReducer"
import ProjekatRreducer from "../reducers/projekatReducer"


const RootReducer = combineReducers({
    todo:TodoReducer,
    projekat:ProjekatRreducer
})




export default RootReducer;