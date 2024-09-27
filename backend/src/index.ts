import { Hono } from 'hono'
import blogRouter from './routes/blog.route'
import authRouter from './routes/auth.routes'  
import { cors } from 'hono/cors'
const app = new Hono()
 
 

app.use('/*',cors());
app.route('api/vi/' ,authRouter)
app.route('api/vi/',blogRouter);
 
app.fire()  

export default app
