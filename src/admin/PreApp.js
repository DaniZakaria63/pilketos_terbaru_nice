import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import Loading from './Auth/Loading';
import Login from './Auth/Login';
import App from './App';
import { isAuth } from '../store/action/AuthAction';
import LoginRequireAuth from './Auth/LoginRequireAuth';

class PreApp extends Component {
    componentDidMount() {
        const that = this; 
        that.props.isAuth()
    }
    render() {
        if (this.props.isLoggedIn === null) {
            return <Loading />
        }

        return (
            <Router basename="/admin">
                <Switch>
                    <Route path="/login" component={Login} />
                    <LoginRequireAuth component={App} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = (state) => ({
    isLoggedIn: !!state.auth.isLoggedIn
})

export default withRouter(connect(mapStateToProps, {
    isAuth
})(PreApp));