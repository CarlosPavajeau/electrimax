import { Component, OnInit } from '@angular/core'
import { SalesDepartmentsService } from '../../services/sales-departments.service'

@Component({
  selector: 'app-sales-departments',
  templateUrl: './sales-departments.component.html',
  styleUrls: ['./sales-departments.component.css']
})
export class SalesDepartmentsComponent implements OnInit {

  salesDepartments$ = this.service.fetchAll()

  constructor(private service: SalesDepartmentsService) {
  }

  ngOnInit(): void {
  }
}
