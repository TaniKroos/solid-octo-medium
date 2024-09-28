import {Link, useNavigate} from 'react-router-dom'
import { InputBox } from './InputBox'
import { useState } from 'react'
import { SignupInput } from '@tanish31/medium-common'
import axios from 'axios'
import { BACKEND_URL } from '../config'
export const Auth = ({type} : {type: 'signup' | 'signin'}) => {
    const navigate = useNavigate();
    const [postInput,setPostInput] = useState<SignupInput>({
        username: '',
        email: '',
        password: '',
    })
 


    async function sendReq() {
        try{
            const response = await axios.post(`${BACKEND_URL}/api/vi/${type === 'signup' ?"signup":"signin"}`,{
                email: postInput.email,
                password: postInput.password,
                username: type === 'signup'? postInput.username : undefined,
            });
            const jwt = response.data.jwt;
            console.log(jwt);
            localStorage.setItem("token", response.data.jwt);
            localStorage.setItem("username", response.data.username);
            navigate("/blogs")
        }catch(err){
            //alert(err.message)
        }
    }
    return <div className="h-screen flex justify-center bg-slate-200 flex-col">
            <div className="flex justify-center  ">
                <div>
                    <div className="text-3xl font-bold text-slate-900 px-4">
                        {type === "signup" ? "Welcome to Medium": "Sign in to Medium"}
                    </div>
                    
                 
                    <div className="max-w-md text-sm font-light text-slate-400 px-5">
                         {type === "signup" ? "Already have an account?": "Don't have an Account"}
                         {type=== "signup"?<Link to={'/signin '} className='pl-2 underline'>Login</Link>: <Link to={'/signup '} className='pl-2 underline'>SignUp</Link>}
                        
                    </div>
            
                    <div>
                        {type === 'signup' && (
                            <InputBox 
                                label='username' 
                                placeholder='Enter your username' 
                                onChange={(e) => {
                                    setPostInput({
                                        ...postInput,
                                        username: e.target.value
                                    })
                                }} 
                            />
                        )}
                    </div>
                    
                    <div>
                        <InputBox label='email' placeholder='Enter you email' onChange={(e)=>{
                            setPostInput({
                                ...postInput,
                                email: e.target.value
                            })
                        }} />
                    </div>
                  
                    <div>
                        <InputBox label='password' type='password' placeholder='Enter you password' onChange={(e)=>{
                            setPostInput({
                                ...postInput,
                                password: e.target.value
                            })
                        }} />
                    </div>
                    <br />
                    <div>
                        <button onClick={sendReq} type='button' className='pt-2 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4
                        focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 
                        dark:hover:bg-gray-700 dark:focus-ring-gray-700 dark:border-gray-700'>
                                {type === "signup" ? "Sign up": "Sign in"}
                        </button>
                    </div>
                    
                </div>
                    
                     
            </div>
    </div>



}
