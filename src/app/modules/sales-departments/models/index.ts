export type SalesDepartment = {
  id: number
  name: string
}

export type SalesDepartmentCreate = Omit<SalesDepartment, 'id'>
