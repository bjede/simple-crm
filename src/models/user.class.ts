export class User {
    firstName: string;
    lastName: string;
    email: string;
    birthDate: number;
    street: string;
    zipCode: string;
    city: string;

    constructor(obj?: any) {
        this.firstName = obj ? obj.firstName : this.firstName = '';
        this.lastName = obj ? obj.lastName : this.lastName = '';
        this.email = obj ? obj.email : this.email = '';
        this.street = obj ? obj.street : this.street = '';
        this.zipCode = obj ? obj.zipCode : this.zipCode = '';
        this.city = obj ? obj.city : this.city = '';
    }

    public toJSON() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city
        }
    }
}