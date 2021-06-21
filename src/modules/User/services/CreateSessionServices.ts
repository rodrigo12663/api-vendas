import AppError from '@shared/errors/AppError'
import GenerateToken from '@config/GenerateToken'
import { compare } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import UserReporsitory from '../repositories/UserReporsitory'

interface IRequest {
  email: string;
  password: string;

}
interface IResponse{
  user:User;
  token:string;
}

export default class CreateSessionServices {
  public async execute ({ email, password }: IRequest): Promise<IResponse> {
    const usersRepository = getCustomRepository(UserReporsitory)
    const user = await usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('incorrect email and user not found.', 401)
    }
    const PasswordConfirmed = await compare(password, user.password)

    if (!PasswordConfirmed) {
      throw new AppError('incorrect password', 401)
    }

    const generateToken = new GenerateToken()
    const token = generateToken.execute(user.id)

    return {
      user, token
    }
  }
}
