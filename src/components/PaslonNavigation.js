import React from 'react';
import {Navbar} from 'react-bootstrap';

class PaslonNavigation extends React.Component{
    constructor(props){
        super(props);

    }
    render(){
        return(
            <Navbar bg="light">
                <Navbar.Brand>{this.props.nama}</Navbar.Brand>
            </Navbar>
        )
    }
}

export default PaslonNavigation;