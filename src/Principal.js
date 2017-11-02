import React, { Component } from 'react';
import {observer} from 'mobx-react'; // para observar PrincipalData
import VarPrincipalData from './PrincipalData';
import Incrementador from './Incrementador';
import Decrementador from './Decrementador';

class Principal extends Component{    
    render(){
        return (
            <div>
                <h1>Componente Principal</h1>
                <div>Numero: {VarPrincipalData.numero}</div>
                <Incrementador />
                <Decrementador />
            </div>
        );
    }
}

export default observer(Principal); //convertimos a Principal en observador