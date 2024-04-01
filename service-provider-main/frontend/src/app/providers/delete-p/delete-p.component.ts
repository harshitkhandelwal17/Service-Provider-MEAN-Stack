import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProvider } from 'src/app/model/providers.model';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-delete-p',
  templateUrl: './delete-p.component.html',
  styles: [],
})
export class DeletePComponent {
  ready: boolean = false;
  companyName: string = '';

  id!: string;
  constructor(
    private route: ActivatedRoute,
    private providerSvc: ProviderService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.providerSvc.deleteProvider(this.id).subscribe({
      next: (data) => {
        if (data.status === 'success') {
          this.ready = true;
          console.log(data.result);
          this.companyName = data.result.company.company_name;
        }
        // this.provider = data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
