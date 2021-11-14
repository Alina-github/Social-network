import {usersAPI} from "../../components/api/usersAPI";

let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_PAGES = "SET_PAGES";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGES";
let TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";
let FOLLOWING_PROCESS = "FOLLOWING_PROCESS";

let initialState = {
    users:[],
    pageSize: 10,
    totalUsersCount: 10,
    currentPage: 1330,
    isFetching: false,
    following: []
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {
                                ...u, followed: true
                            }
                        } else {
                            return {...u}
                        }
                    }
                )
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                        if (u.id === action.id) {
                            return {...u, followed: false}
                        } else {
                            return {...u}
                        }

                    }
                )
            };
        case SET_USERS:
            return {...state, users: [...action.users]}; // контактерируем старый массив и новый.
        case SET_PAGES:
            return {...state, totalUsersCount: action.totalUsersCount};
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};
        case TOOGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case FOLLOWING_PROCESS:
            return action.isFetching ?
                    {...state, following: [...state.following, action.id]}
                :   {...state, following: state.following.filter(id => id !== action.id)}

        default:
            return state;
    }
}

export default usersPageReducer;

export const follow = (userId) => {
    return {type: FOLLOW, id: userId}
};
export const unfollow = (userId) => {
    return {type: UNFOLLOW, id: userId}
};
export const setUsers = (users) => {
    return {type: SET_USERS, users: users}
};
export const setPagesCount = (totalUsersCount) => {
    return {type: SET_PAGES, totalUsersCount}
};
export const setCurrentPage = (page) => {
    return {type: SET_CURRENT_PAGE, currentPage: page}
};
export const setIsFetching = (isFetching) => {
    return {type: TOOGLE_IS_FETCHING, isFetching: isFetching}
};

export const toggleFollowingProcess = (isFetching, id) => {
    return {type: FOLLOWING_PROCESS, isFetching, id}
};

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setPagesCount(data.totalCount / 200));
            })
        }
}
