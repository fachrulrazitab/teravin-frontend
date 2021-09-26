export class User {
    id: number;
    name: string;
    phone_number: string;
    email: string;
    addresses: Address[];

    constructor(){
        this.id = 0;
        this.name = null;
        this.email = null;
        this.addresses = [];
    }
}
export class Address{
    id: number;
    address: string;
}