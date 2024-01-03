"use client";
import React, { useEffect } from "react";
import { Bar, Line } from "react-chartjs-2";
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	BarElement,
} from "chart.js";
import { useQuery } from "@apollo/client";
import { TasksWorkedOnAnalyticsEachDayOfUser } from "@/graphql/queries.graphql";
import { TasksCompletedAnalyticsEachDayOfUser } from "@/graphql/queries.graphql";
import { CountResult } from "@/generated/graphql";

ChartJS.register(
	CategoryScale,
	BarElement,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
);

const LineChart = () => {
	const [lineData, setLineData] = React.useState<number[]>([]);
	const [loading, setLoading] = React.useState(true);
	const {
		loading: fetchLoading,
		error,
		data: fetchedData,
	} = useQuery(TasksCompletedAnalyticsEachDayOfUser);

	useEffect(() => {
		if (fetchedData) {
			const fetchedTaskData: CountResult[] = fetchedData.tasksCompletedAnalyticsEachDayOfUser;
			setLineData(fetchedTaskData.map((task) => task.count));
			setLoading(false);
		}
	}, [fetchedData, setLineData]);

	useEffect(() => {
		console.log(lineData);
	}, [lineData]);
	if (loading) return <p>Loading...</p>;

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Completed Task (daily)",
			},
		},
	};
	const labels = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
	const data = {
		labels: labels,
		datasets: [
			{
				label: "My First Dataset",
				data: lineData,
				fill: false,
				borderColor: "rgb(75, 192, 192)",
				tension: 0.1,
			},
		],
	};
	return <Line options={options} data={data} />;
};

const BarChart = () => {
	const [firstBarData, setFirstBarData] = React.useState<number[]>([]);
	const [secondBarData, setSecondBarData] = React.useState<number[]>([]);
	const [loading, setLoading] = React.useState(true);
	const [secondLoading, setSecondLoading] = React.useState(true);
	const {
		loading: fetchWorkedLoading,
		error,
		data: fetchedWorkedData,
	} = useQuery(TasksWorkedOnAnalyticsEachDayOfUser);

	const {
		loading: fetchCompletedLoading,
		error: _error,
		data: fetchedCompletedData,
	} = useQuery(TasksCompletedAnalyticsEachDayOfUser);

	useEffect(() => {
		if (fetchedCompletedData) {
			const fetchedCompletedTaskData: CountResult[] =
				fetchedCompletedData.tasksCompletedAnalyticsEachDayOfUser;
			setFirstBarData(fetchedCompletedTaskData.map((task) => task.count));
			setLoading(false);
		}
	}, [fetchedCompletedData, setFirstBarData]);

	useEffect(() => {
		if (fetchedWorkedData) {
			const fetchWorkedTaskData: CountResult[] =
				fetchedWorkedData.tasksWorkedOnAnalyticsEachDayOfUser;
			setSecondBarData(fetchWorkedTaskData.map((task) => task.count));
			setSecondLoading(false);
		}
	}, [setSecondBarData, fetchedWorkedData]);

	if (loading) return <p>Loading...</p>;

	const options = {
		responsive: true,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Tasks Worked On VS Completed (daily)",
			},
		},
	};
	const labels = ["Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday"];
	const data = {
		labels,
		datasets: [
			{
				label: "Task Worked On",
				data: firstBarData,
				backgroundColor: "rgba(255, 99, 132, 0.5)",
			},
			{
				label: "Task Completed",
				data: secondBarData,
				backgroundColor: "rgba(53, 162, 235, 0.5)",
			},
		],
	};
	return <Bar options={options} data={data} />;
};

const Analytics = () => {
	return (
		<div className="h-full w-full ">
			<p className="text-2xl font-semibold">Analytics</p>
			<div className="grid grid-cols-2 bg-card">
				<div className="">
					<LineChart />
					<BarChart />
				</div>
			</div>
		</div>
	);
};

export default Analytics;
