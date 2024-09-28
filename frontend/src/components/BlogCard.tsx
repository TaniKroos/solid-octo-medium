import { Link } from "react-router-dom";



interface BlogCardInputs{
    authorname: string;
    title: string;
    content: string;
    publishedDate: string;
    id: string;
    createdAat: Date;
    
}
export const BlogCard = ({
    authorname,
    title,
    content,
    publishedDate,
    id ,
    createdAat,
}:BlogCardInputs) =>{


    
   
  const date: Date = new Date(createdAat);
  
  // Format the date using TypeScript types
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    publishedDate  = date.toLocaleDateString('en-US', options);
 
  

        return (
        <Link to={`blog/${id}`} ><div className="border-b border-slate-200 pt-6 pb-2 w-3/4 lg:max-w-screen-lg cursor-pointer mx-4 ">
          
        <div className="flex ">
           <div className="flex justify-center flex-col"> <AvatarCard name={authorname}  /></div>
           <div className="font-extralight pl-2"> {authorname}</div> 
           <div className=" flex justify-center flex-col pl-3">
                <Circle />
            </div>
           <div className="pl-2 font-thin text-slate-400 ">{publishedDate}</div>
        </div>
        <div className="tex-2xl font-bold">
            {title}
        </div>
        <div className="tex-md text-slate-600 font-thin">
            {content.slice(0,147)}...
        </div>
        <div className="text-slate-400 font-thin"> 
             
            {`${Math.ceil(content.length/ 500)} minute(s) read`}
        </div>
         
    </div></Link>
        )
        
}


function Circle(){
    return <div className="rounded-full font-xs h-1 w-1 bg-slate-500 ">
         
    </div>
}

export function AvatarCard({name , size = 1.25 } : {name: string, size?: number}){
    return (
    <div className={`relative inline-flex items-center justify-center   overflow-hidden bg-gray-300 rounded-full dark:bg-gray-500`}
    style={{ width: `${size}rem`, height: `${size}rem` }} >
        <span className="text-xs font-extralight text-blue-300 dark:text-black-300">{name[0]}</span>
    </div>
    )
}


export const SkeletonLoader  = () => {
    return (
        <div className="border-b border-slate-200 pt-6 pb-2 w-screen max-w-screen-lg cursor-pointer animate-pulse bg-white">
      <div className="flex items-center mb-4">
        <div className="flex justify-center flex-col">
          <div className="h-10 w-10 bg-gray-200 rounded-full mb-2"></div> {/* Placeholder for Avatar */}
        </div>
        <div className="font-extralight pl-2">
          <div className="h-4 bg-gray-200 rounded-full w-32"></div> {/* Placeholder for author name */}
        </div>
        <div className="flex justify-center flex-col pl-3">
          <div className="h-4 w-4 bg-gray-200 rounded-full"></div> {/* Placeholder for Circle */}
        </div>
        <div className="pl-2 font-thin text-slate-400">
          <div className="h-4 bg-gray-200 rounded-full w-24"></div> {/* Placeholder for published date */}
        </div>
      </div>
      <div className="text-2xl font-bold">
        <div className="h-6 bg-gray-200 rounded-full w-full mb-2"></div> {/* Placeholder for title */}
      </div>
      <div className="text-md text-slate-600 font-thin">
        <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div> {/* Placeholder for content preview */}
        <div className="h-4 bg-gray-200 rounded-full w-full mb-2"></div> {/* Additional line for content preview */}
      </div>
      <div className="text-slate-400 font-thin">
        <div className="h-4 bg-gray-200 rounded-full w-32"></div> {/* Placeholder for reading time */}
      </div>
    </div>
    );
  };
  
 
  export const LoadingSkeleton = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
        <div className="space-y-4">
          <SkeletonLoader />
          <SkeletonLoader />
          <SkeletonLoader />
        </div>
      </div>
    );
  };