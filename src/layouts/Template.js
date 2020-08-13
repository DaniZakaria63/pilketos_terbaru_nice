import React from 'react';
import Store from '../store';
import { BrowserRouter as Router } from 'react-router-dom';
import AppClient from '../client/App';

class Template extends React.Component {
    render() {
        return (
            <Store>
                <Router>
                    <AppClient />
                </Router>
            </Store>
        )
    }
}
export default Template;