import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'
import { RegisterOrderComponent } from './components/register-order/register-order.component'
import { OrdersComponent } from './components/orders/orders.component'

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent
  },
  {
    path: 'register',
    component: RegisterOrderComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule {
}
