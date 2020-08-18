import React from 'react';
import LoginDialog from '../components/AdminLoginDialog';
import Auth from './Auth';

class Login extends React.Component{
    constructor(props){
        super(props)
        this.handleWasLogin=this.handleWasLogin.bind(this)
    }
    handleWasLogin(data){
        this.props.hasLogin(data)
        Auth.login(data,()=>{
            this.props.history.push('/admin')
        })
    }
    render(){
        return(
            <>
            <LoginDialog handleWasLogin={this.handleWasLogin}/>
            </>
        )
    }
}

export default Login;