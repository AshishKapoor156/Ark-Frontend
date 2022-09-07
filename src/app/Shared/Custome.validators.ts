import { AbstractControl } from "@angular/forms";

export class customevalidators {
    //custome validator
    static emaildomain(con: string) {// used anonymous funtion where function name is not decalred
        return (control: AbstractControl): { [key: string]: any } | null => {
            //ashishkapooe@gmail.com
            const email = control.value;
            // console.log(email);
            const domain = email.substring(email.lastIndexOf('@') + 1);
            //  console.log(domain);
            if (email === '' || domain.toLowerCase() === con) {
                return null;
            }
            else {
                return { 'emaildomain': true };
            }
        }
    };
}