import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './Login'
import Home from './Home'
import Auth from './Auth';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            siswa: {},
            loginStatus: false
        };
        this.handleWasLogin = this.handleWasLogin.bind(this);
        this.handleDeleteSession=this.handleDeleteSession.bind(this)
    }

    handleWasLogin(data) {
        this.setState({
            loginStatus: true,
            siswa: data.siswa
        })
    }
    handleDeleteSession(){
        this.setState({
            loginStatus:false,
            siswa:{}
        })
    }

    render() {
        return (
            <Router>
            <Switch>
                <Route
                    exact
                    path={"/login"}
                    render={(props) => (
                        <Login {...props} handleWasLogin={this.handleWasLogin} loginStatus={this.state.loginStatus} />
                    )}>
                </Route>
                
                <Route
                    exact
                    path={"/"}
                    // component={Home}
                    render={props =>{
                        if(Auth.isAuth()){
                            return <Home {...props} siswa={this.state.siswa} handleDeleteSession={this.handleDeleteSession}/>
                        }else{
                            return <Redirect to={
                                {
                                    pathname:"/login",
                                    state: {
                                        from:props.location
                                    }
                                }
                            }/>
                        }
                    }}
                />
               
            </Switch>
            </Router>
        )
    }
} 