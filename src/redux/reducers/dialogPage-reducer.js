const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const ADD_MESSAGE = "ADD_MESSAGE"

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_BODY, payload: text})

let initialState =

    {         dialogsData: [{name: "Dimych", id: "1"},
            {name: "Anna", id: "2"},
            {name: "Nick", id: "3"},
            {name: "Lyon", id: "4"}],

        messagesData: [{message: "Hi", id: "1"},
            {message: "How are you?", id: "2"},
            {message: "Yo", id: "3"},
            {message: "I'm good", id: "4"}]
    }

const dialogPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            return {...state, newMessageBody: action.payload} //глубокую копию конкретного объекта
            //можно сделать добавив, в конце копии. Последнее св-во перезатирает его же внутри shallow копии
        }
        case ADD_MESSAGE:
            let message = state.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {message: message, id: '54674'}],
                newMessageBody: ''
            }
        default:
            return state;
    }
}

export default dialogPageReducer