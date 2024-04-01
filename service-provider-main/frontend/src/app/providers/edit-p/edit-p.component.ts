import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IProvider } from 'src/app/model/providers.model';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-edit-p',
  templateUrl: './edit-p.component.html',
  styles: [],
})
export class EditPComponent {
  submitted: boolean = false;
  providersForm: FormGroup;
  emailError: boolean = false;
  emailErrorMessage: string = '';
  id!: string;

  ready: boolean = false;
  constructor(
    private providerSvc: ProviderService,
    private route: ActivatedRoute
  ) {
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
        Validators.pattern('^[0-9]{3}-[0-9]{3}-[0-9]{4}$'),
      ]),
      email: new FormControl('', [Validators.required, Validators.email]),
      description: new FormControl(''),
      tagline: new FormControl(''),
    });

    // this.id = this.route.snapshot.paramMap.get('id') || '';
    this.route.paramMap.subscribe((d) => {
      this.id = d.get('id') || '';
      this.getProviderById();
    });
  }
  get f() {
    return this.providersForm.controls;
  }
  submit = () => {
    const p = this.providersForm.value;
    const updatedProvider: IProvider = {
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

    this.providerSvc.updateProvider(this.id, updatedProvider).subscribe({
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

  getProviderById() {
    let provider: IProvider;
    if (this.id !== '') {
      this.providerSvc.getProvider(this.id).subscribe({
        next: (data) => {
          provider = data;
          this.providersForm.patchValue({
            firstname: provider.firstname,
            lastname: provider.lastname,
            position: provider.position,
            company_name: provider.company.company_name,
            address: provider.company.address,
            address2: provider.company.address2,
            city: provider.company.city,
            state: provider.company.state,
            postal_code: provider.company.postal_code,
            phone: provider.company.phone,
            email: provider.company.email,
            description: provider.company.description,
            tagline: provider.company.tagline,
          });
          this.ready = true;
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
