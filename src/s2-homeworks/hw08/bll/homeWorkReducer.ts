import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
          let sortedState:UserType[] =[...state]
            sortedState.sort((a:UserType, b:UserType)=> {
                if(action.payload === "up") {
                    return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                } else {
                    return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                }
            })

            return sortedState // need to fix
        }
        case 'check': {
            return state.filter((user: UserType) => user.age >= action.payload)// need to fix
        }
        default:
            return state
    }
}
