import React from 'react';
import {Card,Form,Button} from 'react-bootstrap';
import API from '../api';

class AdminLoginDialog extends React.Component {
    constructor(props){
        super(props)
        this.state={
            username:'',
            password:'',
            data:{}
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    handleSubmit(event){
        event.preventDefault();
        // console.log(this.state.username)
        API.post('/pelaksanaan/admin',{
            username:this.state.username,
            password:this.state.password
        }).then(response=>{
            // console.log(response.data);
            if(response.data.admin===null){
                alert("Tidak Ditemukan")
            }else{
                this.props.handleWasLogin(response.data.admin);
            }
        }).catch(err=>{
            console.log(err);
        })
    }
    handleChange(event){
        const name=event.target.name;
        const value=event.target.value;
        event.preventDefault();
        this.setState({
            [name]:value
        })
    }
    render() {
        return (
            <>
                <Card className="col-8 col-sm-6 col-xl-4 mx-auto login-card-admin">
                    <Card.Body>
                        <Card.Title>LOGIN ADMIN PILKETOS</Card.Title>
                        <Form onSubmit={this.handleSubmit} className=" login-dialog">
                            <Form.Group controlId="username">   
                                <Form.Label>Username</Form.Label>
                                <Form.Control required name="username" type="text" placeholder="Username" value={this.state.username} onChange={this.handleChange}/>
                            </Form.Group>
                            <Form.Group controlId="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required name="password" type="password" placeholder="Password" value={this.state.password} onChange={this.handleChange} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                        </Button>
                        </Form>
                    </Card.Body>
                </Card>
            </>
        )
    }
}
export default AdminLoginDialog;