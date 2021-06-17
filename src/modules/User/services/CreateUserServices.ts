import AppError from '@shared/errors/AppError'
import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import UserReporsitory from '../repositories/UserReporsitory'

interface IRequest {
  name: string;
  email: string;
  password: string;

}

class CreateUserService {
  public async execute ({ name, email, password }: IRequest): Promise<User> {
    const usersRepository = getCustomRepository(UserReporsitory)
    const emailExists = await usersRepository.findByEmail(email)

    if (emailExists) {
      throw new AppError('Email address already used.')
    }
    const user = usersRepository.create({ name, email, password })
    await usersRepository.save(user)
    return user
  }
}

export default CreateUserService
