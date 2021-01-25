import AppError from '@shared/errors/AppError'
import Product from '../entities/Product'
import ProductReporsitory from '../repositories/ProductReporsitory'
import ProductValidation from '../validations/product'
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

    if (!(await ProductValidation.isValid({ name, price, quantity }))) {
      throw new AppError('Validation fails', 400)
    }

    const product = ProductsReporsitory.create({ name, price, quantity })
    await ProductsReporsitory.save(product)
    return product
  }
}
export default CreateProductService
