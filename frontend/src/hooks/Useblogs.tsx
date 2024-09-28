import { useState ,useEffect} from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

export interface Blog {
    createdAt: string;
   
        content: string;
      title: string;
        "author": {
            username: string
        },
       id: string;
 
}


export const useBlog = ({id}:{id:string}) => {
     const [loading, setloading] = useState(true);
     const [blog, setBlog] = useState<Blog | null>();
     console.log(id);
     useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/vi/blog/${id}`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
 
        })
        .then(response =>{
               setBlog(response.data.blog);
               setloading(false);
        });
     },[id]);

     return {
        loading,
        blog,
     }
}

export const useBlogs = () => {
     const [loading,setloading] = useState(true);
     const [blogs, setBlogs] = useState<Blog[]>([]);
    const navigate = useNavigate()
     useEffect(() =>{
        axios.get(`${BACKEND_URL}/api/vi/blog/blogs`,{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            },
        })
            
            .then(response =>{
                if(!response.data.blog){
                    navigate('/signin');
                }
                setBlogs(response.data.blogs)
                setloading(false);
            })
     },[]);

     return {
        loading,
        blogs,
     }
        
     
}