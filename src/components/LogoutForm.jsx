import { useState } from "react";
import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";



import RegistrationForm from "./RegistrationForm";

const LogoutForm = () => {
    const [useremail, setuseremail] = useState('');
    const [password, setPassword] = useState('');
    const [registerNewMember, setRegisterNewMember] = useState(false);

    const handleuseremail = (e) => setuseremail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);

    const handleLogin = async(e) => {
        e.preventDefault();

        // setLoading(true);
        const payload = {
            useremail : useremail,
            password: password,
        }
        console.log(payload);

            const response = await fetch('http://localhost:8006/login',{
                method:"POST",
                headers:{
                    'Content-Type': 'application/json',
                },

                body:JSON.stringify(payload),
            })
            
            await new Promise((resolve,_)=> {
                setTimeout(()=> resolve(),400)
            });

            if( response.status !==200){
                if(res.err_code == "USER_ALREADY_EXIST"){
                    toast.error("user already exists");
                }
                setLoading(false);
                return;

            }

            toast.success("Registered successfull.  You will be redurected in 3 second ..")
            // setTimeout(() => navigate("/login"), 3000);
        };

    const handleNewMember = () => setRegisterNewMember(true);

    const handleBackToLogin = () => setRegisterNewMember(false);

    return (
        <div className="  m-auto max-w-6xl px-6 max-h-2xl mt-8">
            {/* Conditional rendering of either the registration form or the logout form */}
            {registerNewMember ? (
                <>
                    <button onClick={handleBackToLogin} className="absolute lg:mt-[55%] right-20 m-3 font-bold focus:outline-none  texts-white bg-indigo-500  hover:bg-indigo-600 text-lg py-3 px-8  rounded-lg sm:mt-[120%] text-white">Back</button>
                    <RegistrationForm />
                </>
            ) : (
                <form action="post">
                    <div className="flex flex-col relative justify-center mb-10">
                        <input
                            onChange={handleuseremail}
                            type="text"
                            className="w-full h-15 bg-white  border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out peer rounded-lg"
                            placeholder=" "
                            required
                        />
                        <span className="absolute left-3 text-gray-600 flex bg-white transition-all peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 -translate-y-5 pointer-events-none peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs text-md">
                            Email or Phone Number
                        </span>
                    </div>
                    <div className="flex flex-col relative justify-center mb-10">
                        <input
                            onChange={handlePassword}
                            type="text"
                            className="w-full h-12 bg-white rounded-lg border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out peer"
                            placeholder=" "
                            required
                        />
                        <span className="absolute left-3 text-gray-600 flex bg-white transition-all peer-focus:-translate-y-5 peer-placeholder-shown:translate-y-0 -translate-y-5 pointer-events-none peer-focus:text-xs peer-[:not(:placeholder-shown)]:text-xs text-md">
                            Password
                        </span>
                    </div>
                    <div className="mb-10">
                        <button onClick={handleLogin} className="justify-center items-center text-white bg-indigo-500 border-0 py-3 px-10 ml-[5%] focus:outline-none hover:bg-indigo-600 rounded-lg text-lg w-[90%]">
                            Login
                        </button>
                    </div>
                    <div className="mt-5 flex justify-center text-center">
                        <span className="sm:text-md lg:text-lg font-bold py-3 px-5 hover:text-indigo-600 w-[90%]">
                            <a>Forget Password</a>
                        </span>
                    </div>
                    <hr className="mb-10 shadow h-[2px] bg-slate-400 rounded-full" />
                </form>
            )}
            {/* "Create new account" button */}
            {!registerNewMember && (
                <button onClick={handleNewMember} className="justify-center items-center text-white bg-green-500 border-0 py-3 px-10 focus:outline-none hover:bg-green-600 rounded text-lg w-full">
                    Create new account
                </button>
            )}
        </div>
    );
};

export default LogoutForm;
