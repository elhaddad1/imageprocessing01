import express, { Application, Request, Response } from 'express'
import morgan from 'morgan'
 import * as dotenv from 'dotenv'
 import {routes}  from './routes';
import path from 'path';

 dotenv.config()
const PORT = process.env.PORT || 3000
// create an instance server
const app: Application = express()
// HTTP request logger middleware
app.use(morgan('dev'))

app.use('/imagesfiles', express.static(path.join(__dirname, 'images')));
routes(app);
// add routing for / path
app.get('/', (req: Request, res: Response) => {
  res.json({
    message: 'Hello World 🌍'
  })
})
// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at prot:${PORT}`)
})
export default app