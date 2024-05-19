import {Link} from "react-router-dom"
import profileIcon from "../assets/images/profileIcon.svg"
import axios from "axios";

const NavigationBar = () => {

  const buttonStyling = 'bg-white h-[60px] w-36 p-5 text-center hover:bg-slate-400 hover:text-white';
  const handleLogout = async(e) =>{
	e.preventDefault();
	await axios.get(import.meta.env.VITE_SERVER_URL+'/auth/logout',{withCredentials:true}).then((res)=>{
		console.log(res.data);
	})
  }
  return (
    <>
		<div>
			<div className='flex flex-row h-14 w-full bg-white justify-center items-center text-center border-b'>
			
			</div>
		</div>
    </>
  )
}

export default NavigationBar;
