import {automovil} from "./automoviles";
import { auto } from "./auto";
import{ moto } from "./moto";
import{ camion } from "./camion";

class registroAutomor{

    private auto:auto;
    private moto:moto;
    private camion:camion;

    constructor(auto:auto,moto:moto,camion:camion){
        this.auto = auto;
        this.moto = moto;
        this.camion = camion;
    }

    public modificarVehiculo(automovil:automovil, color?:string,rodado?:number){
        if(color) automovil.setColor(color);
        if(rodado) automovil.setRodado(rodado);
        return "Vehículo modificado correctamente";
    }

    public getAuto():automovil{
        return this.auto;
    }

    public getCamion():automovil{
        return this.camion;
    }

    public getMoto():automovil{
        return this.moto;
    }


}

const auto1 = new auto("Gris", 14,"Mercedez Benz", 2021, true, true);

const moto1 = new moto ("Negro", 17, "Honda CB500X", 2022, false, true);


const camion1 = new camion("Azul", 22.5, "Volvo FH16", 2023, true, true, 6);

console.log("Sin VTV")
console.log(moto1);

moto1.setVtv(true)
console.log(moto1)

const registro = new registroAutomor(auto1,moto1,camion1);

let vehiculoModificable = registro.getCamion();

console.log(vehiculoModificable); 

registro.modificarVehiculo(vehiculoModificable, "Blanco", 21)


console.log("Vehiculos registrados:")
console.log(registro);