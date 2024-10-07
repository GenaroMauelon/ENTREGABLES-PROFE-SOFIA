import { automovil } from "./automoviles";

export class camion extends automovil{

private ruedas:number;
    
    
constructor(color: string,rodado:number,marca:string,modelo:number,vtv:boolean, estado:boolean, ruedas:number) {
    super(color, rodado, marca, modelo, vtv, estado);
    this.ruedas = this.setRuedas(ruedas); 
}

public setRuedas(ruedas:number):number{
    this.ruedas = ruedas

    return this.ruedas;
}


}