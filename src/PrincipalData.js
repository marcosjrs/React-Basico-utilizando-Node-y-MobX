import { extendObservable, computed } from 'mobx';

class PrincipalData{
    constructor(){

        extendObservable(this,
            {
                numero: 0
            })

    }
}

var VarPrincipalData = new PrincipalData;

export default VarPrincipalData;