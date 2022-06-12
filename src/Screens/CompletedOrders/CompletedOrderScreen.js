import React from "react";
import { useSelector } from "react-redux";
import OrderTableData from "../../Components/OrderTableData/OrderTableData";
import DataUnavl from "../Data Unavilble/DataUnavl";
import "./CompletedOrderScreen.scss";
import * as XLSX from "xlsx";

function CompletedOrderScreen() {
	const { orders } = useSelector((state) => state.project);
	const filteredlist = orders && orders.filter((dat) => dat.Arrival === true);
	console.log("show", filteredlist);
	const exportmysheet = () => {
		var wb = XLSX.utils.book_new();
		var ws = XLSX.utils.json_to_sheet(filteredlist);
		XLSX.utils.book_append_sheet(wb, ws, "Myfirstsheet");
		XLSX.writeFile(wb, "CompletedOrders.xlsx");
	};
	return (
		<>
			{filteredlist.length > 0 ? (
				<div className='myUserdiv'>
					<div className='exportdiv'>
						<h1 className='tableheading'>Completed Arrivals</h1>
						<button onClick={exportmysheet}>Export</button>
					</div>
					<table>
						<tr>
							<th>Client Name</th>
							<th>Employ Email</th>
							<th>Client Phone</th>
							<th>Car Number</th>
							<th>Actions</th>
						</tr>
						{filteredlist.map((dat) => {
							if (dat.ClientName && dat.EmployeeEmail) {
								return (
									<OrderTableData
										name={dat.ClientName}
										email={dat.EmployeeEmail}
										number={dat.ClientNumber}
										carNumber={dat.CarPirateNumber}
										id={dat._id}
										key={dat._id}
									/>
								);
							} else {
								return null;
							}
						})}
					</table>
				</div>
			) : (
				<DataUnavl />
			)}
		</>
	);
}

export default CompletedOrderScreen;
