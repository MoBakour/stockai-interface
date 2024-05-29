import { useEffect, useState } from "react";

import Chart from "../components/Chart";
import PromptInput from "../components/PromptInput";

interface Record {
	year: string;
	price: number;
}

const Home = () => {
	const [data, setData] = useState<Record[]>();

	useEffect(() => {
		(async () => {
			// fetch data here
			/*
			const response = await fetch("http://localhost:3000", {
				method: "GET",
				headers: {
					"Content-Type": "application/json"
				}
			});
			const responseData = response.json();
			setData(responseData);
			*/

			// placeholder data (remove this)
			setData([
				{
					year: "2022",
					price: 10000,
				},
				{
					year: "2023",
					price: 500,
				},
				{
					year: "2024",
					price: 13000,
				},
			]);
		})();
	});

	return (
		<div className="animate-slide-from-top">
			{/* search bar */}
			<PromptInput />

			{/* chart */}
			<div className="w-2/3 m-auto pt-10">
				{data && (
					<Chart
						data={data.map((record) => record.price)}
						labels={data.map((record) => record.year)}
					/>
				)}
			</div>
		</div>
	);
};

export default Home;
