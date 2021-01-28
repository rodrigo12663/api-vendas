import { EntityRepository, Repository } from 'typeorm'
import User from '../entities/User'

@EntityRepository(User)
export default class UserReporsitory extends Repository <User> {
  async findByEmail (email:string): Promise<User | undefined> {
    const user = await this.findOne({ where: { email } })
    return user
  }
}
