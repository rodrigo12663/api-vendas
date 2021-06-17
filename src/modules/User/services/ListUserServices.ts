import { getCustomRepository } from 'typeorm'
import User from '../entities/User'
import UserReporsitory from '../repositories/UserReporsitory'

export default class ListUserServices {
  async execute () : Promise<User[]> {
    const usersRepository = getCustomRepository(UserReporsitory)
    const users = usersRepository.find()
    return users
  }
}
