import {initialState} from '../state';
import {SIGN_IN,LOGOUT,IS_AUTH,NOT_AUTH} from'../action/AuthAction';

//Reducer
export const AuthReducer = (state=initialState,action)=>{
    switch(action.type){
        case SIGN_IN:
            localStorage.setItem('loginstatus',action.payload.isLoggedIn);
            localStorage.setItem('logindata',action.payload.data)
            return{
                ...state,
                token:action.payload.token,
                data:action.payload.data,
                isLoggedIn:action.payload.isLoggedIn
            }
        case LOGOUT:
            localStorage.setItem('loginstatus',false);
            localStorage.setItem('logindata',{})
            return{
                isLoggedIn:false,
                token:null,
                data:{}
            }
        case IS_AUTH:
            return{
                ...state,
                isLoggedIn:action.payload.loginstatus
            }
        default : return state
    }
}