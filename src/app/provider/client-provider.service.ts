import { Injectable } from '@angular/core';
import { BaseRequestService } from '../utils/service/base-request.service';

@Injectable({
  providedIn: 'root'
})

export class ClientProviderService {

  constructor(private http:BaseRequestService) { }

  Post(data:any) {
    return this.http.post("client/create",data);
  }
  Find(id : number) {
    return this.http.get(`client/fiend?id=${id}`);
  }
  GetAll():Promise<any> {
    return this.http.getPromise("client");
  }
  Update(data:any) {
    return this.http.put("client/update",data);
  }
  Delet(id:number) {
    return this.http.delete(`client/delete?id=${id}`);
  }


}
