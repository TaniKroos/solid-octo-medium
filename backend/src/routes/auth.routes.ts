import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Hono } from "hono";
 import bcrypt from 'bcryptjs'
import { SignupInput , SigninInput} from '@tanish31/medium-common'
import { decode , sign , verify } from 'hono/jwt'
const authRouter = new Hono<{ 
    Bindings:{ // ensure that certain bindings are available and type-checked 
        DATABASE_URL: string ,
        JWT_SECRET: string ,
    }
}>();


 
async function hash(password: string){
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
    
}
authRouter.post("/signup",async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
    const body = await c.req.json();
    const r = SignupInput.safeParse(body);
    if(!r.success){
        c.status(411)
        return c.json({msg: "Invalid Inputs"});
    }
    const username: string = body.username;
    const email: string = body.email;
    const password: string = body.password;
    const hashedPassword = await hash(password)
    const  user = await prisma.user.create({
        data: { 
            username,
            email,
            password: hashedPassword ,
        },
    }) 
    const token = await sign({id: user.id}, c.env.JWT_SECRET)
    return c.json({
        jwt: token,
        username: user.username,
         
    })
}) 


authRouter.post("/signin", async (c) => { 
     const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
     }).$extends(withAccelerate())
    const body = await c.req.json();
    const r = SigninInput.safeParse(body);
    if(!r.success){
        c.status(411)
        return c.json({msg: "Invalid Inputs"});
    }
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
    const valid = await bcrypt.compare(password, user.password);
    // const valid = password === user.password;
    if(!valid){
        c.status(403);
        return c.json({
            msg: "Invalid Password"
        });
    }
    const token = await sign({id: user.id},c.env.JWT_SECRET);
    return c.json({
        jwt: token,
        username: user.username,
        
    });
});




export default authRouter  