import React, { Component } from 'react'
import {connect} from "react-redux";
import DodajProjekat from '../../actions/projektiAction/dodajProjekat';

export class ProjekatForm extends Component {

    handleSubmit = (e)=>{
        e.preventDefault();
        if(document.getElementById("naslov").value ==="" || document.getElementById("sadrzaj").value==="" ||document.getElementById("autor").value===""){
            alert("Molimo vas popunite sva polja!")
        }
        else{
            let projekat = {
                naslov:document.getElementById("naslov").value,
                opis:document.getElementById("sadrzaj").value,
                autor:document.getElementById("autor").value,
                id:Math.random()*10
               }
               this.props.dodajProjekat(projekat);
               this.props.history.push("/projekat");
        }
    }
    render() {
        return (
            <div className="omotac">
                <h2>Napravi projekat</h2>
            <div className="form in">
            <form onSubmit={this.handleSubmit}>
                <input type="text" id="autor" placeholder="autor..." />
                <input type="text" id="naslov" placeholder="naslov..." />
                <textarea id="sadrzaj" placeholder="opis..." />
                <button type="submit">Submit</button>
            </form>
        </div>
            </div>
        )
    }
}



const mapDispatch = (dispatch)=>{
    return{
        dodajProjekat: (projekat)=>{
            dispatch(DodajProjekat(projekat));
        }
    }
}

const mapProps = (state) =>{
    return{
        projekat:state.projekat.projekat
    }
}
export default connect(mapProps,mapDispatch)(ProjekatForm);
