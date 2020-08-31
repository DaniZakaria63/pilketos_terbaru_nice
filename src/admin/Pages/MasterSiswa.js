import React, { Component } from 'react';
import { Card, Form, Button, Table, Container, Row, Col } from 'react-bootstrap';
import FindSiswaDialog from '../Components/FindSiswaDialog';
import api from '../../api';
import TableListSiswa from '../Components/TableListSiswa';
import AddSiswaDialog from '../Components/AddSiswaDialog';

class MasterSiswa extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isAddSelected: true,
            isTableSelected: false,
            initSiswa: {
                id: '',
                nama: '',
                nis: '',
                kelas: '',
            },
            cacheSiswa:{},
            kelas: [],
            siswa: [],
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleSiswaChange = this.handleSiswaChange.bind(this)
        this.handleSiswaSelected = this.handleSiswaSelected.bind(this)
        this.handleKelasClicked = this.handleKelasClicked.bind(this)
        this.handleKelasSelected = this.handleKelasSelected.bind(this)
    }
    componentWillMount() {
        api.get('/kelas/').then(response => {
            (response.status == 200
                ? (this.setState({
                    kelas: response.data.Kelas
                }))
                : (console.log(response.data))
            )
        })
    }

    handleSubmit(event) {
        let name = event.target.name;
        let value = event.target.name.value;
        this.setState({
            [name]: value
        })
    }
    handleKelasClicked() {
        console.log("MANTAP")
    }
    handleKelasSelected(siswa) {
        this.setState({
            ...this.state,
            isTableSelected: true,
            siswa: siswa
        });
    }
    handleSiswaSelected(siswa) {
        // console.log("id siswa "+siswa)
        new Promise((resolve) => {
            resolve();
            api.get('/siswa/' + siswa).then(response => {
                if (response.status === 200) {
                    this.setState({
                        ...this.state,
                        isAddSelected:false,
                        cacheSiswa: response.data.Siswa
                    });
                }
            }).catch(err => console.log(err))
        })
    }
    handleSiswaChange(siswa) {

    }
    render() {
        return (
            <Container>
                <Row>
                    <Col sm={7} md={6} xl={8}>
                        <FindSiswaDialog {...this.props} handleKelasSelected={this.handleKelasSelected} />
                        {this.state.isTableSelected ? <TableListSiswa {...this.props} siswa={this.state.siswa} handleSiswaSelected={this.handleSiswaSelected} /> : null}
                    </Col>

                    <Col sm={5} md={6} xl={4}>
                        <AddSiswaDialog {...this.props} kelas={this.state.kelas} siswa={this.state.cacheSiswa} isAddSelected={this.state.isAddSelected } />
                    </Col>
                </Row>

            </Container>
        )
    }
}

export default (MasterSiswa);