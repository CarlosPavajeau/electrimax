import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { SalesDepartmentsComponent } from './components/sales-departments/sales-departments.component'
import {
  RegisterSalesDepartmentComponent
} from './components/register-sales-department/register-sales-department.component'

const routes: Routes = [
  {
    path: '',
    component: SalesDepartmentsComponent,
  },
  {
    path: 'register',
    component: RegisterSalesDepartmentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesDepartmentsRoutingModule {
}
