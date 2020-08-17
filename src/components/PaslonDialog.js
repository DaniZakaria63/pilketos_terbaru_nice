import React, { Component } from 'react'
import API from '../api'
import {Alert,Card,ListGroupItem,ListGroup,Button} from 'react-bootstrap'
class PaslonDialog extends Component {
    constructor(props) {
        super(props);
        this.state =
        {
            calon: props.calon,
            isStatus201: false
        };
        this.handlePilihan = this.handlePilihan.bind(this)
    }
    handlePilihan() {
        API.put('/pelaksanaan/vote/' + this.props.siswa._id + '/' + this.state.calon._id, {
            _id_calon: this.state.calon._id,
            _id_siswa: this.props.siswa
        }).then(response => {
            // console.log(response.data.message=='false')
            if (response.data.message === 'false') {
                this.setState({
                    isStatus201: true
                })
            } else {
                alert("Terima Kasih Atas Partisipasimu!")
                this.props.handleWasPilih(response.data);
            }
        }).catch(err => {
            console.log(err)
        })
    }
    render() {
        return (
            <>
                {
                    (this.state.isStatus201) ?
                        <>
                            <Alert variant="danger"className="alert-home mx-auto">Kamu Sudah Memilih</Alert>
                            <br />
                            <Button variant="secondary" onClick={this.props.handleWasPilih}>Keluar</Button>
                        </>
                        :
                        <Card className="col-11 col-sm-11 col-lg-9 col-xl-8 mx-auto">
                            <Card.Img variant="top" src={"http://localhost:3001/images/"+ this.state.calon.gambar} />
                            <Card.Body>
                                <Card.Title>{ this.state.calon.ketua} dan {this.state.calon.wakil}</Card.Title>
                                <Card.Text>
                                    {this.state.calon.visi}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>{this.state.calon.misi_1}</ListGroupItem>
                                <ListGroupItem>{this.state.calon.misi_2}</ListGroupItem>
                                <ListGroupItem>{this.state.calon.misi_3}</ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Button className="col-6 mx-auto" variant="primary" type="submit" onClick={this.handlePilihan}>
                                COBLOS
                                </Button>
                            </Card.Body>
                        </Card>
                }
            </>
        )
    }
}

export default PaslonDialog;