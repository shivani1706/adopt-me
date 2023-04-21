import React,{useState,useEffect} from "react";
import { useFirebase } from "../context/Firebase";
import { useNavigate } from "react-router-dom";
const RegisterPage = () =>{

    const firebase = useFirebase();
     const navigate = useNavigate()
      const [email,setEmail] = useState('');
      const [password,setPassword] = useState('');
     console.log(firebase);
    useEffect(()=>{
        if(firebase.isLoggedIn){
            //navigate to home
            navigate("/");
        }
    },[firebase,navigate]);
     const handleSubmit = async(e) =>{
        e.preventDefault();
        alert("Signing you up...");
        const result = await firebase.signupUserWithEmailAndPassword(email,password)
        // alert("Signed up successfully",result)
    }
  



    return(
        <div className="container mt-5 ">
            <div className="w-full max-w-xs mx-auto">
  <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      
      <input onChange={(e)=>setEmail(e.target.value)} value={email} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  id="email" type="email" placeholder="Email"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Password
      </label>
      <input onChange={(e)=>setPassword(e.target.value)} value={password} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  id="password" type="password" placeholder="******************"/>
      {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
    </div>
    <div className="flex items-center justify-between text-center">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
        Create Account
      </button>
      
    </div>
    <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="/login">
        Already registered ? Login 
      </a>
  </form>
  <h1 className="mt-5 mb-5 text-center"><button onClick={firebase.signinWithGoogle} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-5 mx-5">
      Sign in with Google
</button></h1>
  {/* <p class="text-center text-gray-500 text-xs">
    &copy;2022 Shivani Saraswat. All rights reserved.
  </p> */}
</div>
        </div>
    )
}

export default RegisterPage