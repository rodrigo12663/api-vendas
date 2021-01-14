import AppError from '@shared/errors/AppError'
import Product from '../entities/Product'
import ProductReporsitory from '../repositories/ProductReporsitory'
import { getCustomRepository } from 'typeorm'

interface IRequest{
  name:string,
  price:number
  quantity:number
}

class CreateProductService {
  public async execute ({ name, price, quantity }: IRequest): Promise<Product> {
    const ProductsReporsitory = getCustomRepository(ProductReporsitory)
    const productExists = await ProductsReporsitory.findByName(name)
    if (productExists) {
      throw new AppError('there is already one product whit this name')
    }
    const product = ProductsReporsitory.create({ name, price, quantity })
    await ProductsReporsitory.save(product)
    return product
  }
}
export default CreateProductService
