import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProvider } from '../model/providers.model';

@Injectable({
  providedIn: 'root',
})
export class ProviderService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //get all provider
  getAllProviders(): Observable<IProvider[]> {
    return this.http.get<IProvider[]>(this.apiUrl);
  }

  //get provider by id
  getProvider(id: string): Observable<IProvider> {
    return this.http.get<IProvider>(this.apiUrl + id);
  }

  //update provider by id
  updateProvider(
    id: string,
    updatedProvider: IProvider
  ): Observable<IProvider> {
    return this.http.put<IProvider>(this.apiUrl + id, {
      provider: updatedProvider,
    });
  }

  addProvider(provider: IProvider): Observable<any> {
    return this.http.post(this.apiUrl, { provider });
  }

  deleteProvider(id: string): Observable<any> {
    return this.http.delete(this.apiUrl + id);
  }
}
