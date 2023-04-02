import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers"
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./reducers/productReducer";
import authenticateReducer from "./reducers/authenticateReducer";


// let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
/* redux: need to care about combinereducer, thunk,applyMiddleware, combineWithDevTools
   redux-toolkit: dont need. 
         combinereducer in index.js from origianl project => configureStore()
*/
const store = configureStore({
    reducer: {
        auth: authenticateReducer,
        product: productReducer,
    }
})



export default store;