import { Component, OnInit } from '@angular/core'
import { OrdersService } from '../../services/orders.service'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { OrderCreate } from '../../models'

@Component({
  selector: 'app-register-order',
  templateUrl: './register-order.component.html',
  styleUrls: ['./register-order.component.css']
})
export class RegisterOrderComponent implements OnInit {

  form = this.formBuilder.group({
    customerId: ['', [Validators.required, Validators.maxLength(10)]],
    customerAddress: ['', [Validators.required, Validators.maxLength(100)]],
    items: [[], [Validators.required]]
  })

  constructor(
    private http: OrdersService,
    private formBuilder: FormBuilder,
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
}

