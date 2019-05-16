import { AbstractControl } from '@angular/forms';


export function emailDomain(control: AbstractControl): {[key:string]:any} | null
{
  const email:string=control.value;
  if (email) {   //checking whether the email value is present or not
    const domain=email.substring(email.lastIndexOf('@')+1);
    if(domain.toLowerCase()==='gmail.com')
    {
      return null;
    }
    else{
      return {'emailDomain':true};
    } 
  }
}
