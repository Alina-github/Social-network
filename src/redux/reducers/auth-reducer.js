import {authAPI} from '../../components/api/authAPI';

const AUTHENTIFICATION = 'AUTHENTIFICATION';
const AUTHENTIFICATION_ERROR = 'AUTHENTIFICATION_ERROR';

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    validationError: [],
}
const authorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case(AUTHENTIFICATION):
            return {
                ...state,
                ...action.payload,
            }
        case(AUTHENTIFICATION_ERROR):
            return {
                ...state,
                validationError: action.payload,
            }
        default:
            return state
    }
}

export const setAuthUserData = (authData) => ({type: AUTHENTIFICATION, payload: authData})

export const setAuthError = (error) => ({type: AUTHENTIFICATION_ERROR, payload: error})


export const receiveAuthUserData = () => {
    return (dispatch) => {
        authAPI.getAuth()
            .then(res => {
                if (res.data.resultCode === 0) {
                    let {id, login, email} = res.data.data;
                    dispatch(setAuthUserData({id, login, email, isAuth: true}));
                }
            })
    }
}

export const logIn = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.postLogin(email, password, rememberMe)
            .then(res => {
                    if (res.data.resultCode === 0) {
                        let {id, login, email} = res.data.data;
                        dispatch(receiveAuthUserData({id, login, email, isAuth: true}))
                    } else {
                        let error = res.data.messages;
                        dispatch(setAuthError(error))
                    }
                }
            )
    }
}

export const logOut = () => {
    return (dispatch) => {
        authAPI.deleteLogin()
            .then(res => {
                    if (res.data.resultCode === 0) {
                        let {email, password, rememberMe} = res.data.data;
                        dispatch(setAuthUserData( {email, password, rememberMe,isAuth: false}))
                    }
                }
            )
    }
}
export default authorizationReducer
