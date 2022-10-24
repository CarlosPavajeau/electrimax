import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { OrdersRoutingModule } from './orders-routing.module'
import { RegisterOrderComponent } from './components/register-order/register-order.component'
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'
import { MatListModule } from '@angular/material/list';
import { AddOrderItemModalComponent } from './components/add-order-item-modal/add-order-item-modal.component'
import { MatDialogModule } from '@angular/material/dialog'
import { MatSelectModule } from '@angular/material/select';
import { OrdersComponent } from './components/orders/orders.component'
import { MatTableModule } from '@angular/material/table'


@NgModule({
  declarations: [
    RegisterOrderComponent,
    AddOrderItemModalComponent,
    OrdersComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    OrdersRoutingModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class OrdersModule {
}
