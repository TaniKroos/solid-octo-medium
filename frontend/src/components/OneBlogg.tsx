import { Appbar } from "./Appbar"
import {Blog} from '../hooks/Useblogs'
import { AvatarCard } from "./BlogCard"
export const Blogg = ({blog} : {blog: Blog}) =>{
    console.log(blog)
    const date: Date = new Date(blog.createdAt);
  
    // Format the date using TypeScript types
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
      const publishedDate  = date.toLocaleDateString('en-US', options);
   

      return (
        <div>
            <Appbar />
                <div className="grid grid-cols-12 pt-20 h-screen ">
                    <div className="col-span-8 pl-40">
                    
                    <div className=" text-5xl font-extrabold  ">
                        {blog.title}
                    </div>
                    <div className="text-slate-400 pt-3">
                        Posted on {publishedDate}

                    </div>
                    <div className="pt-4">
                        {blog.content}
                    </div>
                    </div>
                    
                    
                    <div className="col-span-4 pt-2 px-10">
                        Author
                        <div className="flex   w-full  ">
                            <div className="flex flex-col justify-center">
                            <AvatarCard name={blog.author.username} size={1.5}/>
                            </div>
                            <div className="text-slate-400  pl-2">
                                    {blog.author.username || "Anonymous "}
                                    <div className="text-slate-400 ">
                                        Eat&Sleep
                                    </div>
                                    </div>
                                   
                          
                            
                             
                            
                        </div>
                        
                    </div> 
                </div>

        </div>
       
      )
} 