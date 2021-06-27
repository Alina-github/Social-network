const ADD_POST = 'ADD-POST';
const UPDATE_POST = "UPDATE_POST";

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST, payload: text})

let initialState =
    {
        newPostText: 'BBL data',
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
        default:
            return state;
    }
}

export default profilePageReducer