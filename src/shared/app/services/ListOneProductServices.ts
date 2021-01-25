import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import Product from '../entities/Product'
import ProductReporsitory from '../repositories/ProductReporsitory'
import ProductValidationId from '../validations/productId'

interface IRequest{
    id:string
}

class ListOneProductServices {
  public async execute ({ id }:IRequest):Promise<Product> {
    const ProductsReporsitory = getCustomRepository(ProductReporsitory)
    const product = ProductsReporsitory.findOne(id)
    if (!product) {
      throw new AppError('Product not found')
    }

    if (!(await ProductValidationId.isValid(id))) {
      throw new AppError('id validation is not uuid', 400)
    }

    return product
  }
}
export default ListOneProductServices
