import { AvatarCard } from "./BlogCard"
import { Link } from "react-router-dom"
import { HeroButton } from "./HeroButton"
import { useNavigate } from "react-router-dom"
export const Appbar = () => {
    const navigate = useNavigate();
    const name:string  = localStorage.getItem('username') || "";
    return <div className="border-b  bg-customColor flex justify-between py-4  px-10">
      <Link  to={`/blogs`} className="flex flex-col justify-center cursor-ponter">
       
            Medium 
         
      </Link>
      
         <div className="flex">
            
            <div onClick={(e) =>{
                localStorage.removeItem('token');
                e.preventDefault();
                navigate('/signin')
             }}  className="flex items-center cursor-pointer text-sm font-medium text-slate-500 hover:text-slate-700"
            >
               <HeroButton  text={'logout'} />
            </div>
           
            
            <Link to={'/publish'}>
            <HeroButton text={'New'}/>
            </Link>
         
            <AvatarCard name={name} size={1.5} />
         </div>
    </div>

}