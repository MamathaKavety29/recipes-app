
export class User{
    public FirstName:string;
    public LastName:string;
    public Email:string;
    public Number:string;
    public Password:string;
    public Address1:string;
    public Address2:string;

    constructor(data?: any){
         this.FirstName=data.FirstName;
         this.LastName=data.LastName;
         this.Email=data.Email;
         this.Number=data.Number;
         this.Password=data.Password;
         this.Address1=data.Address1;
         this.Address2=data.Address2;
    }
}