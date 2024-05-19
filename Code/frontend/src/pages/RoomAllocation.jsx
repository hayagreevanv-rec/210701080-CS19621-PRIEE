import SideMenu from "../components/SideMenu"
import NavigationBar from "../components/NavigationBar"
import { useState, useEffect } from "react"
import axios from "axios"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import { useNavigate } from "react-router-dom"

const RoomAllocation = () => {
	const [summary, setSummary] = useState({});
	const [data, setData] = useState([]);

	const navigate = useNavigate();
	const cardStyling1 = "m-6 h-[120px] w-[180px] text-center"
	const cardStyling2 = "m-6 h-[120px] w-[180px] text-center"

	async function fetchData(){
		await axios.get(import.meta.env.VITE_SERVER_URL+'/rooms/summary').then((response)=>{
			setSummary(response.data);
			console.log(response.data);
		});

		await axios.get(import.meta.env.VITE_SERVER_URL+'/rooms/details').then((response)=>{
			setData(response.data);
			console.log(response.data);
		});
	}

	useEffect(()=>{
		fetchData();
	},[]);
	
	return (
	<div className="flex flex-row">
		<SideMenu/>
		<div className="h-screen w-screen bg-white font-poppins">
			<NavigationBar/>
			<div className="flex flex-row justify-center">

				<Card className={cardStyling2}>
					<CardContent>
						<h1 className="font-bold">{"Total"}</h1>
						<p>{summary?.total}</p>
					</CardContent>
				</Card>

				<Card className={cardStyling1}>
					<CardContent>
						<h1 className="font-bold">{"Vacant"}</h1>
						<p>{summary?.curr_avbl}</p>
					</CardContent>
				</Card>

				<Card className={cardStyling2}>
					<CardContent>
						<h1 className="font-bold">{"Occupied"}</h1>
						<p>{summary?.total - summary?.curr_avbl}</p>
					</CardContent>
				</Card>

			</div>
			<div className="flex flex-row justify-center">
			{
				data?.map((row,index)=>{
					return(
								<div className="p-6 h-fit w-fit">
									<Card key={index}>
										<CardContent>
											<h1 className="font-bold">Room ID : {row.room_id}</h1>
											<p>Room Area : {row.room_area}</p>
											<p>Available Occupancy : {row.curr_avbl_occ_capacity}</p>
											<p>Total Occupancy : {row.total_occ_capacity}</p>
											<p>Rent Amount : {row.rent_amt}</p><br/>
											<button onClick={()=>{navigate('/createinpatient');}} className="bg-sky-100 p-2 rounded-sm hover:bg-pink-200 hover:scale-110  hover:transition-all">Book Room</button>
										</CardContent>
									</Card>
								</div>
								)
							}
						)
			}
			</div>
		</div>
	</div>
  ) 
}

export default RoomAllocation