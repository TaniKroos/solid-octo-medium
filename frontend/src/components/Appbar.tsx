import { AvatarCard } from "./BlogCard"
import { Link } from "react-router-dom"
export const Appbar = () => {
    return <div className="border-b   flex justify-between py-4  px-10">
      <Link  to={`/blogs`} className="flex flex-col justify-center cursor-ponter">
       
            Medium 
         
      </Link>
      
         <div>
            <Link to={'/publish'}>
            <button className=" mr-6 bg-green-400 hover:bg-green-500 text-white  font-medium 
         focus:outline-none focus:ring-4 focus:ring-green-300 text-sm  py-2.5 px-5 text-center me-2 mb-2  rounded-full">New</button>
            </Link>
         
            <AvatarCard name="Tanish" size={1.5} />
         </div>
    </div>

}