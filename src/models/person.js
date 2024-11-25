class Person {
    constructor(id, name, identifyDocument, phone, status){
        this.is = id;
        this.name = name;
        this.identifyDocument = identifyDocument;
        this.phone = phone;
        this.status = status;
    }
    getInformation(){
        return `${this.name} (${this.identifyDocument})`;
    }
    updateStatus(newStatus){
        this.status = newStatus
    }
}
export default Person;