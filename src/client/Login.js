import React from 'react';
import LoginComponent from '../components/LoginDialog'
import auth from './Auth';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleResponseLogin=this.handleResponseLogin.bind(this);
    }
    handleResponseLogin(data){

        this.props.handleWasLogin(data);
        auth.login(()=>{
            this.props.history.push('/');
        });
    }
    render(){
        return(
            <LoginComponent handleResponseLogin={this.handleResponseLogin}/>
        )
    }
}
export default Login;