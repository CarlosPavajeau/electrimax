import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Product, ProductCreate } from '../models'
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) {
  }

  save(product: ProductCreate) {
    return this.http.post<string>(`${environment.baseUrl}/products`, product)
  }

  fetch() {
    return this.http.get<Product[]>(`${environment.baseUrl}/products`)
  }
}


