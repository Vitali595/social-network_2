export type FriendType = {
    id: number
    name: string
}

export type InitialStateType = typeof initialState

let initialState = {
    friends: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Valera'}
    ] as Array<FriendType>
}

const sidebarReducer = (state: InitialStateType = initialState): InitialStateType => {

    return {...state}
}

export default sidebarReducer