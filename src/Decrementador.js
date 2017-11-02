import React,{ Component } from 'react';
import VarPrincipalData from './PrincipalData';

class Decrementador extends Component{
    render(){
        return (
            <button onClick={VarPrincipalData.decrementar.bind(VarPrincipalData)}>-</button>
        );
    }
}

export default Decrementador;