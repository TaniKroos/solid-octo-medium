 
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
           <Blogg blog={blog ?? {}} />
            {/* @ts/ignore */}         
        </div>
    )

}