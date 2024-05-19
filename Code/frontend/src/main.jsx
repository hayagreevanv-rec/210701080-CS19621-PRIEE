import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import DashboardPage from './pages/DashboardPage'
import ErrorPage from './pages/ErrorPage'
import RoomAllocation from './pages/RoomAllocation'
import Patients from './pages/Patients'
import Doctors from './pages/Doctors'
import Appointments from './pages/Appointments'
import UserRegistration from './pages/UserRegistration'
import DoctorDataInsert from './pages/DoctorDataInsert'
import InPatientRegistration from './pages/InPatientRegistration'
import AppointmentRegistration from './pages/AppointmentRegistration'
import Treatments from './pages/Treatments'
import AddTreatment from './pages/AddTreatment'
import DoctorEdit from './pages/DoctorEdit'

const router = createBrowserRouter([
	{
		path : "/",
		element : <App/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "login",
		element : <LoginPage/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "dashboard",
		element : <DashboardPage/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "allocation",
		element : <RoomAllocation/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "patients",
		element : <Patients/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "doctors",
		element : <Doctors/>,
		errorElement : <ErrorPage/> 
	},
	{
		path : "appointments",
		element : <Appointments/>,
		errorElement : <ErrorPage/>
	},{
		path : "createuser",
		element : <UserRegistration/>,
		errorElement : <ErrorPage/>
	},{
		path : "insertdoctor",
		element : <DoctorDataInsert/>,
		errorElement : <ErrorPage/>
	},
	{
		path : "updatedoctor/:id",
		element : <DoctorEdit/>,
		errorElement : <ErrorPage/>
	},{
		path : "createinpatient",
		element : <InPatientRegistration/>,
		errorElement : <ErrorPage/>
	},{
		path : 'createappointment',
		element : <AppointmentRegistration />,
		errorElement : <ErrorPage />
	},{
		path : 'treatments',
		element : <Treatments />,
		errorElement : <ErrorPage />
	},{
		path : 'addtreatment',
		element : <AddTreatment />,
		errorElement : <ErrorPage />
	}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router = {router}/>
	</React.StrictMode>
)
