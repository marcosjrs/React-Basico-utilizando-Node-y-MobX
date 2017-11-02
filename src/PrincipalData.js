import { extendObservable } from 'mobx';

class PrincipalData{
    constructor(){

        extendObservable(this,
            {
                numero: 0
            });

    }
    
    incrementar(){
        this.numero++;
    }
}

var VarPrincipalData = new PrincipalData();

export default VarPrincipalData;