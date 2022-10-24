import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { SalesDepartmentsRoutingModule } from './sales-departments-routing.module'
import { HttpClientModule } from '@angular/common/http'
import { SalesDepartmentsComponent } from './components/sales-departments/sales-departments.component'
import { MatChipsModule } from '@angular/material/chips';
import { RegisterSalesDepartmentComponent } from './components/register-sales-department/register-sales-department.component'
import { ReactiveFormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatButtonModule } from '@angular/material/button'


@NgModule({
  declarations: [
    SalesDepartmentsComponent,
    RegisterSalesDepartmentComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SalesDepartmentsRoutingModule,
    MatChipsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class SalesDepartmentsModule {
}
