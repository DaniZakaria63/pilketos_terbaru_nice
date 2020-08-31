import React, { useState, useEffect } from 'react';
import {Card,Form,Button, Row, Col} from 'react-bootstrap';
import api from '../../api';


class AddSiswaDialog extends React.Component {

    constructor(props){
        super(props)
        this.state={
            nis:'',
            nama:'',
            kelas:''
        };
        this.basicState=this.state;
        this.template=null
        this.init=this.init.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.addSiswa=this.addSiswa.bind(this)
        this.updateSiswa=this.updateSiswa.bind(this)
        this.deleteSiswa=this.deleteSiswa.bind(this)
    }

    handleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        this.setState({
            [name]:value
        })
    }

    addSiswa(e){
        new Promise((resolve)=>{
            api.post('/siswa',this.state).then(response=>{
                if(response.status===200){
                    console.log(response.data.Siswa)
                }
            }).catch(err=>console.log(err))
            resolve(e);
        })
    }

    updateSiswa(e){

    }
    deleteSiswa(e){

    }

    init(){
    this.template = (
        <Card>
            <Card.Header style={{ background: '#fff' }}>
                <Card.Title>{this.props.isAddSelected? "Tambah Siswa" : "Update Siswa"}</Card.Title>
            </Card.Header>
            <Card.Body>
                <Form>
                    <Form.Group controlId="formPlaintextEmail">
                        <Form.Label column >
                            NIS
                        </Form.Label>
                        <Form.Control value={this.nis} name="nis" onChange={this.handleChange} type="number" placeholder="123" name="nis" />
                    </Form.Group>

                    <Form.Group controlId="formPlaintextPassword">
                        <Form.Label column>
                            NAMA LENGKAP
                        </Form.Label>
                        <Form.Control value={this.nama} name="nama" onChange={this.handleChange} type="text" placeholder="NAMA " name="nama" />
                    </Form.Group>

                    <Form.Group controlId="formPlaintextPassword">
                        <Form.Label column>
                            Kelas
                        </Form.Label>
                        <Form.Control value={this.kelas} name="kelas" onChange={this.handleChange} name="kelas" required as="select">
                            {this.props.kelas.map(kelas=>(
                                <option key={kelas._id} value={kelas.nama}>{kelas.nama}</option>
                            ))}
                        </Form.Control>
                    </Form.Group>
                    <Row>
                        <Col sm={4} lg={4}>
                            <Button type="reset" onClick={()=> this.setState(this.basicState)}>RESET</Button>
                        </Col>
                        <Col sm={4} lg={4}>
                            <Button variant="success" onClick={this.props.isAddSelected? this.addSiswa:this.updateSiswa}>{this.props.isAddSelected? "ADD":"UPDATE"}</Button>
                        </Col>
                        <Col sm={4} lg={4}>
                            <Button variant="danger" onClick={this.deleteSiswa}>DELETE</Button>
                        </Col>
                    </Row>
                </Form>
                
            </Card.Body>
        </Card>
    )}
    
    render(){
        this.init()
        return this.template
    }

}

export default AddSiswaDialog;