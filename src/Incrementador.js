import React, { Component } from 'react';
import VarPrincipalData from './PrincipalData';

class Incrementador extends Component {
    render() {
        return ( 
            <button onClick={VarPrincipalData.incrementar.bind(VarPrincipalData)}>+</button>
        );
    };
}

export default Incrementador;