import { combineReducers } from "redux";
import counter from "./counter";
import logged from "./isLogged";

export const reducers = combineReducers({
    counter: counter,
    islogged: logged
}) 