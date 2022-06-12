import React from "react";
import { useSelector } from "react-redux";
import "./UserScreen.scss";
import DataUnavl from "../Data Unavilble/DataUnavl";
import CustomerTableData from "../../Components/CustomerTableData/CustomerTableData";
import * as XLSX from "xlsx";
function UserScreen() {
	const { employs } = useSelector((state) => state.project);
	const exportmysheet = () => {
		var wb = XLSX.utils.book_new();
		var ws = XLSX.utils.json_to_sheet(employs);
		XLSX.utils.book_append_sheet(wb, ws, "Myfirstsheet");
		XLSX.writeFile(wb, "EmployData.xlsx");
	};
	return (
		<>
			{employs.length > 0 ? (
				<div className='myUserdiv'>
					<div className='exportdiv'>
						<h1 className='tableheading'>Users</h1>
						<button onClick={exportmysheet}>Export</button>
					</div>
					<table>
						<tr>
							<th>Name</th>
							<th>Email</th>
							<th>Phone</th>
							<th>User ID</th>
							<th>Actions</th>
						</tr>
						{employs.map((dat) => {
							if (dat.name && dat.email) {
								return (
									<CustomerTableData
										key={dat.id}
										id={dat.id}
										name={dat.name}
										email={dat.email}
										number={dat.phone}
										identityNumbr={dat.userid}
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

export default UserScreen;
