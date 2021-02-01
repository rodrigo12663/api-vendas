import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import AuthConfig from '@config/auth.json'

export default function auth (
  request: Request,
  response: Response,
  next:NextFunction) {
  const authToken = request.headers.authorization
  const [, token] = authToken.split(' ')

  if (!authToken) {
    throw new AppError('token invalid', 401)
  }
  try {
    verify(token, AuthConfig.secret)
    return next()
  } catch {
    throw new AppError('Invalid JWT Token.')
  }
}
