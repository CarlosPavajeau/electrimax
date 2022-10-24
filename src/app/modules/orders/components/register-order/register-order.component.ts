import { Component, OnInit } from '@angular/core'
import { OrdersService } from '../../services/orders.service'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { OrderCreate, OrderItemCreate } from '../../models'
import { MatDialog } from '@angular/material/dialog'
import { AddOrderItemModalComponent } from '../add-order-item-modal/add-order-item-modal.component'

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css']
})
export class RegisterOrderComponent implements OnInit {

  form = this.formBuilder.group({
    customerId: ['', [Validators.required, Validators.maxLength(10)]],
    customerAddress: ['', [Validators.required, Validators.maxLength(100)]],
    items: [Array.of<OrderItemCreate>(), [Validators.required]]
  })

  constructor(
    private http: OrdersService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.form.invalid) {
      return
    }

    this.http.save(this.form.value as unknown as OrderCreate).subscribe(() => {
      this.router.navigate(['/orders']).then()
    })
  }

  openAddOrderItemModal() {
    const dialogRef = this.dialog.open(AddOrderItemModalComponent, {
      width: '500px',
    })

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        const item: OrderItemCreate = {
          product: result.product,
          quantity: result.quantity,
          price: result.product.price,
          productId: result.product.id
        }

        const items = this.form.get('items')?.value

        if (items) {
          items.push(item)
          this.form.patchValue({items})
        }
      }
    })
  }
}


