import React from 'react';
import { Table, Card, Row, Button } from 'react-bootstrap';

function TableListSiswa(props) {

    const table = (
        <Row style={{ marginTop: 20 }}>
            <Card className={"col-sm-12 col-lg-12  col-xl-12"}>
                <Card.Header style={{ background: '#fff' }}>
                    <Card.Title>Tabel Siswa</Card.Title>
                </Card.Header>
                <Card.Body>
                    <Table bordered hover>
                        <thead>
                            <tr>
                                {/* <th>No</th> */}
                                <th>NIS</th>
                                <th>Nama</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.siswa.map((siswa) => (
                                <tr key={siswa._id}>
                                    <td>{siswa.nis}</td>
                                    <td>{siswa.nama}</td>
                                    <td>{siswa.status ? 'Sudah Memilih' : 'Belum Memilih'}</td>
                                    <td><Button variant="secondary" onClick={() => { props.handleSiswaSelected(siswa._id) }}>Info</Button></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
        </Row>)

    return table
}

export default TableListSiswa;