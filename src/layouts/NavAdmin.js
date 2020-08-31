import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Nav } from 'react-bootstrap';
import { connect } from 'react-redux'


const NavAdmin = (props) => (
    <Nav>
        <ul className="nav-admin">
            <Link to="/"><li>Home</li></Link>
            <Link to="/master"><li>Master</li></Link>
            <Link to="/master-siswa"><li>Siswa</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Button className="btn-logout" variant="primary" onClick={props.logout}>Logout</Button>
        </ul>
    </Nav>
)
export default connect(null, (dispatch) => ({
    logout: () => dispatch({ type: 'LOGOUT' })
}))(NavAdmin);