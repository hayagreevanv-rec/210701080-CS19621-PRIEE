import SideMenu from '../components/SideMenu'
import NavigationBar from '../components/NavigationBar'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardContent } from '@mui/material'

const Appointments = () => {
  const listStyling = "m-6 h-fit w-fit"
  const [data,setData] = useState([]);

  useEffect(()=>{
    axios.get(import.meta.env.VITE_SERVER_URL+'/appointments/all',{withCredentials:true}).then((response)=>{
      setData(response.data);
      console.log(response.data);
    })
  },[])
  return (
    <div className="flex flex-row">
      <SideMenu/>
      <div className="h-screen w-screen bg-white font-poppins">
          <NavigationBar/>
          <div className='flex flex-col items-center'>
              {
                data?.map((row,index)=>{
                  return(
                  <Card className={listStyling}>
                    <CardContent>
                      <h1 className="font-bold">Appointment ID : {row?.appointment_id}</h1>
                      <p>Patient ID : {row?.patient_id}</p>
                      <p>Appointment Date : {new Date(row?.appointment_date).toLocaleDateString()}</p>
                      <p>Appointment Time : {(row?.appointment_time)?.split('+')[0]}</p>
                      <p>Appointment Reason : {row?.appointment_reason}</p>
                      <p>Doctor ID : {row?.doctor_id}</p>
                      <p>Test Measurements : {row?.test_msrmnt_dtl || '-'}</p>
                      <p>Prescription : {row?.prescription_dtl}</p>
                    </CardContent>
                  </Card>
                )})
              }
          </div>
      </div>
    </div>
  )
}

export default Appointments;