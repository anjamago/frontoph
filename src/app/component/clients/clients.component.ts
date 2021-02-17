import { Component, OnInit } from '@angular/core';
import {IClients} from './Interfaz/IClients';
import {FormClient} from './Form.cliente';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ClientProviderService} from '../../provider/client-provider.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  formCliente =  FormClient;
  tableData: IClients[];

  constructor(private modalService: NgbModal,private ProviderService:ClientProviderService) {}

  ngOnInit(): void {
  }

  openModal = (content1:string):NgbModalRef  => this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title',size: 'lg'});

  save() :void {
    const formData: IClients =  this.formCliente.value;
    
    if (!this.formCliente.valid) {
      this._alerService.error(
        'Debe completar todo los campos',
        'Registro incorrecto'
      );
      return;
    }

    


    console.log(formData);
    this.modalService.dismissAll();
  }
	

  
}
