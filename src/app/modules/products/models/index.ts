import { SalesDepartment } from '../../sales-departments/models'

export type Product = {
  id: string
  name: string
  color: string

  quantity: number
  price: number

  createdAt: Date

  salesDepartment: SalesDepartment
  salesDepartmentId?: string
}

export type ProductCreate = Omit<Product, 'id' | 'createdAt' | 'salesDepartment'>
