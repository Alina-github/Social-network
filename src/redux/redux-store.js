import {applyMiddleware, combineReducers, createStore, compose } from 'redux'
import profilePageReducer from "./reducers/profile-reducer";
import dialogPageReducer from "./reducers/dialogPage-reducer";
import sideBarReducer from "./reducers/sideBar-reducer";
import usersPageReducer from "./reducers/users-reducer";
import initializationReducer from "./reducers/initialization-reducer";
import authorizationReducer from "./reducers/auth-reducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    sideBarFriends: sideBarReducer,
    usersPage: usersPageReducer,
    authMe :authorizationReducer,
    initialization: initializationReducer,
    }
);

 let store = createStore(reducers,
     compose(applyMiddleware(thunkMiddleware),
         window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
 );

window.store=store;

export default store;

//calls every child reducer, and gathers their results
// into a single state object
