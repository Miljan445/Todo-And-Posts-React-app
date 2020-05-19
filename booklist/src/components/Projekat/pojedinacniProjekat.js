import React from 'react'
import {connect} from 'react-redux'
import IzbrisiProjekat from "../../actions/projektiAction/izbrisiProjekatAction"

function pojedinacniProjekat(props) {
    const handleClick = (id)=>{
        props.izbrisiProjekat(id)
        props.history.push("/projekat");
        }
    const projekat = props.projekat.map((item)=>{
        return(
            <div key = {item.id} className="projekatKartica in">
            <h2>{item.title}</h2>
            <hr></hr>
            <p>{item.body}</p>
            <button onClick={()=>{handleClick(item.id)}}>Izbrisi</button>
     </div>
        )
    })
    return (
        <div className="projekatPage">
            <h2>Projekat stanica - Dodatne informacije</h2>
            {projekat}
         </div>
    )
}




//dodavanje u props state i metode
const mapState = (state,propsPojedinacnogProjekta)=>{
    const id = propsPojedinacnogProjekta.match.params.id;
    const nasProjekat = state.projekat.projekat.filter((item)=>{
        if(item.id == id){
            return true
        }
    })
    
    return{
        projekat:nasProjekat
    }
}
const mapDispatch = (dispatch)=>{
    return{
        izbrisiProjekat:(id)=>{
            dispatch(IzbrisiProjekat(id));
        }
    }
}
export default connect(mapState,mapDispatch)(pojedinacniProjekat);