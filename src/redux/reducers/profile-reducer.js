const ADD_POST = 'ADD-POST';
const UPDATE_POST = "UPDATE-POST";

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_POST, payload: text})

let profilePageReducer = (state, action) => {

    switch(action.type) {
        case ADD_POST:

        let post = {
            id: "5",
            message: state.newPostText,
            likesCounter: "0"
        }
        state.newPostText = '';
        state.postData.push(post);
        return state;

        case UPDATE_POST:
        state.newPostText = action.payload;
    return state
        default: return state
}
}

export default profilePageReducer