import { EntityRepository, Repository } from 'typeorm'
import Product from '../entities/Product'

@EntityRepository(Product)
export class ProductReporsitories extends Repository<Product > {
  public async findByName (name: string) {
    const product = await this.findOne({ where: { name } })
    return product
  }
}
