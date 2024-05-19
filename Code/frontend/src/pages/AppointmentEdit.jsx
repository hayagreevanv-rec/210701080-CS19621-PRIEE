import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const AppointmentEdit = () => {

  const navigate = useNavigate();

    const [data, setData] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event) => {
      event.preventDefault();

        await axios.put(import.meta.env.VITE_SERVER_URL+'/appointments/edit',data,{
          headers: {'content-type': 'application/x-www-form-urlencoded'},
                withCredentials: true,
                credentials: 'include'
        }).then((response)=>{
          console.log(response.data)
          navigate('/appointments');
        });
    }

  const inputStyling = "w-3/4 h-[30px] rounded-md focus:scale-110 transition-all p-2"
  const labelStyling = "text-lg text-white" 

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <div className="h-fit w-fit bg-slate-400 p-6 rounded shadow-md font-poppins">
        <h1 className="text-3xl text-white">Appointment Form</h1>
        <br/>
        <form onSubmit={handleSubmit}>
  
        {/* Common inputs */}
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="patient_id" className={labelStyling}>Patient ID : </label>
          <input type="text" name="patient_id" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="appointment_date" className={labelStyling}>Appointment Date : </label>
          <input type="date" name="appointment_date" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="appointment_time" className={labelStyling}>Appointment Time : </label>
          <input type="time" name="appointment_time" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="appointment_reason" className={labelStyling}>Appointment Reason : </label>
          <input type="text" name="appointment_reason" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="doctor_id" className={labelStyling}>Doctor ID : </label>
          <input type="text" name="doctor_id" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="test_msrmnt_dtl" className={labelStyling}>Test Measurement : </label>
          <input type="text" name="test_msrmnt_dtl" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="prescription_dtl" className={labelStyling}>Prescription : </label>
          <input type="text" name="prescription_dtl" className = {inputStyling} onChange={handleChange}/>
        </div>
  
        <br/>
        <input type = "submit" className="text-blue-950 border-solid h-fit w-fit bg-white p-2 rounded hover:bg-gradient-to-r from-sky-300 to-white hover:transition-all hover:scale-110 hover:border-solid hover:border-black border-2"/>
        </form>
      </div>
    </div>
  );
};

export default AppointmentRegistration;
