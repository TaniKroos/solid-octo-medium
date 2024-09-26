import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { decode , sign , verify } from 'hono/jwt'
const blogRouter = new Hono<{ 
    Bindings:{ // ensure that certain bindings are available and type-checked 
        DATABASE_URL: string ,
        JWT_SECRET: string ,
    }
}>();
blogRouter.use('api/vi/blog/*', async (c,next) => {
    const header = c.req.header('Authorization') || "";  
    const token = header.split(" ")[1];
    const r = await verify(token,c.env.JWT_SECRET)
    if(r.id){
        next()
    }
    else{
        c.status(401);
        return c.json({
            msg: "Unauthorized"
        });
    }
})