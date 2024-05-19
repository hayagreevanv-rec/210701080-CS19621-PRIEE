import { useState } from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const InPatientRegistration = () => {

  const navigate = useNavigate();

    const [data, setData] = useState({});

    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setData(values => ({...values, [name]: value}))
    }

    const handleSubmit = async(event) => {
      event.preventDefault();

        await axios.post(import.meta.env.VITE_SERVER_URL+'/inpatient/add',data,{
          headers: {'content-type': 'application/x-www-form-urlencoded'},
                withCredentials: true,
                credentials: 'include'
        }).then((response)=>{
          console.log(response.data)
          navigate('/');
        });
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
          <label htmlFor="patient_id" className={labelStyling}>Patient ID : </label>
          <input type="text" name="patient_id" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="room_id" className={labelStyling}>Room ID : </label>
          <input type="text" name="room_id" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="admission_date" className={labelStyling}>Admission Date : </label>
          <input type="date" name="admission_date" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="admission_reason" className={labelStyling}>Admission Reason</label>
          <input type="text" name="admission_reason" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="doctor_id" className={labelStyling}>Doctor ID : </label>
          <input type="text" name="doctor_id" className = {inputStyling} onChange={handleChange}/>
        </div>
        <div className="flex flex-row justify-between p-4">
          <label htmlFor="discharge_date" className={labelStyling}>Discharge Date : </label>
          <input type="date" name="discharge_date" className = {inputStyling} onChange={handleChange}/>
        </div>
  
        <br/>
        <input type = "submit" className="text-blue-950 border-solid h-fit w-fit bg-white p-2 rounded hover:bg-gradient-to-r from-sky-300 to-white hover:transition-all hover:scale-110 hover:border-solid hover:border-black border-2"/>
        </form>
      </div>
    </div>
  );
};

export default InPatientRegistration;
