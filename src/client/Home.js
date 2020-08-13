import React from 'react';
import PaslonDialog from '../components/PaslonDialog';
import API from '../api'
import Auth from './Auth'

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
            <h1>THIS IS SPARTA YO</h1> 
            {this.state.calon.map(calon=>{
                return <PaslonDialog key={calon._id} calon={calon} siswa={this.props.siswa} handleWasPilih={this.handleWasPilih}/>
            })}
        </>
        )}
}

export default Home;