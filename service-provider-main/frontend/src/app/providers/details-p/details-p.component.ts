import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProvider } from 'src/app/model/providers.model';
import { ProviderService } from 'src/app/service/provider.service';

@Component({
  selector: 'app-details-p',
  templateUrl: './details-p.component.html',
  styles: [],
})
export class DetailsPComponent implements OnInit {
  provider!: IProvider;
  isDataLoaded: boolean = false;

  id!: string;
  constructor(
    private route: ActivatedRoute,
    private providerSvc: ProviderService
  ) {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.providerSvc.getProvider(this.id).subscribe({
      next: (data) => {
        this.provider = data;
        this.isDataLoaded = true;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {}
}
