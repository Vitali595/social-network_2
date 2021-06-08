import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPostActionCreator, setStatus, setUserProfile} from "./profile-reducer";
import dialogsReducer, {sendMessageCreator} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from "redux-form";

export type AppStateType = ReturnType<typeof rootReducer>

export type ActionsTypes = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unfollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleFollowingProgress>
    | ReturnType<typeof setStatus>

const rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store

//@ts-ignore
window.store = store