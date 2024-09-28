import notepad from '../assets/notepad.jpg'

export const Heading = () => {
    return <div className="p-4 mt-8 ml-4 ">
        <h1 className="text-3xl font-bold text-slate-700 px-4">Welcome to Solido-Octo</h1>
        <br />
        <h2 className="text-2xl font-semibold font-serif text-slate-600 px-4">A blogging platform made with React, Tailwind CSS and deployed on 
        serverless environment usign cloudflare workers.</h2>
        <br />
        <h3 className="text-sm font-light font-serif text-slate-500 px-4">Stay updated with the latest blogs from our community</h3>
        <br />
        <h3 className="text-sm font-light font-serif text-slate-500 px-4">Hala Madrid</h3>
    </div>
}
export const Heading2 = () =>{
    return <div className="p-4 mt-8 ml-4 ">
        <h1 className="text-3xl font-bold text-slate-700 px-4">"Join the Conversation: Share Your Story, Change the World!"</h1>
        <br />
         
        <div className="  flex justify-center items-center mt-4 mb-2">
            <div className="flex flex-col  ">
                {/* Other content here */}
            </div>
            <img className="w-64 h-48 rounded-md mr-20 " src={notepad} alt="Notepad" />
        </div>

        <br />
        <h3 className="text-md font-light font-serif text-slate-500 px-4">Get your Chai and share your thoughts!</h3>
        <br />
        <h3 className="text-sm font-light font-serif text-slate-500 px-4">{'<3'}</h3>
    </div>
}