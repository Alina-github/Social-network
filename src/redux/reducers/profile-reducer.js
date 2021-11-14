import {profileAPI} from "../../components/api/usersAPI";

const ADD_POST = 'ADD-POST';
const UPDATE_POST = "UPDATE_POST";
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_USER_STATUS = 'SET_USER_STATUS';


export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST, payload: text})
export const setUserProfile = (user) => ({type: SET_USER_PROFILE, payload: user})
export const setUserStatus = (status) => ({type: SET_USER_STATUS, data: status})


let initialState =

    {  profileData: {},
        status:'',
        newPostText: '',
        postData: [{id: "1", message: "I'm here!!!", likesCounter: "3"},
            {id: "2", message: "It's my first post", likesCounter: "0"},
            {id: "3", message: "Heyyy", likesCounter: "5"},
            {id: "4", message: "Hi, mine too", likesCounter: "1"}]
    }

let profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: "5",
                message: state.newPostText,
                likesCounter: "0"
            }
            return {...state, postData: [...state.postData, post], newPostText: ''};

        case UPDATE_POST:
            return {
                ...state, //это поверхностное копирование, копирует только "интерфейс"
                // мы делаем копию стейта, чтобы redux видел , что объект изменился
                // иначе страница не перерендерится
                newPostText: action.payload
            };
            //возвращаем измененную копию объекта в качестве нового стейта.
        case SET_USER_PROFILE:
            return {
                ...state,
                profileData: action.payload
            };
        case SET_USER_STATUS:
            return {
                ...state,
                status: action.data
            };

        default:
            return state;
    }
}

export const returnProfileData = (userId) => (dispatch) => {
    profileAPI.getProfileData(userId).then(data => {
        dispatch(setUserProfile(data));
    });
}

export const getProfileStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id).then(res => {
        dispatch(setUserStatus(res.data));
    });
}
export const updateProfileStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(res => {
        dispatch(setUserStatus(res.data));
    })
};

export default profilePageReducer