export class Users{
    id:number;
    firstName:string;
    lastName:string;
    mobile:string;
    email:string;
    address:string;
    age:number;
    gender:string;
    

    constructor(id:number,firstName:string,lastName:string,mobile:string,email:string,address:string,age:number,gender:string){
        this.id=id;
        this.firstName=firstName;
        this.lastName=lastName;
        this.mobile=mobile;
        this.email=email;
        this.address=address;
        this.age=age;
        this.gender=gender;
    }
}