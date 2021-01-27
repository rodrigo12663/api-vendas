import { EntityRepository, Repository } from 'typeorm'
import Product from '../entities/Product'

@EntityRepository(Product)
class ProductReporsitory extends Repository<Product > {
  public async findByName (name: string) {
    const product = await this.findOne({ where: { name } })
    return product
  }
}
export default ProductReporsitory
