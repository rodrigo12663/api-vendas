import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import AuthConfig from '@config/auth.json'

interface TokenPayload {
  iat: number;
  exp: number;
  sub: string;
}

export default function auth (req:Request, res:Response, next:NextFunction) {
  const authToken = req.headers.authorization
  const [, token] = authToken.split(' ')

  if (!authToken) {
    throw new AppError('token invalid', 401)
  }
  try {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const decodedToken = verify(token, AuthConfig.secret)

    const { sub } = decodedToken as TokenPayload
    req.user = {
      id: sub
    }

    return next()
  } catch {
    throw new AppError('Invalid JWT Token.')
  }
}
