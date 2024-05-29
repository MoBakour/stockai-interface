import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { formatCurrency } from "../utils/formatter";

interface IChart {
	data: number[];
	labels: string[];
}

const Chart = ({ data, labels }: IChart) => {
	ChartJS.register(
		CategoryScale,
		LinearScale,
		PointElement,
		LineElement,
		Title,
		Tooltip,
		Legend
	);

	const chartData = {
		labels: labels,
		datasets: [
			{
				label: "Stock Price",
				data: data,
				fill: false,
				borderColor: "#6C00D7",
				borderWidth: 3,
			},
		],
	};

	const chartOptions = {
		plugins: {
			title: {
				display: true,
				text: "Tesla Stocks",
				color: "white",
				font: {
					size: 20,
					family: "Quicksand",
				},
			},
			legend: {
				display: false,
			},
		},
		scales: {
			x: {
				grid: {
					color: "rgba(255,255,255,0.2)",
				},
				title: {
					display: true,
					text: "Date",
					color: "white",
					font: {
						size: 16,
					},
				},
			},
			y: {
				ticks: {
					callback: (value: string | number) => {
						return formatCurrency(value);
					},
				},
				grid: {
					color: "rgba(255,255,255,0.2)",
				},
				title: {
					display: true,
					text: "Price",
					color: "white",
					font: {
						size: 16,
					},
				},
			},
		},
	};
	return <Line data={chartData} options={chartOptions} />;
};

export default Chart;
