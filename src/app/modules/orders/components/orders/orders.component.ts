import { Component, OnInit } from '@angular/core'
import { OrdersService } from '../../services/orders.service'
import { Order } from '../../models'

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'customerId',
    'customerAddress',
    'createdAt',

    'subtotal',
    'total',
    'discount',
  ]

  orders: Order[] = []

  constructor(private service: OrdersService) {
  }

  ngOnInit(): void {
    this.service.fetch().subscribe(orders => {
      this.orders = orders
    })
  }

}
