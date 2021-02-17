import { Injectable } from '@angular/core';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})
export class ProductProviderService {

  constructor(private http:BaseRequestService) { }

  GetAll():Promise<any> {
    return this.http.getPromise("product");
  }

  GetFilter():Promise<any> {
    return this.http.getPromise("invoice/TotalSold");
  }
  
}
