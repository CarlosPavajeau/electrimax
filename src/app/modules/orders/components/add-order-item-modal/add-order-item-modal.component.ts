import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../../products/services/products.service'
import { FormBuilder, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog'
import { Product } from '../../../products/models'

@Component({
  selector: 'app-add-order-item-modal',
  templateUrl: './add-order-item-modal.component.html',
  styleUrls: ['./add-order-item-modal.component.css']
})
export class AddOrderItemModalComponent implements OnInit {

  form = this.formBuilder.group({
    product: [undefined, [Validators.required]],
    quantity: [1, [Validators.required, Validators.min(1)]],
  })

  products$ = this.productsService.fetch()

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<AddOrderItemModalComponent>) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.form.invalid) {
      return
    }

    if (this.form.controls.quantity.value == null) {
      return
    }

    if (this.form.controls.product.value == null) {
      return
    }

    const product = this.form.controls.product.value as Product
    if (this.form.controls.quantity.value > product.quantity - 1) {
      return
    }

    this.dialogRef.close(this.form.value)
  }
}
