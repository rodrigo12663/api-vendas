import AppError from '@shared/errors/AppError'
import { Request, Response } from 'express'
import CreateUserServices from '../services/CreateUserServices'
import ListUserServices from '../services/ListUserServices'
import userValidation from '../validations/user'

export default class UserController {
  async create (request: Request, response: Response):Promise<Response> {
    const { name, email, password } = request.body
    if (!(await userValidation.isValid(request.body))) {
      throw new AppError('Validation fails', 400)
    }
    const createUser = new CreateUserServices()
    const product = await createUser.execute({ name, email, password })

    return response.json(product)
  }

  async index (request: Request, response: Response):Promise<Response> {
    const listUserServices = new ListUserServices()
    const users = await listUserServices.execute()
    return response.json(users)
  }
}
