 
import { LoadingSkeleton } from "../components/BlogCard";
import { Blogg } from "../components/OneBlogg";
import { useParams } from "react-router-dom";
import { useBlog } from "../hooks/Useblogs";
export const Bloggg   = () =>{
    const {id} = useParams();
    const {loading , blog} = useBlog({
        id: id || "",
    })
     
    if(loading){
        return <div>
            <LoadingSkeleton />
        </div>
    }
    return (
        <div>
            {/* @ts-ignore */}
           <Blogg blog={blog || { id: "", title: "", content: "", createdAt: new Date(), author: { username: "" } }} />
                   
        </div>
    )

}