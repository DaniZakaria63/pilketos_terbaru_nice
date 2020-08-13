import React from 'react';
import { Form, Button, Card, Dropdown } from 'react-bootstrap';
import API from '../api';
import { Context } from '../store';

class LoginDialog extends React.Component {

    // const [siswa,setSiswa]=useContext(Context);

    constructor(props) {
        super(props);
        this.state = {
            siswa: [],
            kelas: [],
            kelasClicked: '',
            siswaClicked: '',
            nis: '',
            isKelasClicked: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleKelasClicked = this.handleKelasClicked.bind(this);
    }

    async componentDidMount() {
        API.get('/kelas').then(response => {
            // console.log(response.data.Kelas)
            this.setState({
                kelas: response.data.Kelas
            })
        }).catch(err => {
            console.log(err)
        })
    }

    handleKelasClicked(event) {
        // console.log(event.target.value)
        this.setState({
            kelasClicked: event.target.value
        });
        console.log(event.target.value)
        API.get('/siswa/kelas/' + event.target.value).then(response => {
            this.setState({
                siswa: response.data.siswa,
                isKelasClicked: true
            });
            // console.log(response.data.siswa)
        }).catch(err => {
            console.log(err)
        })
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

        // console.log(event.target.kelas.value)

        API.post("/pelaksanaan/login", {
            nama: event.target.nama.value,
            nis: event.target.nis.value
        })
        .then((response) => {
            if (response.data.siswa != null) {
                this.props.handleResponseLogin(response.data);
            }
        }).catch((err) => {
            console.log(err)
        });

        this.setState({
            kelasClicked: '',
            siswaClicked: ''
        })
    }

    render() {
        return (
            <>
                <Card className="col-8 col-sm-6 col-xl-4 mx-auto login-card">
                    <Card.Body>
                        <Card.Title>PILKETOS {new Date().getFullYear()}</Card.Title>
                        <Form onSubmit={this.handleSubmit} className=" login-dialog">
                            <Form.Group controlId="kelas">
                                <Form.Label>Kelas</Form.Label>
                                <Form.Control required as="select" value={this.state.kelasClicked} onChange={this.handleKelasClicked} onClick={this.handleKelasClicked}>
                                    {this.state.kelas.map(kls => {
                                        return <option key={kls._id}>{kls.nama}</option>
                                    })}
                                </Form.Control>
                            </Form.Group>
                            {
                                this.state.isKelasClicked ?
                                    <Form.Group controlId="nama">
                                        <Form.Label>Nama Lengkap</Form.Label>
                                        <Form.Control as="select" required name="siswaClicked" value={this.state.siswaClicked} onChange={this.handleChange}>
                                            {this.state.siswa.map(sw => {
                                                return <option key={sw._id}>{sw.nama}</option>
                                            })}
                                        </Form.Control>
                                    </Form.Group>
                                    : null
                            }

                            <Form.Group controlId="nis">
                                <Form.Label>Nomor NIS</Form.Label>
                                <Form.Control name="nis" type="number" placeholder="NIS" value={this.state.nis} onChange={this.handleChange} />
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

export default LoginDialog;