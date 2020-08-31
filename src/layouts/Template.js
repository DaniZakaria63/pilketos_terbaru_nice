import React from 'react';
// import Store from '../store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppClient from '../client/App';
import AppServer from '../admin/App';


const Template = () => {
    return (
        <Router>
            <Route path={'/'}>
                <AppClient />
            </Route>
            <Route path='/admin'>
                <AppServer />
            </Route>
        </Router>
    )

}
export default Template;