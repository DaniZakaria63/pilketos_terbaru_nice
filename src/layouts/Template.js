import React from 'react';
import Store from '../store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppClient from '../client/App';
import AppServer from '../admin/App';
import Switch from 'react-bootstrap/esm/Switch';

class Template extends React.Component {
    render() {
        return (
            <Store>
                <Router>
                    <Switch>
                        <Route path={'/'}>
                            <AppClient />
                        </Route>
                        <Route path='/admin'>
                            <AppServer/>
                        </Route>
                    </Switch>
                </Router>
            </Store>
        )
    }
}
export default Template;