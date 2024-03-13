const initState:InitState10type = {isLoading: false,}

export const loadingReducer = (state:InitState10type = initState, action: Action10Type): InitState10type => { // fix any
    switch (action.type) {
        // пишет студент  // need to fix
        case "CHANGE_LOADING":
            return {...state, isLoading:action.isLoading}

        default:
            return state
    }
}

type LoadingActionType = { type: 'CHANGE_LOADING', isLoading: boolean }
export type InitState10type = {isLoading: boolean}
export type Action10Type = LoadingActionType
export const loadingAC = (isLoading: boolean): LoadingActionType => ({type: 'CHANGE_LOADING', isLoading,})
