import AppError from '@shared/errors/AppError'
import { compare } from 'bcryptjs'
import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import UserReporsitory from '../repositories/UserReporsitory'
interface IRequest {
  email: string;
  password: string;

}

export default class CreateSessionsService {
  public async execute ({ email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserReporsitory)
    const user = await usersRepository.findByEmail(email)

    if (!user) {
      throw new AppError('incorrect email combination.', 401)
    }
    const PasswordConfirmed = await compare(password, user.password)

    if (!PasswordConfirmed) {
      throw new AppError('incorrect password combination.', 401)
    }
    return user
  }
}
