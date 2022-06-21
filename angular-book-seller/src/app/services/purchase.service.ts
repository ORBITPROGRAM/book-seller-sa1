import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Purchase } from '../models/purchase.model';
import { AuthenticationService } from './authentication.service';
import { RequestBaseService } from './request-base.service';

const API_URL = `${environment.BASE_URL}/api/purchase-history`

@Injectable({
  providedIn: 'root'
})
export class PurchaseService extends RequestBaseService {

  constructor(authenticationService: AuthenticationService, http: HttpClient) {
    super(authenticationService, http);
   }

   savePurchase(purchase: Purchase): Observable<any> {
    return this.http.post(API_URL, purchase, {headers: this.getHeaders});
   }

   getAllPurchaseItems(): Observable<any> {
    return this.http.get(API_URL, {headers: this.getHeaders});
   }
}
