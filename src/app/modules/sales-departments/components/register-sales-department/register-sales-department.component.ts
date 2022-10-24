import { Component, OnInit } from '@angular/core'
import { SalesDepartmentsService } from '../../services/sales-departments.service'
import { FormBuilder, Validators } from '@angular/forms'
import { SalesDepartmentCreate } from '../../models'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register-sales-department',
  templateUrl: './register-sales-department.component.html',
  styleUrls: ['./register-sales-department.component.css']
})
export class RegisterSalesDepartmentComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(30)]],
  })

  constructor(private service: SalesDepartmentsService, private formBuilder: FormBuilder, private route: Router) {
  }

  ngOnInit(): void {
  }

  register() {
    if (this.form.invalid) {
      return
    }

    this.service.save(this.form.value as SalesDepartmentCreate).subscribe(result => {
      this.route.navigate(['/sales-departments']).then()
    })
  }
}

