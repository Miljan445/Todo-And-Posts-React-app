import React, { Component } from 'react'
import {connect} from "react-redux"
import {Link} from "react-router-dom"
import FetchProjects from '../../actions/projektiAction/fetchActions'

export class ProjektiSvi extends Component {
    componentDidMount(){
        this.props.sendData();
    }
    render() {
        const projekti = this.props.projekat.map((item)=>{
            return(
                <div key = {item.id} className="projekatKartica in">
                <h2>{item.title}</h2>
                <hr></hr>
                <p>{item.body}</p>
                <Link to={"/pojedinacniProjekat/"+item.id}><button>Pogledaj vise</button></Link>
            </div>
            )
        })
        return (
            <React.Fragment>
            {projekti}
            </React.Fragment>
        )
    }
}

const fetchData = (dispacth)=>{
    return{
        sendData:()=>{
            dispacth(FetchProjects())
        }
    }
}
const mapProps = (state) =>{
    return{
        projekat:state.projekat.projekat
    }
}
export default connect(mapProps,fetchData)(ProjektiSvi)
