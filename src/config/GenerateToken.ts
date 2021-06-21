import { sign } from 'jsonwebtoken'
import AuthConfig from './auth.json'
export default class GenerateToken {
  execute (id) {
    return sign({}, AuthConfig.secret, { expiresIn: '48h', subject: id })
  }
}
