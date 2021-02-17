import { Routes } from '@angular/router';

import { ClientsComponent } from './clients/clients.component';
import { SellerComponent } from './seller/seller.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { InvoiceComponent } from './invoice/invoice.component';


export const ComponentRouting: Routes = [
    {
		path: '',
		children: [
			{
				path: 'clientes',
				component: ClientsComponent,
			},
			{
				path: 'productos',
				component: ProductComponent,
			},
            
        ],
        
    },
];
