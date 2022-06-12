import React from "react";
import Chart from "react-apexcharts";
import "./CustomerReview.scss";

const CustomerReview = () => {
	const primaryColor = "#282a33";
	const secondryColor = "#e94c3d";
	const data = {
		series: [
			{
				name: "Review",
				data: [20, 50, 30, 90, 40, 120, 100],
			},
		],
		options: {
			chart: {
				type: "area",
				height: "auto",
			},

			fill: {
				colors: [secondryColor],
				type: "gradient",
			},
			dataLabels: {
				enabled: false,
			},
			stroke: {
				curve: "smooth",
				colors: [primaryColor],
			},
			tooltip: {
				x: {
					format: "dd/MM/yy HH:mm",
				},
			},
			grid: {
				show: false,
			},
			xaxis: {
				type: "datetime",
				categories: [
					"2018-09-19T00:00:00.000Z",
					"2018-09-19T01:30:00.000Z",
					"2018-09-19T02:30:00.000Z",
					"2018-09-19T03:30:00.000Z",
					"2018-09-19T04:30:00.000Z",
					"2018-09-19T05:30:00.000Z",
					"2018-09-19T06:30:00.000Z",
				],
				labels: {
					show: true,
					rotate: -45,

					style: {
						colors: [primaryColor],
						fontSize: "14px",
						fontWeight: 400,
						cssClass: "apexcharts-xaxis-label",
					},
				},
				axisBorder: {
					show: true,
					color: primaryColor,
					height: 1,
					width: "100%",
				},
			},
			yaxis: {
				show: true,
				showAlways: true,
				showForNullSeries: true,
				labels: {
					show: true,
					align: "right",
					minWidth: 0,
					style: {
						colors: [primaryColor],
						fontSize: "14px",
						fontWeight: 400,
						cssClass: "apexcharts-yaxis-label",
					},
				},
				axisBorder: {
					show: true,
					color: primaryColor,
					offsetX: 0,
					offsetY: 0,
				},
			},
			toolbar: {
				show: false,
			},
		},
	};
	return (
		<div className='CustomerReview'>
			<Chart options={data.options} series={data.series} type='area' />
		</div>
	);
};

export default CustomerReview;
