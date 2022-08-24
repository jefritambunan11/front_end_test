import { createContext, useReducer } from "react"

export const Store = createContext()

const initialState = {
    _user_info_: localStorage.getItem('_user_info_') ? JSON.parse(localStorage.getItem('_user_info_')) : "" ,    
}

function reducer(state, action) {

    switch(action.type) { 

        case 'USER_SIGNIN':
            return {
                ...state,
                _user_info_: action.payload,
            }

        case 'USER_SIGNOUT':
            return {
                ...state,
                _user_info_: ""                
            }


        default:
            return state
    }
}


export function StoreProvider(props) {     
    const [state, dispatch] = useReducer(reducer, initialState)
    const value = {state, dispatch}
    
    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}
