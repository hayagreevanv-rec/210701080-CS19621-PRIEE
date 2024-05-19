import { useState } from "react";
import {useNavigate} from "react-router-dom";
import cardiogramIcon from "../assets/images/electrocardiogram.svg" 
import axios from 'axios';


const LoginPage = () => 	{
	const [data,setData] = useState({});
	const navigate = useNavigate();

   const handleLogin = async(e) =>{
	e.preventDefault();
		await axios.post(import.meta.env.VITE_SERVER_URL+'/auth/login',data,{
			headers: {'content-type': 'application/x-www-form-urlencoded'},
            withCredentials: true,
            credentials: 'include'
		}).then((response)=>{
			console.log(response.data)
			console.log("Logged in!");
			navigate('/');
		});
   }

   const handleChange = (e) =>{
		setData({...data,[e.target.name]:e.target.value});
   }
    return(
      <>
        <div className="h-screen w-screen bg-[url('./assets/images/login-blue.jpg')] bg-cover flex flex-row justify-center items-center">
			<img src ={cardiogramIcon} className="h-80 absolute z-0 animate-pulse opacity-5"/>
				<div className="flex flex-col w-3/12 h-[350px] bg-blue-400/10 p-4 z-10 justify-center rounded-lg border-2 border-white font-poppins text-center ">
					<div><h1 className="text-white text-2xl">Welcome Back</h1></div>
					<br/>
					<form onSubmit={handleLogin}>
						<div className="flex justify-around">
							<label className="text-white" htmlFor = "emailid">Email ID</label>
							<input className ="h-7 w-[200px] border-2 rounded-lg" id = "emailid" type = "email" name="email" required onChange={handleChange}/>
						</div>
						<br/>
						<div className="flex justify-around">
							<label className = "text-white" htmlFor = "password">Password</label>
							<input className="h-7 w-[200px] border-2 rounded-lg" id = "password" type = "password" name= "password" required onChange={handleChange}/>
						</div>
						<br/>
						<div className="ml-6">
							<input className = "bg-blue-500 rounded-full w-20 h-8 text-center hover:border-blue-500 hover:border-2 hover:bg-white hover:text-blue-950" type = "submit"/>
						</div>
					</form>
				</div>
		</div>
      </>
    )
}

export default LoginPage;