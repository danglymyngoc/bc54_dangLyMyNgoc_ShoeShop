import { combineReducers } from "redux";
import shoeReducer from "./shoeReducer";
const rootReducer = combineReducers({
    shoeReducer,
})

export default rootReducer