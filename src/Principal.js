import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class Principal extends Component{
    render(){
        return (
            <div>
                <h1>Componente Principal</h1>
                <div>Numero: {VarPrincipalData.numero}</div>
            </div>
        );
    }
}

export default Principal;