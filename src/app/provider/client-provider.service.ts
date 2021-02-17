import { Injectable } from '@angular/core';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})

export class ClientProviderService {

  constructor(private http:BaseRequestService) { }

  Post(data:any) {
    return this.http.post();
  }
  Find(data:any) {
    return this.http.get();
  }
  GetAll(data:any) {
    return this.http.get();
  }
  Update(data:any) {
    return this.http.put();
  }
  Delet(data:any) {
    return this.http.delete();
  }


}
