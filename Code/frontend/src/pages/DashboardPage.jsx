import React from 'react'
import  NavigationBar from '../components/NavigationBar'
import LineGraph from '../components/Charts/Line'
import PieGraph from '../components/Charts/Pie'
import SideMenu from '../components/SideMenu'


const DashboardPage = () => {
  return (
    <>
		<div className='flex flex-row'>
			<SideMenu/>
			<div className="h-fit w-screen bg-white font-poppins">	
			  	<NavigationBar/>
				<div className='grid grid-cols-3 grid-rows-1 gap-4 justify-center'>
					<div className='p-5'>
						<PieGraph/>
	        		</div>
					<div className='flex flex-col items-center justify-evenly'>
						<div className='h-[150px] w-[300px] bg-slate-200 p-5 text-center rounded-md shadow-md'>
							<h2>Occupied Beds</h2>
							<br/>
							<p className='text-4xl'>104</p>
						</div>
						<div className='h-[150px] w-[300px] bg-slate-200 p-5 text-center rounded-md shadow-md'>
							<h2>Vacant Beds</h2>
							<br/>
							<p className='text-4xl'>56</p>
						</div>
					</div>
					<div className='flex flex-col items-center justify-between'>
						<div className='h-[200px]'>
							<LineGraph/>
						</div>
						<div className='h-[200px]'>
							<LineGraph/>
						</div>
					</div>
				</div>
	      	</div>
		</div>
    </>
  )
}

export default DashboardPage