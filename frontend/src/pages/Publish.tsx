import { useState } from "react";
import { Appbar } from "../components/Appbar";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export const Publish = () => {
  const [text, setText] = useState("");
const [title,setTitle] = useState("")
const navigate = useNavigate();
  return (
    <div className=" flex flex-col">
      <Appbar />
      <div className="flex-grow flex justify-center items-center pt-20">
        <div className="w-full max-w-4xl">
          <input
           onChange={(e)=>{
            setTitle(e.target.value);
           }}
            placeholder="Title"
            className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 mb-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
            style={{ marginTop: "0" }} // Reduce margin above title
          />
          <textarea
            className="w-full h-[300px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 mt-4 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow resize-none"
            placeholder="Content..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>



      </div>
      <div className="flex justify-center pt-4">
      <button onClick={async()=>{
         const res = await axios.post(`${BACKEND_URL}/api/vi/blog`, {

            title,
            content: text,

         }, {
            headers:{
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
         } );

         navigate(`/blogs/blog/${res.data.id}`)
      }} className="rounded-full border bg-slate-200  border-slate-300 py-2 px-4 text-center text-sm transition-all shadow-sm hover:shadow-lg text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" type="submit">
                Publish
        </button>
      </div>
    </div>
  );
}; 
