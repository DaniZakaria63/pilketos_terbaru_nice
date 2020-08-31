import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import LoginDialog from '../Components/AdminLoginDialog';
import { SIGN_IN, IS_AUTH } from '../../store/action/AuthAction';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    if (props.isLoggedIn) {
        const { from } = props.location.state || { from: { pathname: '/' } }
        return <Redirect to={from} />
    }
    return (
        <>
            {/* <Button onClick={() => (props.handleLogin())}> Click Me TO Login</Button> */}
            <LoginDialog />
        </>
    )
}

const mapStateToProps = (state) => ({
    isLoggedIn: !!state.auth.isLoggedIn
})
const mapDispatchToProps = (dispatch) => ({
    handleLogin: () => dispatch({
        type: SIGN_IN,
        payload: {
            token: 'AUTHENTICATED',
            data: {},
            isLoggedIn: true
        }
    })
})
export default connect(mapStateToProps, mapDispatchToProps)(Login);