import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from 'react-router-dom';
import NavAdmin from '../layouts/NavAdmin';
import Home from './Pages/Home';
import Master from './Pages/Master';
import About from './Pages/About';
import MasterSiswa from './Pages/MasterSiswa';
import {connect} from 'react-redux';

const App = () => (
    <Router basename="/admin">
        <NavAdmin />
        <Switch>
            <Route exact path="/master" component={Master}/>
            <Route exact path="/master-siswa" component={MasterSiswa}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/" component={Home}/>
            {/* <Redirect exact from="/" to="/about" /> */}
        </Switch>
    </Router>
)

const mapStateToProps=(state)=>({
    isLoggedIn:!!!state.isLoggedIn
})

export default connect(mapStateToProps)(App);