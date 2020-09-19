import {combineReducers} from "redux";
import products from "./products";
import productEditing from "./productEditing";

const appReducer = combineReducers({
    products,
    productEditing
});

export default appReducer;
