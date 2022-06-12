import React from "react";
import { useSelector } from "react-redux";
import OrderTableData from "../../Components/OrderTableData/OrderTableData";
import DataUnavl from "../Data Unavilble/DataUnavl";
import "./PedingOrder.scss";
import * as XLSX from "xlsx";

function PendingOrderScreen() {
	const { orders } = useSelector((state) => state.project);
	const filteredlist = orders && orders.filter((dat) => dat.Arrival === false);
	const exportmysheet = () => {
		var wb = XLSX.utils.book_new();
		var ws = XLSX.utils.json_to_sheet(filteredlist);
		XLSX.utils.book_append_sheet(wb, ws, "Myfirstsheet");
		XLSX.writeFile(wb, "PendingOrders.xlsx");
	};
	return (
		<>
			{filteredlist.length > 0 ? (
				<div className='myUserdiv'>
					<div className='exportdiv'>
						<h1 className='tableheading'>Pending Arrivals</h1>
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
						{filteredlist.map((dat) => (
							<OrderTableData
								name={dat.ClientName}
								email={dat.EmployeeEmail}
								number={dat.ClientNumber}
								carNumber={dat.CarPirateNumber}
								id={dat._id}
								key={dat._id}
							/>
						))}
					</table>
				</div>
			) : (
				<DataUnavl />
			)}
		</>
	);
}

export default PendingOrderScreen;
