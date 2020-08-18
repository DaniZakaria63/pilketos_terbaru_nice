import React from 'react';
import { BrowserRouter as Router, Switch, Route ,Redirect} from 'react-router-dom';
import Auth from './Auth';
import Login from './Login';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state={
            data:{}
        }
        this.hasLogin=this.hasLogin.bind(this)
    }
    hasLogin(data){
        this.setState({
            data:data
        })
    }
    render() {
        return (
            <Router>
                <Switch>
                    <Route
                        exact
                        path={"/admin/login"}
                        render={(props) => (
                            <Login {...props} hasLogin={this.hasLogin}/>
                        )}>
                    </Route>

                    <Route
                        exact
                        path={"/admin"}
                        // component={Home}
                        render={props => {
                            if (Auth.isAuth()) {
                                return <h1>ADMIN</h1>
                            } else {
                                return <Redirect to={
                                    {
                                        pathname: "/admin/login",
                                        state: {
                                            from: props.location
                                        }
                                    }
                                } />
                            }
                        }}
                    />
                    <Route path="*" render={(props) => (
                        <h1 className="text-center mx-auto">404 NOT FOUND</h1>
                    )} />

                </Switch>
            </Router>
        )
    }
}

export default App;