import React, { Component } from 'react'
import ProjektiSvi from './ProjektiSvi'

export class ProjekatStranica extends Component {
    render() {
        return (
            <div className="projekatPage">
                <h2>Projekat stanica</h2>
                <ProjektiSvi />
            </div>
        )
    }
}

export default ProjekatStranica
