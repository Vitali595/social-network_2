import {ActionsTypes} from "./redux-store";

export type InitialStateType = {
    userId: null | number
    email: null | string
    login: null | string
    isAuth: boolean
}

export const SET_USER_DATA = "SET_USER_DATA"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string) => (
    {type: SET_USER_DATA, data: {userId, email, login}}
) as const

export default authReducer