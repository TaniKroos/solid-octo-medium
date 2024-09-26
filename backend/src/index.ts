import { Hono } from 'hono'
import blogRouter from './routes/blog.route'
import authRouter from './routes/auth.routes'  
const app = new Hono()
 

app.get('/', (c) => {
  return c.text('Hello Hono!')
})


app.route('api/vi/auth' ,authRouter)
app.route('api/vi/',blogRouter);
 
app.fire()  

export default app
