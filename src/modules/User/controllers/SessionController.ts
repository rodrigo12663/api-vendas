import { Request, Response } from 'express'
import CreateSessionServices from '../services/CreateSessionServices'

export default class SessionController {
  async create (req:Request, res:Response) {
    const { email, password } = req.body

    const sessioService = new CreateSessionServices()

    const user = await sessioService.execute({ email, password })
    return res.json(user)
  }
}
