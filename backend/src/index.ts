import { Hono } from 'hono'

import authRouter from './routes/auth.routes'  
const app = new Hono()
 

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('api/vi/auth' ,authRouter)

 
app.fire()  

export default app
