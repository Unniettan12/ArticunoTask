import React, { useState } from "react"
import useField from "../hooks/useField"
import { useNavigate } from "react-router-dom"

const Login:React.FC = () => {
    
    const navigate = useNavigate()
    
    const email = useField('email')
    const sUserName = useField('string')
    const sPassword = useField('password')

    const lUserName = useField('string')
    const lPassword = useField('password')


    const [tab,setTab] = useState<string>("Signup")

    const [status,setStatus] = useState(0)
    const refresh = () => {
        setStatus(Math.random())
    }
    

    const handleLogin = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        
        // console.log(localStorage.getItem(lUserName.value))
        const username = localStorage.getItem(lUserName.value)
        if(username===null) 
        {
            console.log("wrong credentials")
        }
        else
        {const deets = JSON.parse(username)
            if(lPassword.value===deets[1])
                {
                    console.log("Login successfull")
                    localStorage.setItem("user",lUserName.value)
                    lUserName.clear()
                    lPassword.clear()
                    setTab("Signup")
                    refresh()
                    navigate('/')
                    
                }
                else
                {
                    console.log("wrong credentials")
                }
        }       

    }

    const handleSignUp = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const obj = JSON.stringify([email.value,sPassword.value])
        localStorage.setItem(sUserName.value,obj)
        sUserName.clear()
        email.clear()
        sPassword.clear()
        // console.log(JSON.parse(obj)[1])
        setTab("Login")

    }

    return(
        <div className="flex justify-center items-center h-screen">
            <div className="flex min-h-[50%] max-h-[60%] min-w-[30%] max-w-[50%] bg-gray-100 justify-center items-center border rounded-3xl">
           {tab === "Signup"?(
               <div className="h-full">
               
            <form onSubmit={handleSignUp} className="flex flex-col w-fit p-2">
                <input className="px-8 py-3 border rounded-xl m-4 w-full" {...email} placeholder="Email"/>
                <input className="px-8 py-3 border rounded-xl m-4 w-full" {...sUserName} placeholder="Username"/>
                <input className="px-8 py-3 border rounded-xl m-4 w-full" {...sPassword} placeholder="Password"/>
                <div className="flex w-full justify-between">
                
                <button className="px-5 py-3 border bg-white rounded-2xl" onClick={() => {
                setTab("Login")
            }}>
                Login
            </button>
            <button className="px-5 py-3 border rounded-2xl bg-gradient-to-r from-green-500 to-green-400" type="submit">Submit</button>
                </div>
                
            </form>
            </div>
           ):(
               <div className="h-full">
            <form onSubmit={handleLogin} className="flex flex-col w-fit p-2">
            <input className="px-8 py-3 border rounded-xl m-4 w-full"  {...lUserName} placeholder="Username"/>
            <input className="px-8 py-3 border rounded-xl m-4 w-full"  {...lPassword} placeholder="Password"/>
            <div className="flex w-full justify-between">
            <button className="px-5 py-3 border rounded-2xl bg-white" onClick={() => {
                setTab("Signup")
            }}>
                Sign Up
            </button>
            <button className="px-5 py-3 border rounded-2xl bg-gradient-to-r from-green-500 to-green-400" type="submit">Submit</button>
            </div>
            </form>
            </div>
        )}
        </div>            
        </div>
    )
}

export default Login