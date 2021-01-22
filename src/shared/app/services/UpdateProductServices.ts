import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import Product from '../entities/Product'
import ProductReporsitory from '../repositories/ProductReporsitory'

interface IRequest{
  id:string,
  name:string
  price:number
  quantity:number
}

class UpdateProductServices {
  public async execute ({ id, name, price, quantity }:IRequest):Promise<Product> {
    const ProductsReporsitory = getCustomRepository(ProductReporsitory)

    const product = await ProductsReporsitory.findOne(id)

    if (!product) {
      throw new AppError('Product not found')
    }

    const productExist = await ProductsReporsitory.findByName(name)
    if (productExist) {
      throw new AppError('there is already one product whit this name')
    }
    product.name = name
    product.price = price
    product.quantity = quantity

    return product
  }
}
export default UpdateProductServices
