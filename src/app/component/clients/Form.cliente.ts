
import { FormGroup, FormControl, Validators } from '@angular/forms';

export const  FormClient =  new FormGroup({
    name: new FormControl('',[Validators.required,Validators.minLength(3)]),
    lastName: new FormControl('',[Validators.required, Validators.minLength(3)]),
    email: new FormControl('',[Validators.required,Validators.email,Validators.minLength(5)]),
    address:new FormControl('',[Validators.required, Validators.minLength(3)]),
    Birthday: new FormControl('',[Validators.required, Validators.minLength(3)]),
    IdentificationNumber: new FormControl('',[Validators.required, Validators.minLength(6)]),
});