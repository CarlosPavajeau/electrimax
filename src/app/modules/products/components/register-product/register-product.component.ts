import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../services/products.service'
import { FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'
import { ProductCreate } from '../../models'
import { SalesDepartmentsService } from '../../../sales-departments/services/sales-departments.service'

@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})
export class RegisterProductComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(70)]],
    color: ['', [Validators.required, Validators.maxLength(30)]],
    quantity: [0, [Validators.required, Validators.min(1)]],
    price: [0, [Validators.required, Validators.min(1)]],
    salesDepartmentId: ['', [Validators.required]]
  })

  salesDepartments$ = this.salesDepartmentService.fetchAll()

  constructor(
    private service: ProductsService,
    private salesDepartmentService: SalesDepartmentsService,
    private formBuilder: FormBuilder,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.form.invalid) {
      return
    }

    this.service.save(this.form.value as ProductCreate).subscribe(() => {
      this.router.navigate(['/products']).then()
    })
  }
}

