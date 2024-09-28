import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient } from "@prisma/client/edge";
import { Context, Hono, Next } from "hono";
import { createBlogInput, updateBlogInput } from '@tanish31/medium-common'
import { decode , sign , verify } from 'hono/jwt'
const blogRouter = new Hono<{ 
    Bindings:{ // ensure that certain bindings are available and type-checked 
        DATABASE_URL: string ,
        JWT_SECRET: string ,
    },
    Variables: {
      userId: string,
    }
}>();
async function blogMiddleWare(c: Context,next: Next){
    const header = c.req.header('Authorization') || "";  
    const token = header.split(" ")[1];
    const r = await verify(token,c.env.JWT_SECRET)
    
    if(r ){
        c.set('userId',r.id);
        await next()
    }
    else{
        c.status(401);
        return c.json({
            msg: "Unauthorized",
       
        });
    }
} 


blogRouter.post('/blog' ,blogMiddleWare, async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const r = createBlogInput.safeParse(body);
    if(!r.success){
        c.status(411)
        return c.json({msg: "Invalid Inputs"});
    }
    const userId = c.get('userId');
    const blog = await prisma.post.create({
        data:{
            title: body.title,
            content: body.content,
            authorId: userId, 
            createdAt: new Date(),
        }
    })

    return c.json({
        id: blog.id,
        msg: "Blog Created Successfully"
    })
    
});
 

blogRouter.put('/blog' ,blogMiddleWare, async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const body = await c.req.json();
    const r = updateBlogInput.safeParse(body);
    if(!r.success){
        c.status(411)
        return c.json({msg: "Invalid Inputs"});
    }
    const userId = c.get('userId');
    const blogg = await prisma.post.update({
        where:{
            id: body.id,
            authorId: userId, 
        },
        data:{
            title: body.title,
            content: body.content,
        }
    }) 

    return c.json({
        msg: "Blog Updated Successfully"
    })
})










blogRouter.get('/blog/blogs' ,blogMiddleWare,  async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())

    const blogs  = await prisma.post.findMany({
        select:{
            content: true,
            title: true,
            author: {
                select:{
                    username: true,
                }
            },
            id:true,
            createdAt: true,
        }
    });
    return c.json({blogs: blogs})

})






blogRouter.get('/blog/:id' ,blogMiddleWare, async(c)=>{
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate())
    const id =   c.req.param("id");
    try {
        const blog = await prisma.post.findFirst({
            where:{
                id:  id
            },
            select:{
                id: true,
                title: true,
                content: true,
                author: {
                    select:{
                        username: true,
                    }
                },
                createdAt: true,
            }
        })  
        return c.json({
            blog,
        })
        
    } catch (e) {
        c.status(404);
        return c.json({
            msg: "Blog Not Found"
        });
    }
})



export default blogRouter