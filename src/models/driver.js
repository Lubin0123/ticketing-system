import Person from "./person";

class Driver extends Person{
    constructor(
        id, name, identifyDocument, phone, status, driverLicense, hireDate
    ){
        super(id, name, identifyDocument, phone, status);
        this.driverLicense = driverLicense;
        this.hireDate = hireDate;
    }
    assignRoute(){
        //logica para asignar la ruta a un conductor
    }
    reportStatus(){
        //logica para reportar estado del conductor
    }
}
export default Driver;