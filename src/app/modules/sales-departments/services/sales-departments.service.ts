import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { SalesDepartment, SalesDepartmentCreate } from '../models'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class SalesDepartmentsService {

  constructor(private http: HttpClient) {
  }

  save(salesDepartment: SalesDepartmentCreate) {
    return this.http.post<number>(`${environment.baseUrl}/sales-departments`, salesDepartment)
  }

  fetchAll() {
    return this.http.get<SalesDepartment[]>(`${environment.baseUrl}/sales-departments`)
  }
}

