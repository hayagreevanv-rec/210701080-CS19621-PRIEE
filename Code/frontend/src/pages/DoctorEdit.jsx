import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const DoctorEdit = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: "",
        email: "",
        specialization: "",
        dob: "",
        years_expr: "",
        address: "",
        gender: "",
        on_duty: "",
        emp_ind: ""
    });
    const { id: doctor_id } = useParams();

    useEffect(() => {
        const getDoctorData = async () => {
            try {
                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/doctor/getData/${doctor_id}`);
                const fetchedData = response?.data;
				//console.log(fetchedData)
                // Format date to yyyy-MM-dd
                if (fetchedData.dob) {
                    fetchedData.dob = new Date(fetchedData.dob).toISOString().split('T')[0];
                }
                setData(fetchedData);
            } catch (error) {
                console.error('Error fetching doctor data:', error);
            }
        };

        getDoctorData();
    }, [doctor_id]);

    const handleChange = (event) => {
        const name = event.target.name;
		const value = event.target.value;
        setData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };	

    const handleSubmit = async (event) => {
        event.preventDefault();
		console.log(data)
        try {
            const response = await axios.put(`${import.meta.env.VITE_SERVER_URL}/doctor/update`, data, {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                withCredentials: true,
                credentials: 'include'
            });
            console.log(response.data);
            console.log("Updated successfully");
            navigate('/doctors');
        } catch (error) {
            console.error('Error updating doctor data:', error);
        }
    }

    const inputStyling = "w-3/4 h-[30px] rounded-md focus:scale-110 transition-all p-2";
    const labelStyling = "text-lg text-white";

    return (
        <div className="flex justify-center items-center h-screen w-screen">
            <div className="h-fit w-fit bg-red-300 p-6 rounded shadow-md font-poppins">
                <h1 className="text-3xl text-white">Doctor Update Form</h1>
                <br />
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="doctorname" className={labelStyling}>Doctor Name:</label>
                        <input type="text" name="doctorname" className={inputStyling} value={data?.name || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="email" className={labelStyling}>Email:</label>
                        <input type="email" name="email" className={inputStyling} value={data?.email || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="specialization" className={labelStyling}>Specialization</label>
                        <select name="specialization" onChange={handleChange} value={data?.specialization || ""} className="w-1/2 h-[30px] rounded-md focus:scale-110 transition-all" required>
                            <option value="General Consultant">General Consultant</option>
                            <option value="Orthologist">Orthologist</option>
                            <option value="Neurologist">Neurologist</option>
                            <option value="Pediatrician">Pediatrician</option>
                            <option value="Dermatologist">Dermatologist</option>
                            <option value="Oncologist">Oncologist</option>
                            <option value="Gynaecologist">Gynaecologist</option>
                        </select>
                    </div>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="dob" className={labelStyling}>Date Of Birth:</label>
                        <input type="date" name="dob" className={inputStyling} value={data?.dob || ""} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="gender" className={labelStyling}>Gender</label>
                        Male <input type="radio" value="M" name="gender" className="hover:scale-150" checked={data?.gender === 'M'} onChange={handleChange} required />
                        Female <input type="radio" value="F" name="gender" className="hover:scale-150" checked={data?.gender === 'F'} onChange={handleChange} />
                    </div>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="years_expr" className={labelStyling}>Years Of Experience:</label>
                        <input type="text" name="years_expr" className={inputStyling} value={data?.years_expr || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="address" className={labelStyling}>Address:</label>
                        <input name="address" type="text" className={inputStyling} value={data?.address || ""} onChange={handleChange} />
                    </div>
                    <div className="flex flex-row justify-between p-4">
                        <label htmlFor="on_duty" className={labelStyling}>On Duty</label>
                        Yes <input type="radio" value="Y" name="on_duty" className="hover:scale-150" checked={data?.on_duty === 'Y'} onChange={handleChange} required />
                        No <input type="radio" value="N" name="on_duty" className="hover:scale-150" checked={data?.on_duty === 'N'} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="emp_ind" className={labelStyling}>Employment Indicator</label>
                        Yes <input type="radio" value="Y" name="emp_ind" className="hover:scale-150" checked={data?.emp_ind === 'Y'} onChange={handleChange} required />
                        No <input type="radio" value="N" name="emp_ind" className="hover:scale-150" checked={data?.emp_ind === 'N'} onChange={handleChange} />
                    </div>
                    <br />
                    <input type="submit" className="text-blue-950 border-solid h-fit w-fit bg-white p-2 rounded hover:bg-gradient-to-r from-sky-300 to-white hover:transition-all hover:scale-110 hover:border-solid hover:border-black border-2" />
                </form>
            </div>
        </div>
    );
};

export default DoctorEdit;
