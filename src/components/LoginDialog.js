import React from 'react';
import {Redirect} from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import API from '../api';
import { Context } from '../store';

class LoginDialog extends React.Component {

    // const [siswa,setSiswa]=useContext(Context);
    
    constructor(props){
        super(props);
        this.state={ username: '', nis: '' }
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleChange(event) {
        event.preventDefault();

        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
        // alert("Username : "+this.state.username+" ; NIS : "+this.state.nis)

        API.post("/pelaksanaan/login", {
            nama: this.state.username,
            nis: this.state.nis
        })
        .then((response) => {
            if (response.data.siswa != null) {
                this.props.handleResponseLogin(response.data);
            }
        }).catch((err) => {
            console.log(err)
        });
    }

    render() {
        return (
            <>
                <p>
                    NAMA {this.state.username}
                </p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>SANDI ABOGOBOGA</Form.Label>
                        <Form.Control name="nis" type="number" placeholder="NIS" value={this.state.nis} onChange={this.handleChange} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                </Button>
                </Form>
            </>
        )
    }
}

export default LoginDialog;