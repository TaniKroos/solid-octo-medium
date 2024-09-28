import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard"
import { useBlogs } from "../hooks/Useblogs";
import { LoadingSkeleton } from "../components/BlogCard";
 
export const Blog = () =>{

    const {loading,blogs} = useBlogs();
     console.log(loading); // Example output
    
    return <>

    <div className="bg-cc2 h-screen" >
        <Appbar />
        {loading? (<LoadingSkeleton/> ): <div className="flex justify-center ">
    <div  className= " ">
     {blogs.map(blog => <BlogCard 
         id={blog.id}
         authorname={blog.author.username}
         content={blog.content}
         publishedDate={blog.createdAt}
         title={blog.title} 
         createdAat={new Date(blog.createdAt)}
   />)}
    
    </div>
    </div>}
       
    </div>
    
    
   
    </>
    
}