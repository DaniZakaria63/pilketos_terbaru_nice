import {initialState} from '../state';

//Reducer
const AuthReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'SIGN_IN':
            return{
                token:null,
                data:action.payload,
                isLoggedIn:!state.isLoggedIn
            }
        case 'LOGOUT':
            return{
                isLoggedIn:false,
                token:null,
                data:{}
            }
        default : return state.isLoggedIn
    }
}

export default AuthReducer;