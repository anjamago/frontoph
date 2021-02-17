import { Component, OnInit } from '@angular/core';
import {IClients} from './Interfaz/IClients';
import {FormClient} from './Form.cliente';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import {ClientProviderService} from '../../provider/client-provider.service';
import { AlertService } from 'src/app/utils/alert/alert.service';
import DataSource from 'devextreme/data/data_source';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})

export class ClientsComponent implements OnInit {
  formCliente =  FormClient;
  tableData: DataSource  ;

  constructor(
    private modalService: NgbModal,
    private providerService:ClientProviderService,
    private alert:AlertService
     ) {}

  async ngOnInit() {
    this.tableData = await this.loadTable();
  }

  loadTable =() =>new DataSource({
    key:'id',
    load:()=>this.providerService.GetAll()
  });


  openModal = (content1:string):NgbModalRef  => this.modalService.open(content1, {ariaLabelledBy: 'modal-basic-title',size: 'lg'});

  save() :void {
    let formData: IClients =  this.formCliente.value;
    const {Birthday } =  this.formCliente.value;
    
    if (!this.formCliente.valid) {
      this.alert.error(
        'Debe completar todo los campos',
        'Registro incorrecto'
      );
      return;
    }
    const month =  Birthday.month <10 ? `0${Birthday.month}`:Birthday.month;
    formData.Birthday = `${Birthday.year}-${month}-${Birthday.day}`;

    this.providerService.Post(formData).subscribe(
      (res)=>{
        this.loadTable();
      },
      (err)=>{
        this.alert.info(
          'Error al crear el registro',
          'Opps'
        );
      }
    )

    


    console.log(formData);
    this.modalService.dismissAll();
  }
	

  
}
