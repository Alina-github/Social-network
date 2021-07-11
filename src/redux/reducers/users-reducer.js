let FOLLOW = "FOLLOW";
let UNFOLLOW = "UNFOLLOW";
let SET_USERS = "SET_USERS";
let SET_PAGES = "SET_PAGES";
let SET_CURRENT_PAGE = "SET_CURRENT_PAGES";
let TOOGLE_IS_FETCHING = "TOOGLE_IS_FETCHING";

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 40,
    currentPage: 1,
    isFetching: false
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




