import zod from 'zod';

export const SignupInput = zod.object({
    username: zod.string().min(3).max(20),
    email: zod.string().email(),
    password: zod.string().min(8).max(50),
})

export type SignupInput = zod.infer<typeof SignupInput>



export const SigninInput = zod.object({
    email: zod.string().email(),
    password: zod.string().min(8).max(50),
})

export type SigninInput = zod.infer<typeof SigninInput>

export const createBlogInput = zod.object({
    title: zod.string().min(3).max(255),
    content: zod.string().min(10), 
})
export type CreateBlogInput = zod.infer<typeof createBlogInput>



export const updateBlogInput = zod.object({
    title: zod.string().min(3).max(255),
    content: zod.string().min(10), 
    id: zod.string().uuid(), 
})

export type UpdateBlogInput = zod.infer<typeof updateBlogInput>



