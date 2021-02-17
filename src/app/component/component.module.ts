import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClientsComponent } from './clients/clients.component';
import { SellerComponent } from './seller/seller.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { InvoiceComponent } from './invoice/invoice.component';

import { ComponentRouting } from './component-routing';

import {NgbDatepickerModule} from '@ng-bootstrap/ng-bootstrap';

import { DxDataGridModule,
  DxBulletModule,
  DxTemplateModule } from 'devextreme-angular';



@NgModule({
  declarations: [ClientsComponent, SellerComponent, ProductComponent, CategoryComponent, InvoiceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentRouting),
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
        DxDataGridModule,
        DxTemplateModule,
        DxBulletModule
  ]
})
export class ComponentModule { }
