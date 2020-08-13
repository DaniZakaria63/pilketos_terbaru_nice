import React, { Component } from 'react'
import API from '../api'

class PaslonDialog extends Component{
    constructor(props){
        super(props);
        this.state=props.calon;
        this.handlePilihan=this.handlePilihan.bind(this)
    }
    handlePilihan(){
        API.put('/pelaksanaan/vote/'+this.props.siswa._id+'/'+this.state._id,{
            _id_calon:this.state._id,
            _id_siswa:this.props.siswa
        }).then(response=>{
            this.props.handleWasPilih(response.data);
        }).catch(err=>{
            console.log(err)
        })
    }
    render(){
        return (
            <>
                <h1>Ketua : {this.state.ketua}</h1>
                <h1>Wakil : {this.state.wakil}</h1>
                <button onClick={this.handlePilihan}>PILIH</button>
            </>
        )
    }
}

export default PaslonDialog;