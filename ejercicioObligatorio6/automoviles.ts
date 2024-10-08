export class automovil {
    protected color:string;
    protected rodado:number;
    protected marca:string;
    protected modelo:number;
    protected vtv:boolean;
    protected estado:boolean;

    constructor(color: string,rodado:number,marca:string, modelo:number,vtv:boolean,estado:boolean) {
        this.color = color;
        this.rodado = rodado;
        this.marca = marca;
        this.modelo = modelo;
        this.vtv = vtv;
        this.estado = estado;
    }

    getColor():string{
        return this.color;
    }
    
    getRodado():number{
        return this.rodado;
    }
    
    getMarca():string{
        return this.marca;
    }
    
    getModelo():number{
        return this.modelo;
    }
    
    getVtv():boolean{
        return this.vtv;
    }

    getEstado():boolean{
        return this.estado;
    }
    
    setColor(color:string):void{
        this.color = color;
    }
    
    setRodado(rodado:number):void{
        this.rodado = rodado;
    }

    setVtv(vtv:boolean):void{
        this.vtv = vtv;
    }

    setEstado(estado:boolean):void{
        this.estado = estado;
    }

    public darDeBaja(){
        this.setEstado(false)
        return "Vehículo dado de baja";
    }

    public darDeAlta(){
        this.setEstado(true)
        return "Vehículo dado de alta";
    }

}