import React from 'react'
import {connect} from "react-redux";

function Notifications(props) {
    const projekat = props.projekat;
    const poslednjiProjekat = projekat[projekat.length-1];
    if(props.projekat.length > 0){
        return(
            <div className="notifications">
            <h3>Projekat dodat : {poslednjiProjekat.naslov}</h3>
            <h3>Autor : {poslednjiProjekat.autor}</h3>
        </div>
        )
    }
    else{
        return null
    }
}





const mapState = (state)=>{
    return{
        projekat:state.projekat.projekat
    }
}
export default connect(mapState)(Notifications);