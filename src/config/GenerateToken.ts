import { sign } from 'jsonwebtoken'
import AuthConfig from './auth.json'
export default class GenerateToken {
  execute (id, email) {
    return sign({ id, email }, AuthConfig.secret, { expiresIn: '48h', subject: id })
  }
}
