import { Component, OnInit } from '@angular/core';

import {ProductProviderService} from '../../provider/product-provider.service';
import { AlertService } from 'src/app/utils/alert/alert.service';
import DataSource from 'devextreme/data/data_source';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

t;
  tableData: DataSource  ;

  constructor(
    private providerService:ProductProviderService,
    private alert:AlertService
     ) {}

  async ngOnInit() {
    this.tableData = await this.loadTable();
  }

  loadTable =() =>new DataSource({
    key:'id',
    load:()=>this.providerService.GetAll()
  });




  async reset(){
    this.tableData = await this.loadTable();
  }

  async loadFilter(){
    this.tableData = new DataSource({
      key:'id',
      load:()=>this.providerService.GetFilter()
    });
  }

}
