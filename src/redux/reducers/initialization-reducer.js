import {receiveAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESSED = 'INITIALIZED_SUCCESSED';



let initialState = {
    initialized: false,
}
const initializationReducer = (state = initialState, action) => {
    switch (action.type) {
        case(INITIALIZED_SUCCESSED):
            return {
                ...state,
                initialized: true,
            }
        default:
            return state
    }
}


export const initialization = () => ({type: INITIALIZED_SUCCESSED})

export const initializeApp = () => (dispatch) =>  {
    const dispatchReceivedAuthData = dispatch(receiveAuthUserData()); // will return promise
    Promise.all([dispatchReceivedAuthData]).then(
        () => dispatch(initialization())
    )
}

export default initializationReducer

