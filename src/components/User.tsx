import { useNavigate} from "react-router-dom"
import { useState, useEffect } from "react"

const User:React.FC=() => {
   
     const [status,setStatus] = useState(0)

  

    return(
        <div>
            {
                localStorage.getItem("user")=== ""?
                (
                <div>
                    <a href="/login">
                        <button className="bg-gradient-to-r from-[#43CBFF] to-[#9708CC] px-5 p-2 rounded-2xl text-white">Sign up</button>
                    </a>
                </div>
                ):(
                <div>
                    <div>{localStorage.getItem("user")}</div>
                    <div>
                        <button className="" onClick={() => {
                            localStorage.setItem("user","")
                            setStatus(Math.random())
                            
                        }}>
                            Log out
                        </button>
                    </div>
               </div>)

                
            }
        </div>
    )
}

export default User