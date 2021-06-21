import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import CreateProductService from '../services/CreateProductServices'
import DeleteProductService from '../services/DeleteProductServices'
import ListOneProductServices from '../services/ListOneProductServices'
import ListProductServices from '../services/ListProductsServices'
import UpdateProductServices from '../services/UpdateProductServices'
import ProductValidationId from '../validations/productId'
import ProductValidation from '../validations/product'

export default class ProductsController {
  async index (request: Request, response: Response):Promise<Response> {
    const ListProducts = new ListProductServices()
    const products = await ListProducts.execute()

    return response.json(products)
  }

  async show (request: Request, response: Response) :Promise<Response> {
    const { id } = request.params
    const showProducts = new ListOneProductServices()

    if (!(await ProductValidationId.isValid({ id }))) {
      throw new AppError('yarn d validation is not uuid', 400)
    }
    const product = await showProducts.execute({ id })
    return response.json({ product })
  }

  async create (request: Request, response: Response):Promise<Response> {
    const { name, price, quantity } = request.body
    if (!(await ProductValidation.isValid(request.body))) {
      throw new AppError('Validation fails', 400)
    }
    const createProduct = new CreateProductService()
    const product = await createProduct.execute({ name, price, quantity })

    return response.json(product)
  }

  async update (request: Request, response: Response):Promise<Response> {
    const { name, price, quantity } = request.body
    const { id } = request.params
    if (!(await ProductValidation.isValid({ name, price, quantity }))) {
      throw new AppError('Validation fails', 400)
    }
    if (!(await ProductValidationId.isValid({ id }))) {
      throw new AppError('yarn d validation is not uuid', 400)
    }

    const updateProduct = new UpdateProductServices()
    const product = await updateProduct.execute({ id, name, price, quantity })

    return response.json({ product })
  }

  async delete (request: Request, response: Response):Promise<Response> {
    const { id } = request.params
    const deleteProduct = new DeleteProductService()
    if (!(await ProductValidationId.isValid({ id }))) {
      throw new AppError('yarn d validation is not uuid', 400)
    }
    await deleteProduct.execute({ id })

    return response.json({ message: 'product successfully deleted' })
  }
}
