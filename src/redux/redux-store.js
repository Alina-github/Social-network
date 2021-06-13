import {combineReducers, createStore} from 'redux'
import profilePageReducer from "./reducers/profile-reducer";
import dialogPageReducer from "./reducers/dialogPage-reducer";
import sideBarReducer from "./reducers/sideBar-reducer";

let store = createStore(reducers);

let reducers = combineReducers({
    profilePageReducer,
    dialogPageReducer,
    sideBarReducer
    }
);


//calls every child reducer, and gathers their results
// into a single state object

export default
