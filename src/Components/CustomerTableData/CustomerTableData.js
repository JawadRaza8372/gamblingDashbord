import React, { useState } from "react";
import { apiurl } from "../../App";
import ButtonsDiv from "../../Components/ButtonsDiv/ButtonsDiv";
import CustomModel from "../CustomModel/CustomModel";
import { useSelector } from "react-redux";
import axios from "axios";
import OrderTableData from "../../Components/OrderTableData/OrderTableData";

function CustomerTableData({ id, name, email, number, identityNumbr }) {
	const [show, setShow] = useState(false);
	const { orders } = useSelector((state) => state.project);
	const completed = orders.filter(
		(dat) => dat.Arrival === true && dat.EmployeeID === id
	);
	const notcompleted = orders.filter(
		(dat) => dat.Arrival === false && dat.EmployeeID === id
	);

	const [showtype, setshowtype] = useState("1");

	const employdeltfunc = async () => {
		await axios.post(`${apiurl}/Employee/deleteUser`, {
			Email: email,
		});
		// setisLoading(true);
	};
	return (
		<>
			<tr key={id}>
				<td>{name}</td>
				<td>{email}</td>
				<td>{number}</td>
				<td>{identityNumbr}</td>
				<td>
					<ButtonsDiv
						deltFun={employdeltfunc}
						morefunct={() => setShow(!show)}
						sectit='Ban'
					/>
				</td>
			</tr>
			<CustomModel showModel={show} toggleModel={() => setShow(!show)}>
				<div className='btndiv'>
					{showtype === "1" ? (
						<>
							<span>Completed Orders</span>
							<button onClick={() => setshowtype("2")}>Pending Orders</button>
						</>
					) : (
						<>
							<span>Pending Orders</span>

							<button onClick={() => setshowtype("1")}>Completed Orders</button>
						</>
					)}
				</div>
				<div className='mainContain'>
					{showtype === "1" ? (
						completed.length > 0 ? (
							<div className='myUserdiv'>
								<table>
									<tr>
										<th>Client Name</th>
										<th>Employ Email</th>
										<th>Client Phone</th>
										<th>Car Number</th>
										<th>Actions</th>
									</tr>

									{completed.map((dat) => (
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
							<div className='notfound'>not found</div>
						)
					) : null}
					{showtype === "2" ? (
						notcompleted.length > 0 ? (
							<div className='myUserdiv'>
								<table>
									<tr>
										<th>Client Name</th>
										<th>Employ Email</th>
										<th>Client Phone</th>
										<th>Car Number</th>
										<th>Actions</th>
									</tr>
									{notcompleted.map((dat) => (
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
							<div className='notfound'>not found</div>
						)
					) : null}
				</div>
			</CustomModel>
		</>
	);
}

export default CustomerTableData;
