import express from 'express'
import 'reflect-metadata'
import 'express-async-errors'
import cors from 'cors'
import routes from './routes'
import '@shared/typeorm'
import ConfigError from '@shared/errors/ConfigError'

const configErro = new ConfigError()
const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)
app.use(configErro.execute)

app.listen(3333, () => {
  console.log('Server started on port 3333!')
})
