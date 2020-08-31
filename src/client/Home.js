import React from 'react';
import {Alert,Card} from 'react-bootstrap';

import API from '../api';
import Auth from './Auth';
import PaslonDialog from '../components/PaslonDialog';
import PaslonNavigation from '../components/PaslonNavigation';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            calon:[]
        }
        this.handleWasPilih=this.handleWasPilih.bind(this)
        this.componentDidMount=this.componentDidMount.bind(this)
    }
    async componentDidMount(){
        API.get('/calon').then(response=>{
            this.setState({
                calon:response.data.calon
            })
            // console.log(this.state.calon)
        }).catch(err=>{
            console.log(err)
        })
    }
    handleWasPilih(data){
        this.props.handleDeleteSession();
        this.setState({
            calon:[]
        })
        Auth.logout(()=>{
            this.props.history.push('/login');
        })
    }
    render() {return (
        <>
            <PaslonNavigation nama="PILKETOS"/>
            <br/>
            <Alert variant="primary" className="alert-home">
               Selamat Datang, {this.props.siswa.nama}
            </Alert>
            <br/>
            <Card className="col-10 col-sm-7 col-lg-5 col-xl-5 mx-auto" style={{overflow:"hidden"}}>
                <Card.Header className="mx-auto">Silahkan Pilih Paslon Anda
                </Card.Header>
                <Card.Body>
                    {this.state.calon.map(calon=>{
                        return <PaslonDialog key={calon._id} calon={calon} siswa={this.props.siswa} handleWasPilih={this.handleWasPilih}/>
                    })}
                </Card.Body>
            </Card>
        </>
        )}
}

export default Home;