import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
import { decode , sign , verify } from 'hono/jwt'
const authRouter = new Hono<{ 
    Bindings:{ // ensure that certain bindings are available and type-checked 
        DATABASE_URL: string ,
        JWT_SECRET: string ,
    }
}>();

authRouter.post("/signup",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
    const body = await c.req.json();
    const username: string = body.username;
    const email: string = body.email;
    const password: string = body.password;

    const  user = await prisma.user.create({
        data: { 
            username,
            email,
            password,
        },
    })
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({
        jwt: token,
        msg: "Hello From A Serverless Environment"
    })
}) 


authRouter.post("/signin", async (c) => {
     const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
    const body = await c.req.json();
    const email = body.email;
    const password = body.password;
     const user = await prisma.user.findUnique({
        where: {
            email,
        },
     })

    if(!user){
        c.status(403);
        return c.json({
            msg: "User not found"
        });
    }
    if(password != user.password){
        c.status(403);
        return c.json({
            msg: "Invalid Password"
        });
    }
    const token = await sign({id: user.id},c.env.JWT_SECRET);
    return c.json({
        jwt: token,
        msg: "Hello From A Serverless Environment"
    });
});




export default authRouter  