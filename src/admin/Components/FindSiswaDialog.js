import React, { useEffect, useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap'
import api from '../../api';

function FindSiswaDialog(props) {
    const [kelas, setKelas] = useState({
        kelas: [],
        kelasSelected: null
    })

    useEffect(() => {
        (async ()=>{
            api.get('/kelas').then(response => {
            if (response.status === 200) {
                setKelas({
                    kelas: response.data.Kelas,
                    kelasSelected: 0
                })
            }
            }).catch(err => {
                setKelas({
                    kelas: [],
                    kelasSelected: null
                })
                console.log(err);
            });
        })();
        // api.get('/kelas/')
    }, [kelas.kelasSelected])

    function handleKelasClicked(e) {
        console.log(e.target.value);
        new Promise((resolve) => {
            api.get('/siswa/kelas/' + e.target.value).then(response => {
                props.handleKelasSelected(response.data.siswa)
            }).catch(err => {
                console.log(err)
            });
            resolve();
        })
    }

    const loading = (
        <Card.Text>Still Loading Data</Card.Text>
    )

    const select = (
        <Form className="login-dialog">
            <Form.Group controlId="kelas">
                <Form.Label>Kelas</Form.Label>
                <Form.Control required as="select" onChange={handleKelasClicked}>
                    {kelas.kelas.map(kls => {
                        return <option key={kls._id} value={kls.nama}>{kls.nama}</option>
                    })}
                </Form.Control>
            </Form.Group>
        </Form>
    )

    const template = (
        <Card className={"card-find-siswa"}>
            <Card.Header style={{ background: '#fff' }}>
                <Card.Title>Cari Siswa Secara Spesifik</Card.Title>
            </Card.Header>
            <Card.Body>
                <Card.Text>Cari menurut : </Card.Text>
                {kelas.kelasSelected !== null ? select : loading}
            </Card.Body>
        </Card>
    )

    return template;

}

export default FindSiswaDialog;