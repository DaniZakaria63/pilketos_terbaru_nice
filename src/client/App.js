import React from 'react';
import { BrowserRouter as Switch, Route, Redirect } from 'react-router-dom';
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
    }

    handleWasLogin(data) {
        this.setState({
            loginStatus: true,
            siswa: data.siswa
        })
    }

    render() {
        return (
            <Switch>
                <h1>This is Header</h1>

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
                            return <Home {...props} siswa={this.state.siswa}/>
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
        )
    }
} 
{/* <Route
                    path={"*"}
                    component={() => "404 NOT FOUND"}
                /> */}