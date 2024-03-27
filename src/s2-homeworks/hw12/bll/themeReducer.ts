const initState = {
    themeId: 1,
}
export type InitState12Type = {themeId:number}
export type ChangeThemeIdActionType = {type:'SET_THEME_ID', id:number}

export const themeReducer = (state = initState, action: ChangeThemeIdActionType): InitState12Type => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {...state, themeId:action.id}

        default:
            return state
    }
}

export const changeThemeId = (id: number):ChangeThemeIdActionType  => ({ type: 'SET_THEME_ID', id }) // fix any
