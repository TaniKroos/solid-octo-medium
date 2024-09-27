
interface InputType {
    label: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    type?: string;
}

export const InputBox = ({label,placeholder,onChange,type}: InputType) =>{

         
        return (
            <div className=" w-full max-w-sm min-w-[200px] pt-4">
                <div>
                {label }
                    
                       
                                <input onChange={onChange} type={type} placeholder={ placeholder} className= "w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow">

                                </input>
                     
                       
       
                    
                </div>

            </div>
        )
}