import { Injectable } from '@angular/core';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})

export class ClientProviderService {

  constructor(private http:BaseRequestService) { }

  Post(data:any) {
    return this.http.post("",data);
  }
  Find(id:number) {
    return this.http.get("");
  }
  GetAll() {
    return this.http.get("");
  }
  Update(data:any) {
    return this.http.put("",data);
  }
  Delet(data:any) {
    return this.http.delete("");
  }


}
