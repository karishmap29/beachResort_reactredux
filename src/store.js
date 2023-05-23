import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk"
import { restReducer } from "./reducers/restReducer";



const reducers = combineReducers({
    resortReducer: restReducer
})
const middleware = [thunk]

const store = createStore(reducers, applyMiddleware(...middleware))


export default store