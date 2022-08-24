import { useState, useContext, useEffect  } from 'react'
import { Navigate } from 'react-router-dom'
import {Store} from './Store'

let PrivateRouteCheck = (props) => { 
    let isAuth = false  
    let { state } = useContext(Store) 
    let { _user_info_ } = state     

    if (_user_info_) { 
        if (_user_info_.data.access_token) { 
            isAuth = true 
        }
    } else {
        isAuth = false  
    }    

    if (!isAuth) { 
        return <Navigate to="/login" /> 
    } 

    if (props.original_url == "main") { 
        return <Navigate to="/project" /> 
    } 
    
    return props.children 
}

export default PrivateRouteCheck