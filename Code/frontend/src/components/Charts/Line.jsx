import { Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'
import { lineChartData } from '../../mockdata/FakeData'

ChartJS.register(
  CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
)

const LineGraph = () => {

	const options = {
		maintainAspectRatio : false,
		responsive : true
	}

	return(
			<Line options={options} data = {lineChartData}/>
	)
}

export default LineGraph