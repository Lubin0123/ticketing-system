import Person from "./person";

class Passanger extends Person{
    constructor(
        id, name, identifyDocument, phone, status, email, address,
    ){
        super(id, name, identifyDocument,phone,status);
        this.email = email;
        this.address = address;
    }
    register(){
        //aca desarrollo la logica para el registro del pasajero
    }
    logIn(){
        //logica para el inicio de session de un pasajero
    }
    buyTicket(){
        //logica para realizar la compra del tiquete
    }
}
export default Passanger;