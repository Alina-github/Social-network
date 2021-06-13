import profilePageReducer from './reducers/profile-reducer';
import dialogPageReducer from "./reducers/dialogPage-reducer";
import sideBarReducer from "./reducers/sideBar-reducer";

    export let store = {

        _state: {
            profilePage: {
                newPostText: 'BBL data',
                postData: [{id: "1", message: "I'm here!!!", likesCounter: "3"},
                    {id: "2", message: "It's my first post", likesCounter: "0"},
                    {id: "3", message: "Heyyy", likesCounter: "5"},
                    {id: "4", message: "Hi, mine too", likesCounter: "1"}]
            },

            dialogPage: {

                dialogsData: [{name: "Dimych", id: "1"},
                    {name: "Anna", id: "2"},
                    {name: "Nick", id: "3"},
                    {name: "Lyon", id: "4"}],

                messagesData: [{message: "Hi", id: "1"},
                    {message: "How are you?", id: "2"},
                    {message: "Yo", id: "3"},
                    {message: "I'm good", id: "4"}]
            },

            sideBarFriends: [
                {name: "Dimych", id: "1"},
                {name: "Anna", id: "2"},
                {name: "Nick", id: "3"},
                {name: "Lyon", id: "4"}
            ]
        },

        //тк нельзя обращаться к приватному св-ву напрямую,
        // я добавлю новый метов, возв. стор
        getState(){ return this._state },

        dispatch(action) {

            this._state.profilePage = profilePageReducer(this._state.profilePage, action);
            this._state.dialogPage = dialogPageReducer(this._state.dialogPage, action);
            this._state.sideBarFriends = sideBarReducer(this._state.sideBarFriends, action);

                this._callSubscriber()
            },

        subscribe(observer) {
            this._callSubscriber = observer
        },

         _callSubscriber() {
                console.log('State changed')}
}
