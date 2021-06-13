const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_MESSAGE = "ADD_MESSAGE"

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, payload: text})

const dialogPageReducer = (state, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.payload;
            return state;
        case ADD_MESSAGE:

            let message = state.newMessageBody
            let messagesData = {
                message: message,
                id: '54674'
            }
            state.messagesData.push(messagesData);
            state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export default dialogPageReducer