export const login=(data)=>{
    return {
        type:'SIGN_IN',
        payload:data
    }
}

export const logout=()=>{
    return {
        type:'LOGOUT'
    }
}