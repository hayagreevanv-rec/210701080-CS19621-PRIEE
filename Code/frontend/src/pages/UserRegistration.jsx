import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const RegisterForm = () => {

  const navigate = useNavigate();

    const [data, setData] = useState({})
      const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event) => {
      event.preventDefault();
      if(data.password != data.confirmPassword){
          console.log("not valid")
      }
      else{
        await axios.post(import.meta.env.VITE_SERVER_URL+'/auth/register',data,{
          headers: {'content-type': 'application/x-www-form-urlencoded'},
                withCredentials: true,
                credentials: 'include'
        }).then((response)=>{
          console.log(response.data)
          console.log("Logged in!");
          navigate('/');
        });
      }
  }

  const inputStyling = "w-3/4 h-[30px] rounded-md focus:scale-110 transition-all p-2"
  const labelStyling = "text-lg text-white" 

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-fit w-fit bg-slate-400 p-6 rounded shadow-md font-poppins">
        <h1 className="text-3xl text-white">Register Form</h1>
        <br/>
        <form onSubmit={handleSubmit}>
  
        {/* Common inputs */}
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="username" className={labelStyling}>Name:</label>
          <input type="text" name="username" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="email" className={labelStyling}>Email:</label>
          <input type="email" name="email" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="password" className={labelStyling}>Password:</label>
          <input type="password" name="password" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="confirmPassword" className={labelStyling}>Confirm Password:</label>
          <input type="password" name="confirmPassword" className = {inputStyling} onChange={handleChange}/>
        </div>
  
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="role" className={labelStyling}>Select Role:</label>
          Doctor <input type = "radio" value = "doctor" name = "role" className="hover:scale-150" onChange={handleChange} required/>
          Staff <input type = "radio" value = "staff" name = "role" className="hover:scale-150" onChange={handleChange}/>
        </div>
        <br/>
        <input type = "submit" className="text-blue-950 border-solid h-fit w-fit bg-white p-2 rounded hover:bg-gradient-to-r from-sky-300 to-white hover:transition-all hover:scale-110 hover:border-solid hover:border-black border-2"/>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
