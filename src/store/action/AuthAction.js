export const SIGN_IN = "SIGN_IN", LOGOUT = "LOGOUT", IS_AUTH = "IS_AUTH",NOT_AUTH="NOT_AUTH";

export const login = ({...props}) => {
    return {
        type: SIGN_IN,
        payload: { ...props }
    }
}

export const logout = () => {
    // localStorage.removeItem('loginstatus');
    return {
        type: LOGOUT
    }
}

export const isAuth = () => {
    return {
        type: IS_AUTH,
        payload: {
            loginstatus:JSON.parse(localStorage.getItem('loginstatus'))
        }
    }
}