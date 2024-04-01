import { Component, OnInit } from '@angular/core';
import { sampleProviders } from './providers.data';
import { IProvider } from '../model/providers.model';
import { ProviderService } from '../service/provider.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.scss'],
})
export class ProvidersComponent implements OnInit {
  providers: IProvider[] = [];
  constructor(private providerSvc: ProviderService) {}

  ngOnInit(): void {
    this.providerSvc.getAllProviders().subscribe({
      next: (data) => {
        this.providers = data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
}
