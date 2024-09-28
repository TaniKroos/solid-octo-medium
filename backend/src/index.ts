import { Hono } from 'hono'
import blogRouter from './routes/blog.route'
import authRouter from './routes/auth.routes'  
import { cors } from 'hono/cors'
import { Bindings } from 'hono/types';
const app = new Hono<{ 
    Bindings:{ // ensure that certain bindings are available and type-checked 
        DATABASE_URL: string ,
        JWT_SECRET: string ,
    }
}>();

app.use('*', cors({
    origin: '*', // Allow requests from anywhere
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE'], // You can customize methods if needed
    allowHeaders: ['Content-Type', 'Authorization'], // Adjust the headers you want to allow
  }));
  
app.route('api/vi/' ,authRouter)
app.route('api/vi/',blogRouter);
 
app.fire()  

export default app
