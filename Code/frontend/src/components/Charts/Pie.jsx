import { Pie } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(
  ArcElement, Tooltip, Legend
)

const PieGraph = () => {

    const data = {
        datasets: [{
            data: [104, 56],
            labels: [
                'Occupied',
                'Vacant'
            ],
            backgroundColor:[
                "rgba(255, 0, 0)",
                "rgba(0, 255, 0)"
            ],
        }],
        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels : [
            "Occupied",
            "Vacant"
        ],
    };

	const options = {
		maintainAspectRatio : false,
        responsive : true
	}

	return(
			<Pie options={options} data = {data}/>
	)
}

export default PieGraph