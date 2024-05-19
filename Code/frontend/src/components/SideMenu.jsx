import { useState } from 'react';
import SideNavBar, { SideBarItem } from '../components/SideNavBar';
import {Link, useNavigate} from 'react-router-dom';
import { LayoutDashboardIcon, UserSquare2, HeartPulseIcon, Stethoscope, NotebookPen, LogInIcon } from 'lucide-react';
import axios from 'axios';
import Cookie from 'js-cookie';

function SideMenu() {
	const [auth, setAuth] = useState(Cookie.get('jwt'));
	const [authButton, setAuthButton] = useState(auth? 'Log Out': 'Log In');
	const navigate = useNavigate();
	const handleAuth = async(e) =>{
		e.preventDefault();
		if(auth){
			await axios.post(import.meta.env.VITE_SERVER_URL+'/auth/logout',{},{withCredentials:true}).then((response)=>{
				console.log(response.data);
			});
			setAuth(Cookie.get('jwt'));
			setAuthButton(auth? 'Log Out': 'Log In');
			navigate('/');
		}else{
			navigate('/login');
		}
	}


  return (
      <>
			<div className='flex flex-col'>
				<SideNavBar>
					<Link to = "/dashboard"><SideBarItem text = "Dashboard" icon = {<LayoutDashboardIcon className="ml-1 w-7 h-7"/>}/></Link>
					<Link to = "/allocation"><SideBarItem text = "Allocation" icon = {<UserSquare2 className="ml-1 w-7 h-7"/>}/></Link>
					<Link to = "/patients"><SideBarItem text = "Patients" icon = {<HeartPulseIcon className="ml-1 w-7 h-7"/>}/></Link>
					<Link to = "/doctors"><SideBarItem text = "Doctors" icon = {<Stethoscope className="ml-1 w-7 h-7"/>}/></Link>
					<Link to = "/appointments"><SideBarItem text = "Appointments" icon = {<NotebookPen className="ml-1 w-7 h-7"/>}/></Link>
					<div onClick={handleAuth}>
						<SideBarItem text = {authButton} icon = {<LogInIcon className="ml-1 w-7 h-7" />}/>
					</div>
				</SideNavBar>
			</div>
      </>
  )
}

export default SideMenu
