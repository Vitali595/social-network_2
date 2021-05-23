import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: {
        facebook: string
        website: null | string
        vk: string
        twitter: string
        instagram: string
        youtube: null | string
        github: string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}

export type InitialStateType = typeof initialState

export const ADD_POST = "ADD_POST"
export const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
export const SET_USER_PROFILE = "SET_USER_PROFILE"

let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ] as Array<PostType>,
    newPostText: "it",
    profile: {} as ProfileType
}

const profileReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case ADD_POST:
            let newPost: PostType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {...state, posts: [...state.posts, newPost], newPostText: ""}
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText
            return {...state, newPostText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }
}


export const addPostActionCreator = () => ({type: ADD_POST}) as const
export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const
export const updateNewPostTextActionCreator = (text: string) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
}) as const

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data))
    })
}

export default profileReducer