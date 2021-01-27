import { getCustomRepository } from 'typeorm'
import Product from '../entities/Product'
import ProductReporsitory from '../repositories/ProductReporsitory'

class ListProductServices {
  public async execute () : Promise<Product[]> {
    const ProductsReporsitory = getCustomRepository(ProductReporsitory)
    const products = ProductsReporsitory.find()
    return products
  }
}
export default ListProductServices
