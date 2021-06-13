import {ActionsTypes} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";

let initialState = {
    initialized: false
}

export type InitialStateType = typeof initialState

const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED_SUCCESS":
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: "INITIALIZED_SUCCESS"} as const);

export const initializeApp = () => (dispatch: any) => {
    let promise = dispatch(getAuthUserData())
        Promise.all([promise])
            .then(() => {
                dispatch(initializedSuccess())
            })
}

export default appReducer