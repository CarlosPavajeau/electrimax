import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Order, OrderCreate } from '../models'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) {
  }

  save(order: OrderCreate) {
    return this.http.post<string>(`${environment.baseUrl}/orders`, order)
  }

  fetch() {
    return this.http.get<Order[]>(`${environment.baseUrl}/orders`)
  }
}

