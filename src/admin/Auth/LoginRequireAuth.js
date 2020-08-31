import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isAuth, IS_AUTH } from '../../store/action/AuthAction';

const LoginRequireAuth = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => ((rest.isLoggedIn) ? (<Component {...props} />) : (<Redirect to={{
        pathname: '/login',
        state: {
            from: props.location
        }
    }} /> 
    ))} />
);

const  mapStateToProps = (state) => ({
    isLoggedIn: state.auth.isLoggedIn
})

export default connect(
    mapStateToProps, { isAuth }
)(LoginRequireAuth);

