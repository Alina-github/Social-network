import {combineReducers, createStore} from 'redux'
import profilePageReducer from "./reducers/profile-reducer";
import dialogPageReducer from "./reducers/dialogPage-reducer";
import sideBarReducer from "./reducers/sideBar-reducer";
import usersPageReducer from "./reducers/users-reducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    sideBarFriends: sideBarReducer,
    usersPage: usersPageReducer
    }
);

 let store = createStore(reducers);

window.store=store;

export default store;

//calls every child reducer, and gathers their results
// into a single state object
