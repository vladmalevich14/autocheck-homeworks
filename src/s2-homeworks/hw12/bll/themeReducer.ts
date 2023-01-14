export type initStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

type changeThemeIdType = {
    type: string
    id: number
}

export const themeReducer = (state:initStateType = initState, action: changeThemeIdType): initStateType => { // fix any
    switch (action.type) {
        // дописать
        case 'SET_THEME_ID': {
            return {...state, themeId: action.id}
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number): changeThemeIdType => ({ type: 'SET_THEME_ID', id }) // fix any
