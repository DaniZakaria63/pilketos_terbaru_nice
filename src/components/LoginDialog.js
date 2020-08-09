import React from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import API from '../api';

class LoginDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = { username: '', nis: '' };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault();
        // alert("Username : "+this.state.username+" ; NIS : "+this.state.nis)
        // API.post("/pelaksanaan/login", {
        //     nama: this.state.username,
        //     nis: this.state.nis
        // })
        // .then((response) => {
        //     console.log(response.data);
        // }).catch((err) => {
        //     console.log(err)
        // });
        axios.post("http://localhost:3001/api/pelaksanaan/login",{
            nama: this.state.username,
            nis: this.state.nis
        }).then((response)=>{
            console.log(response.data)
        }).catch((err)=>{
            console.log(err)
        })
    }
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control name="username" type="text" placeholder="Username" value={this.state.value} onChange={this.handleChange} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>SANDI ABOGOBOGA</Form.Label>
                    <Form.Control name="nis" type="number" placeholder="NIS" value={this.state.nis} onChange={this.handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        )
    }
}

export default LoginDialog;