import { Component, OnInit } from '@angular/core'
import { ProductsService } from '../../services/products.service'
import { Product } from '../../models'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'color',
    'quantity',
    'price',
    'createdAt',
  ]

  products: Product[] = []

  constructor(private service: ProductsService) {
  }

  ngOnInit(): void {
    this.service.fetch().subscribe(products => {
      this.products = products
    })
  }

}
