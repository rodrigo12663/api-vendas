import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import ProductReporsitory from '../repositories/ProductReporsitory'

interface IRequest {
  id: string;
}

class DeleteProductService {
  public async execute ({ id }: IRequest): Promise<void> {
    const productsReporsitory = getCustomRepository(ProductReporsitory)

    const product = await productsReporsitory.findOne(id)

    if (!product) {
      throw new AppError('Product not found.')
    }

    await productsReporsitory.remove(product)
  }
}

export default DeleteProductService
