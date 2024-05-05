import { useState, useEffect } from "react";
import toast from "react-hot-toast";

import registerContext from "../contexts/registerContext";

const RegisterProvider = ({children})=>{
    const [register, setRegister] = useState(null);
    const[token,  setToken]= useState(null);

    useEffect(()=>{
        const token = localStorage.getItem("token");

        async function verifyToken(){
            const response = await fetch("http://localhost:9001/verify",{
                method:"POST",
                headers:{
                    "Authorization":`bearer ${token}`
                }
            });

            const res = await response.json;

            if(response.status !== 200){
                switch (res.err_code) {
                    case "SESSION_EXPIRED":
                        toast.error("Session expired!");
                        break;
                    case "INVALID_TOKEN":
                        toast.error("Invalid token!");
                        break;
                    default:
                        toast.error("ASdiaydyaw")
                        break;
                }

                setToken(null);
                setAuth(null);
              

            }
            setToken(token);
            setAuth(res);
        }
        
        if (token)
            verifyToken();
            
    }, []);
    return(
       <registerContext.Provider  value={{register}}>
        {children}
       </registerContext.Provider>
    )
}
export default RegisterProvider;