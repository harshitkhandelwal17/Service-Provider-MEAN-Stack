import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IProvider } from 'src/app/model/providers.model';
import { sampleProviders } from '../providers.data';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-add-p',
  templateUrl: './add-p.component.html',
})
export class AddPComponent {
  submitted: boolean = false;
  providersForm: FormGroup;
  emailError: boolean = false;
  emailErrorMessage: string = '';

  constructor(private providerSvc: ProviderService) {
    this.providersForm = new FormGroup({
      firstname: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
      ]),
      lastname: new FormControl(''),
      position: new FormControl('', [Validators.required]),
      company_name: new FormControl(''),
      address: new FormControl(''),
      address2: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      postal_code: new FormControl(''),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern('^[2-9]{3}-[0-9]{3}-[0-9]{4}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(''),
      tagline: new FormControl(''),
    });
  }
  get f() {
    return this.providersForm.controls;
  }
  submit = () => {
    const p = this.providersForm.value;
    const provider: IProvider = {
      firstname: p.firstname,
      lastname: p.lastname,
      position: p.position,
      company: {
        company_name: p.company_name,
        address: p.address,
        address2: p.address2,
        city: p.city,
        state: p.state,
        postal_code: p.postal_code,
        phone: p.phone,
        email: p.email,
        description: p.description,
        tagline: p.tagline,
      },
    };
    // sampleProviders.push(provider);

    this.providerSvc.addProvider(provider).subscribe({
      next: (data) => {
        this.submitted = true;
      },
      error: (error) => {
        if (error.error.status == 'error') {
          this.emailError = true;
          this.emailErrorMessage = error.error.error;
        }
      },
    });
  };
}
